import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing with size limit for code and payload transfers
  app.use(express.json({ limit: "10mb" }));

  // API Route: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: Antigravity Agent python execution bridge
  app.post("/api/antigravity", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "실행할 파이썬 명령어 또는 프롬프트가 주어지지 않았습니다." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
      return res.status(400).json({
        error: "GEMINI_API_KEY가 서버 환경 변수에 없습니다. 앱 설정(Settings > Secrets)에서 API Key를 입력해주시면 즉시 정상 작동합니다."
      });
    }

    try {
      // 1. Initialize client using modern google/genai SDK
      const ai = new GoogleGenAI({ apiKey });
      
      console.log(`[Antigravity] Invoking agent for prompt length: ${prompt.length}`);
      
      // 2. Invoke antigravity agent with remote remote sandboxed sandbox environment
      const interaction = await ai.interactions.create({
        agent: "antigravity-preview-05-2026",
        input: prompt,
        environment: "remote",
      }, { timeout: 300000 }); // Large timeout for complex installations/computations if any

      console.log(`[Antigravity] Call successfully completed. ID: ${interaction.id}`);

      // 3. Collate complete chronological output from model steps to avoid truncated responses
      let fullOutputText = "";
      if (interaction.steps) {
        for (const step of interaction.steps) {
          if (step.type === 'model_output') {
            const textContent = step.content?.find(c => c.type === 'text');
            if (textContent && textContent.text) {
              fullOutputText += textContent.text;
            }
          }
        }
      }

      // Fallback to unified property if empty
      if (!fullOutputText) {
        fullOutputText = interaction.output_text || "";
      }

      return res.json({
        success: true,
        id: interaction.id,
        environmentId: interaction.environment_id,
        steps: interaction.steps || [],
        outputText: fullOutputText,
      });

    } catch (error: any) {
      console.error("[Antigravity Error] Sandbox execution failed:", error);
      
      // Give semantic response on permission or missing resource errors
      const errMsg = error.message || "";
      if (errMsg.includes("PERMISSION_DENIED") || errMsg.includes("Key invalid")) {
        return res.status(403).json({
          error: "API Key가 유효하지 않거나 권한이 부여되지 않았습니다. 올바른 Gemini API Key가 지정되었는지 확인해 주십시오."
        });
      }
      
      return res.status(500).json({
        error: error.message || "원격 Antigravity Linux 샌드박스에서 파이썬 프로세스 구동 도중 예기치 못한 환경 에러가 발생했습니다."
      });
    }
  });

  // Vite dev server dynamic middleware bindings
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log(`[Vite Dev] Development middleware initialized and mounted.`);
  } else {
    // Serve static client bundles in production mode
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log(`[Production] Static asset server mapped to folder: ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[ITDA FullStack Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
