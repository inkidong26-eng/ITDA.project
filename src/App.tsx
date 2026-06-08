import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Smile,
  Users,
  Sparkles,
  Camera,
  Volume2,
  Mic,
  Phone,
  ShieldCheck,
  CheckCircle,
  Globe,
  ChevronRight,
  Layers,
  ArrowRight,
  Info,
  Check,
  Play,
  RotateCcw,
  BookOpen,
  Settings,
  X,
  Plus,
  Trash2,
  Image as ImageIcon,
  Type,
  FileText,
  BarChart3,
  HelpCircle,
  Undo
} from 'lucide-react';

// --- ImgWithFallback Component for Bulletproof Rendering ---
function ImgWithFallback({
  src,
  alt,
  className,
  fallbackIcon,
  ariaLabel
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: ReactNode;
  ariaLabel?: string;
}) {
  const [hasError, setHasError] = useState(false);

  // When source URL shifts/updates, reset error state so it tries to load again
  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-orange-50 border border-orange-100 rounded-2xl p-4 gap-2 text-[#E76F51] text-center ${className || ''}`}>
        {fallbackIcon || <Sparkles className="w-8 h-8 opacity-60" />}
        <span className="text-[11px] font-medium tracking-tight px-2 line-clamp-1">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      aria-label={ariaLabel || alt}
    />
  );
}

// --- Dynamic Icon Map Helper for Core Innovation Cards ---
function getIconComponent(name: string) {
  switch (name) {
    case 'Camera': return <Camera className="w-5 h-5 text-orange-600" />;
    case 'Volume2': return <Volume2 className="w-5 h-5 text-blue-600" />;
    case 'Globe': return <Globe className="w-5 h-5 text-emerald-600" />;
    case 'Users': return <Users className="w-5 h-5 text-purple-600" />;
    case 'Layers': return <Layers className="w-5 h-5 text-amber-600" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-stone-600" />;
    case 'Heart': return <Heart className="w-5 h-5 text-[#E76F51]" />;
    case 'Smile': return <Smile className="w-5 h-5 text-orange-500" />;
    default: return <Sparkles className="w-5 h-5 text-orange-500" />;
  }
}

// --- Default Landing Page Configuration ---
const DEFAULT_CONFIG = {
  // Brand Logo & Banner Assets
  logoImg: "/image/ITDA_icon/4.png",
  logoBanner: "/image/ITDA_icon/3.png",
  logoTitle: "ITDA 잇다",
  subTitle: "수어-음성 실시간 연결",

  // Hero Content
  heroBadge: "장애 너머의 따뜻한 통찰과 기술의 결합",
  heroTitleLine1: "소리가 없어도,",
  heroTitleLine2: "우리는 이어집니다",
  heroDescription: "ITDA(잇다)는 수어와 음성을 실시간 인공지능으로 튼튼하게 결합하여 청각장애인과 비장애인이 일상에서 지연 없이 부드럽고 자연스럽게 대화하도록 이끄는 스마트 소통 혁신 서비스입니다.",
  heroBtnStart: "무료로 체험 시작하기",
  heroBtnLearn: "ITDA 가치 알아보기",

  // Stats
  stat1Num: "36만+",
  stat1Label: "국내 청각장애 보증 파트너",
  stat2Num: "4.66억",
  stat2Label: "글로벌 잠재 수어 인구",
  stat3Num: "지연 없음",
  stat3Label: "실시간 온디바이스 응답",

  // Brand Story Vision section
  storyBadge: "Brand Core Vision",
  storyTitle: "한국의 '정(情)'을 담아, 언어의 장벽을 세계로 잇다",
  storyDesc1: "ITDA는 단순한 디지털 안내 번역 애플리케이션에 멈추지 않습니다. 청각장애인 당사자, 깊은 애정을 지닌 가족과 친구들, 환자의 아픔을 듣는 의료진, 그리고 일상의 이웃들까지—소리가 필요한 곳이라면 수어와 완벽한 음성을 투명하게 이어줍니다.",
  storyDesc2: "한국인의 깊고 정겨운 따뜻한 정(情)에서 시작된 아이디어는 전 세계 대다수의 언어적 단절을 이겨내는 위대한 기술적 비전으로 자라나며, 소외 받는 구성원이 단 한 명도 없는 평등하고 따뜻한 사회를 구현해 나갑니다.",

  // Interactive Sign Language Phrases (Touch Cards & Voice Simulator!)
  signPhrases: [
    { id: 'hello', korean: '안녕하세요!', gestureDescription: '오른손 주먹을 쥐었다가 가슴 앞에서 가볍게 아래로 내리며 인사합니다.', icon: '👋', english: 'Hello', color: 'border-blue-200 bg-blue-50/20 text-blue-750' },
    { id: 'thanks', korean: '감사합니다.', gestureDescription: '왼손 손등을 오른손 바닥으로 가볍게 두 번 두드려 경의를 표현합니다.', icon: '🙏', english: 'Thank you', color: 'border-purple-200 bg-purple-50/20 text-purple-750' },
    { id: 'love', korean: '사랑합니다.', gestureDescription: '양손의 주먹을 살짝 쥔 상태에서 가슴 앞에 두고 동그랗게 교차해 굴려 줍니다.', icon: '🤟', english: 'I love you', color: 'border-orange-200 bg-orange-50/20 text-orange-750' },
    { id: 'together', korean: '우리 함께해요.', gestureDescription: '양손의 집게손가락을 모아서 앞을 향해 뻗으며 하나되는 움직임을 생성합니다.', icon: '🤝', english: 'Together', color: 'border-amber-200 bg-amber-50/20 text-amber-750' },
    { id: 'coffee', korean: '따뜻한 아메리카노 한 잔 부탁합니다.', gestureDescription: '마시는 시늉을 한 뒤 가슴을 부드럽게 세 방향으로 쓸어 소통합니다.', icon: '☕', english: 'Take a Cup', color: 'border-emerald-200 bg-emerald-50/20 text-emerald-750' },
  ],

  // 6 Core Value Features
  features: [
    {
      title: "실시간 수어 번역 센서",
      desc: "AI 모델이 카메라 영상을 온디바이스로 신속 분석해, 수어 제스처의 미세한 흐름을 실시간으로 정확히 추적 번역합니다.",
      icon: "Camera",
      badge: "독보적 응답성",
      colorClass: "bg-orange-50/50 border-orange-100"
    },
    {
      title: "음성 ➜ 캐릭터 수어 변환",
      desc: "비장애인이 내뱉은 음성은 실시간 텍스트로 보조될 뿐 아니라 아바타 모델링을 통해 섬세한 손짓 수어로 즉각 형상화됩니다.",
      icon: "Volume2",
      badge: "시각 가독 보장",
      colorClass: "bg-blue-50/50 border-blue-100"
    },
    {
      title: "다국어 글로벌 수어 라이브러리",
      desc: "한국어 표준 수어 연구 결과는 물론이고, 국제 범용 수어(IS)와 전 세계 메이저 국가별 수어 모듈을 통합 제공합니다.",
      icon: "Globe",
      badge: "세계 최초 통합",
      colorClass: "bg-emerald-50/50 border-emerald-100"
    },
    {
      title: "학습 및 파트너 커뮤니티",
      desc: "수어 사용자, 교육생, 재능 나누미 통역사, 그리고 응원하는 가족들이 소소한 에피소드를 안전하게 쌓아가는 나눔의 공간입니다.",
      icon: "Users",
      badge: "커뮤니티 파워",
      colorClass: "bg-purple-50/50 border-purple-100"
    },
    {
      title: "크로스 멀티디바이스 웹앱",
      desc: "iOS와 안드로이드 네이티브 앱은 물론, 태블릿, 키오스크 매장 웹 브라우저까지 완벽히 최적화된 반응형 프레임워크입니다.",
      icon: "Layers",
      badge: "높은 연결 호환성",
      colorClass: "bg-amber-50/50 border-amber-100"
    },
    {
      title: "종단간 프라이버시 원칙",
      desc: "민감한 오디오 대화나 일개 촬영 화면 정보는 서버에 무단 기록되지 않으며 대화방 폐쇄 순간 종단간 암호화되어 소멸합니다.",
      icon: "ShieldCheck",
      badge: "철저한 보안성",
      colorClass: "bg-stone-50/50 border-stone-200"
    }
  ],

  // 3 Testimonials
  testimonials: [
    {
      quote: "“생전 처음으로 카페 점원에게 엄마 도움 없이 제 손짓수어를 ITDA와 연동하여 아메리카노를 수어로 자신있게 주문했어요! 소액 결제 한 번이었지만 제 삶의 자존감이 진짜 전방위로 올라갔습니다.”",
      author: "김지우",
      role: "대학생 (청각장애인 당사자)"
    },
    {
      quote: "“응급실이나 주민센터를 다닐 때 늘 동행 봉사자를 예약해야 해서 급한 상황에선 하늘이 무너지는 느낌이었어요. 이제 가족끼리도 실시간으로 온기를 가깝게 소통할 수 있어 너무 벅찹니다.”",
      author: "이선영",
      role: "ITDA 실제 등록 라이프 가입자"
    },
    {
      quote: "“매장에 수어 단골 고객님이 오실 때 매번 손짓발짓에 쪽지 필담까지 써가며 참 번거로웠고 긴장했는데요. 계산대 밑에 ITDA 안내 테블릿 거치한 뒤로 웃으며 친근한 인사말을 먼저 나누게 되었습니다.”",
      author: "박지성",
      role: "개인 운영 베이커리 대표"
    }
  ],

  // 3 Simple Steps
  step1Title: "앱 접속 / 웹 실행",
  step1Desc: "설치 없이 브라우저 주소 접속이나 ITDA 모바일 애플리케이션을 상쾌하게 다운로드 받아 켜주세요.",
  step2Title: "실시간 대화 모드 결정",
  step2Desc: "화면 지침의 ‘수어 발신’과 ‘음성 번역 수신’ 중 나에게 맞는 가장 친절하고 직관적인 모드를 탭해 활성화합니다.",
  step3Title: "카메라 지향 및 밀접 대화",
  step3Desc: "단순 손바닥 지문과 턱선을 가벼운 렌즈 앵글에 맞춰 편하게 손짓과 말소리로 풍부하고 따뜻한 소통을 이뤄갑니다."
};

export default function App() {
  // Config state holding all editable copy, lists, features and images!
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem('itda_web_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_CONFIG;
      }
    }
    return DEFAULT_CONFIG;
  });

  // Save config changes
  useEffect(() => {
    localStorage.setItem('itda_web_config', JSON.stringify(config));
  }, [config]);

  // Editor states
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorTab, setEditorTab] = useState<'basics' | 'hero' | 'phrases' | 'features' | 'testimonials'>('basics');

  // Input states for new custom sign phrases
  const [newPhraseKorean, setNewPhraseKorean] = useState('');
  const [newPhraseDesc, setNewPhraseDesc] = useState('');
  const [newPhraseIcon, setNewPhraseIcon] = useState('🤟');
  const [newPhraseEnglish, setNewPhraseEnglish] = useState('New Love');
  const [newPhraseColor, setNewPhraseColor] = useState('border-pink-200 bg-pink-50/20 text-pink-700');

  // Interactive Simulator States
  const [simMode, setSimMode] = useState<'sign-to-voice' | 'voice-to-sign'>('sign-to-voice');
  const [selectedPhrase, setSelectedPhrase] = useState(config.signPhrases[0] || DEFAULT_CONFIG.signPhrases[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simTextResult, setSimTextResult] = useState('카메라 앞에서 손짓을 시작해 주세요...');
  const [animatedDots, setAnimatedDots] = useState('');

  // Auto update selected phrase if the list updates or is deleted
  useEffect(() => {
    if (config.signPhrases.length > 0) {
      const exists = config.signPhrases.find((p: any) => p.id === selectedPhrase.id);
      if (!exists) {
        setSelectedPhrase(config.signPhrases[0]);
      }
    }
  }, [config.signPhrases, selectedPhrase]);

  // Sign Language mini-quiz states
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  // --- Antigravity Python Lab States ---
  const [antigravityPreset, setAntigravityPreset] = useState<'landmark-stats' | 'sign-vector' | 'sound-frequency' | 'custom'>('landmark-stats');
  const [antigravityCustomPrompt, setAntigravityCustomPrompt] = useState('Write a Python script that calculates virtual coordinates for 21 hand landmarks, outputs their aggregate center of mass (X, Y), and prints a summary message.');
  const [antigravityIsLoading, setAntigravityIsLoading] = useState(false);
  const [antigravityResultText, setAntigravityResultText] = useState('');
  const [antigravityError, setAntigravityError] = useState<string | null>(null);
  const [antigravitySteps, setAntigravitySteps] = useState<any[]>([]);

  // Action function to communicate with our Express backend for Antigravity-Agent Python execution
  const runAntigravityAction = async () => {
    setAntigravityIsLoading(true);
    setAntigravityError(null);
    setAntigravityResultText('');
    setAntigravitySteps([]);

    let promptToSend = "";
    if (antigravityPreset === 'landmark-stats') {
      promptToSend = `Run the following Python landmark algorithm inside the secure sandbox environment. Display the output logs:

\`\`\`python
# 수어 동작 관절 분석기 (Sign Hand Landmark Stats Extractor)
# 손 마디 관절 21개의 가상 X, Y 좌표 통계 추출 및 시각가치 검증
import random
import json

landmarks = [{"id": i, "x": round(random.uniform(0.1, 0.9), 3), "y": round(random.uniform(0.1, 0.9), 3)} for i in range(21)]
mean_x = sum([p["x"] for p in landmarks]) / 21
mean_y = sum([p["y"] for p in landmarks]) / 21

print("--- [ITDA Antigravity System Analysis] ---")
print(f"가상 수어 손가락 관절 데이터 개수: {len(landmarks)}개 생성 완료.")
print(f"전체 Landmark 평균 X위치: {mean_x:.4f}, 평균 Y위치: {mean_y:.4f}")
print("가상 수어 모션 Landmark 프레임 분석 정교화 성사완료!")
print(json.dumps({"landmarks": landmarks[:3], "mean_x": round(mean_x, 4), "mean_y": round(mean_y, 4)}, indent=2))
\`\`\`
`;
    } else if (antigravityPreset === 'sign-vector') {
      promptToSend = `Run the following Python distance mapping algorithm inside the secure sandbox environment. Display the output logs:

\`\`\`python
# 다국어 수어 텍스트 거리 임베딩 (Multi-lang Sign Emotion Embedding Distance)
# 한국어 "안녕하세요", "감사합니다", "사랑합니다" 수어 감정 벡터 시뮬레이션
import math

word_vectors = {
    "hello": [0.12, 0.54, 0.88],
    "thanks": [0.45, 0.22, 0.76],
    "love": [0.89, 0.11, 0.95]
}

def calc_distance(v1, v2):
    return math.sqrt(sum([(a - b)**2 for a, b in zip(v1, v2)]))

dist_hello_thanks = calc_distance(word_vectors["hello"], word_vectors["thanks"])
dist_thanks_love = calc_distance(word_vectors["thanks"], word_vectors["love"])

print("--- 수어 감정 유사도 분석 (Python Math Distance) ---")
print(f"안녕하세요 <=> 감사합니다 수어 제스처 벡터 거리: {dist_hello_thanks:.4f}")
print(f"감사합니다 <=> 사랑합니다 수어 제스처 벡터 거리: {dist_thanks_love:.4f}")
print("분석 완료: 유사한 수어 자형의 상대적 궤적 공간 배치 매핑을 성사시켰습니다.")
\`\`\`
`;
    } else if (antigravityPreset === 'sound-frequency') {
      promptToSend = `Run the following Python frequency resynthesis script in the sandbox environment and display output logs:

\`\`\`python
# 음성 피치 복원 엔진 (Translated Voice Signal Resynthesis Simulator)
# 수어에서 텍스트로 치환된 신호를 음성 파형으로 복원하는 주파수 보간
import math

translated_text = "안녕하세요. 저는 오늘 수어로 대화하고 있습니다."
frequency_hz = 150.0  # 인간 음성 평균 피치

synthesis_report = []
for idx, char in enumerate(translated_text):
    if char == " " or char in [".", ","]:
        continue
    pitch_mod = frequency_hz + (idx % 5) * 10 - (idx % 3) * 5
    synthesis_report.append(f"음절 '{char}': 변환 완료 (합성 피치: {pitch_mod}Hz)")

print("--- 실시간 텍스트-음성 합성 파형 복원 리포트 ---")
print(f"입력 한글 텍스트: {translated_text}")
print("\\n".join(synthesis_report[:8]))
print(f"...총 {len(translated_text)}자 음절의 음성 파형 보충 및 음향 피딩을 완료했습니다!")
\`\`\`
`;
    } else {
      promptToSend = antigravityCustomPrompt;
    }

    try {
      const response = await fetch("/api/antigravity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptToSend }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Antigravity 원격 연동 중 에러가 발생했습니다.");
      }

      setAntigravityResultText(data.outputText);
      setAntigravitySteps(data.steps || []);
    } catch (err: any) {
      console.error(err);
      setAntigravityError(err.message || "Antigravity 원격 에이전트를 구동하는 중 오류가 발생했습니다. 개발 서버 환경에서 GEMINI_API_KEY가 적법하게 설정되어 있는지 점검해 보십시오.");
    } finally {
      setAntigravityIsLoading(false);
    }
  };

  const QUIZ_QUESTIONS = [
    {
      question: "ITDA 로고의 아름다운 꽃잎 심볼(다섯 갈래)이 상징하는 가장 정교한 가치는 무엇일까요?",
      options: [
        "모바일, 태블릿, PC 등 단순 디바이스들의 개수",
        "수어 사용자, 비장애인, 통역사, 봉사자 등 다양한 사람들이 편견 없이 이어짐",
        "음성 번역 기술이 갖춘 인공지능 서버 통신망 개수",
        "수어로 표현하는 한글 자음의 개수 분배"
      ],
      correctIndex: 1,
      explanation: "ITDA의 다섯 꽃잎 심볼은 장애라는 보이지 않는 한계를 넘어, 모든 소통하는 주체들이 편견 없이 따뜻한 정(情)으로 피어나는 생태계를 상징합니다."
    },
    {
      question: "오른손 엄지와 소지(새끼손가락)를 편 채로 손등을 상대방에게 향하며 둥글게 움직이는 수어의 뜻은?",
      options: [
        "만나서 반갑습니다",
        "사랑합니다 / 좋아합니다",
        "죄송합니다 / 기다려주세요",
        "도와드릴까요?"
      ],
      correctIndex: 1,
      explanation: "엄지와 새끼손가락을 편 손짓은 전 세계 공통적인 사랑(I Love You)의 표시이며, ITDA가 전하고자 하는 핵심 감정 가치 중 하나입니다."
    }
  ];

  // Simulated live-typing dots decoration for real-time translation feel
  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setAnimatedDots(prev => (prev.length >= 3 ? '' : prev + '.'));
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  // Handle Simulation Actions
  const runSimulation = (phrase: typeof DEFAULT_CONFIG.signPhrases[0]) => {
    setSelectedPhrase(phrase);
    setIsSimulating(true);
    setSimTextResult('AI 제스처 패터닝 인식 중');

    setTimeout(() => {
      setSimTextResult(`번역 완료: "${phrase.korean}"`);
      setIsSimulating(false);
    }, 1800);
  };

  const handleQuizAnswer = (index: number) => {
    if (showAnswerFeedback) return;
    setSelectedAnswer(index);
    setShowAnswerFeedback(true);
    if (index === QUIZ_QUESTIONS[currentQuizIndex].correctIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const nextQuizQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswerFeedback(false);
    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setQuizScore(0);
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowAnswerFeedback(false);
    setQuizComplete(false);
  };

  // Updation Utilities
  const updateBasics = (key: string, value: string) => {
    setConfig((prev: any) => ({ ...prev, [key]: value }));
  };

  const updatePhraseField = (index: number, field: string, value: string) => {
    const updated = [...config.signPhrases];
    updated[index] = { ...updated[index], [field]: value };
    setConfig((prev: any) => ({ ...prev, signPhrases: updated }));
  };

  const updateFeatureField = (index: number, field: string, value: string) => {
    const updated = [...config.features];
    updated[index] = { ...updated[index], [field]: value };
    setConfig((prev: any) => ({ ...prev, features: updated }));
  };

  const updateTestimonialField = (index: number, field: string, value: string) => {
    const updated = [...config.testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setConfig((prev: any) => ({ ...prev, testimonials: updated }));
  };

  const addNewPhrase = () => {
    if (!newPhraseKorean || !newPhraseDesc) {
      alert('수어 문장과 상세 가이드를 적어주세요.');
      return;
    }
    const newId = `phrase_${Date.now()}`;
    const item = {
      id: newId,
      korean: newPhraseKorean,
      gestureDescription: newPhraseDesc,
      icon: newPhraseIcon || '🤟',
      english: newPhraseEnglish || 'Custom Phrase',
      color: newPhraseColor
    };
    setConfig((prev: any) => ({
      ...prev,
      signPhrases: [...prev.signPhrases, item]
    }));
    setNewPhraseKorean('');
    setNewPhraseDesc('');
    setNewPhraseIcon('🤟');
    setNewPhraseEnglish('Custom');
  };

  const deletePhrase = (id: string) => {
    if (config.signPhrases.length <= 1) {
      alert('체험을 위해 수어 문장은 최소 1개 있어야 합니다.');
      return;
    }
    const filtered = config.signPhrases.filter((p: any) => p.id !== id);
    setConfig((prev: any) => ({ ...prev, signPhrases: filtered }));
  };

  const resetToFactoryDefaults = () => {
    if (confirm('모든 문구와 이미지를 초기 권장값으로 원복하시겠습니까?')) {
      setConfig(DEFAULT_CONFIG);
      localStorage.removeItem('itda_web_config');
    }
  };

  return (
    <div className="min-h-screen text-[#2E2520] selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden relative" id="itda-root">

      {/* --- QUICK FLOATING ADMIN TOGGLE BADGE --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditorOpen(!isEditorOpen)}
          className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-3.5 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs sm:text-sm tracking-tight border border-stone-800"
          id="customizer-trigger-btn"
        >
          {isEditorOpen ? <X className="w-4 h-4 text-orange-400" /> : <Settings className="w-4 h-4 text-orange-400 animate-spin-slow" />}
          <span>{isEditorOpen ? "편집기 닫기" : "실시간 문구/이미지 편집기"}</span>
        </motion.button>
      </div>

      {/* --- REAL-TIME CUSTOMIZER SLIDE-OVER SIDEBAR --- */}
      <AnimatePresence>
        {isEditorOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white border-l border-orange-100/70 shadow-2xl z-40 flex flex-col justify-between"
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b border-orange-100 bg-[#FFF9F6] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#E76F51]" />
                <div>
                  <h3 className="font-extrabold text-stone-900 text-sm">실시간 노코드 편집기</h3>
                  <p className="text-[10px] text-stone-500 font-medium">문구, 이미지, 아이콘 추가가 즉시 반영됩니다.</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-1 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Editing Sidebar Tab Selectors */}
            <div className="bg-stone-50 p-2 flex gap-1 overflow-x-auto text-[11px] font-bold border-b border-stone-200/50 shrink-0 select-none">
              <button
                onClick={() => setEditorTab('basics')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${editorTab === 'basics' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200/40'}`}
              >
                기본/이미지
              </button>
              <button
                onClick={() => setEditorTab('hero')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${editorTab === 'hero' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200/40'}`}
              >
                타이틀
              </button>
              <button
                onClick={() => setEditorTab('phrases')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${editorTab === 'phrases' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200/40'}`}
              >
                수어/아이콘
              </button>
              <button
                onClick={() => setEditorTab('features')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${editorTab === 'features' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200/40'}`}
              >
                가치카드
              </button>
              <button
                onClick={() => setEditorTab('testimonials')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${editorTab === 'testimonials' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200/40'}`}
              >
                후기/단계
              </button>
            </div>

            {/* Sidebar Scrollable Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-6 text-xs text-stone-700">

              {/* --- TAB 1: BASICS & IMAGES --- */}
              {editorTab === 'basics' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 flex items-center gap-1.5 border-b pb-1 text-sm">
                    <ImageIcon className="w-4 h-4 text-[#E76F51]" />
                    <span>브랜드 로고, 배너 및 기본 이미지 설정</span>
                  </h4>

                  <div className="space-y-1">
                    <label className="font-bold block tracking-tight">서비스 로고 이미지 주소</label>
                    <input
                      type="text"
                      value={config.logoImg}
                      onChange={(e) => updateBasics('logoImg', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500 focus:outline-none"
                      placeholder="예시: /frontend_images_icon.png"
                    />
                    <p className="text-[10px] text-stone-400">대표 꽃잎 로고 이미지 URL을 변경합니다.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold block tracking-tight">서비스 배너 이미지 주소</label>
                    <input
                      type="text"
                      value={config.logoBanner}
                      onChange={(e) => updateBasics('logoBanner', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500 focus:outline-none"
                      placeholder="예시: /frontend_images_banner.png"
                    />
                    <p className="text-[10px] text-stone-400">교각 모양의 브랜드 텍스트 배너 이미지 URL을 지정합니다.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold block tracking-tight">서비스 한글 브랜드 대제목</label>
                    <input
                      type="text"
                      value={config.logoTitle}
                      onChange={(e) => updateBasics('logoTitle', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold block tracking-tight">브랜드 소설명 슬로건</label>
                    <input
                      type="text"
                      value={config.subTitle}
                      onChange={(e) => updateBasics('subTitle', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* --- TAB 2: HERO & TEXT --- */}
              {editorTab === 'hero' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 flex items-center gap-1.5 border-b pb-1 text-sm">
                    <Type className="w-4 h-4 text-[#E76F51]" />
                    <span>헤드라인 및 문구 편집</span>
                  </h4>

                  <div className="space-y-1">
                    <label className="font-bold block tracking-tight">상단 하이라이트 배지 문구</label>
                    <input
                      type="text"
                      value={config.heroBadge}
                      onChange={(e) => updateBasics('heroBadge', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="font-bold block">헤드라인 1번째 행</label>
                      <input
                        type="text"
                        value={config.heroTitleLine1}
                        onChange={(e) => updateBasics('heroTitleLine1', e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold block">헤드라인 2번째 행</label>
                      <input
                        type="text"
                        value={config.heroTitleLine2}
                        onChange={(e) => updateBasics('heroTitleLine2', e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold block">히어로 서비스 종합 상세 설명</label>
                    <textarea
                      rows={5}
                      value={config.heroDescription}
                      onChange={(e) => updateBasics('heroDescription', e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[11px] focus:ring-1 focus:ring-orange-500 leading-relaxed"
                    />
                  </div>

                  <h5 className="font-extrabold text-stone-900 border-t pt-3 mt-4 text-xs">핵심 통계 팩트칩 문장</h5>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="font-extrabold block text-[10px]">통계 1 수치</label>
                      <input
                        type="text"
                        value={config.stat1Num}
                        onChange={(e) => updateBasics('stat1Num', e.target.value)}
                        className="w-full p-2 bg-stone-50 border rounded-lg text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-extrabold block text-[10px]">통계 2 수치</label>
                      <input
                        type="text"
                        value={config.stat2Num}
                        onChange={(e) => updateBasics('stat2Num', e.target.value)}
                        className="w-full p-2 bg-stone-50 border rounded-lg text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-extrabold block text-[10px]">통계 3 수치</label>
                      <input
                        type="text"
                        value={config.stat3Num}
                        onChange={(e) => updateBasics('stat3Num', e.target.value)}
                        className="w-full p-2 bg-stone-50 border rounded-lg text-[11px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold block">통계 1 부연 설명</label>
                    <input
                      type="text"
                      value={config.stat1Label}
                      onChange={(e) => updateBasics('stat1Label', e.target.value)}
                      className="w-full p-2 bg-stone-50 border rounded-lg text-xs"
                    />
                  </div>
                </div>
              )}

              {/* --- TAB 3: PHRASES & INTERACTIVE ICONS ADDER --- */}
              {editorTab === 'phrases' && (
                <div className="space-y-5">
                  <div className="border-b pb-1">
                    <h4 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                      <Plus className="w-4 h-4 text-[#E76F51]" />
                      <span>신규 수어 문장 및 아이콘 추가</span>
                    </h4>
                    <p className="text-[10px] text-stone-500 mt-1">
                      아래 폼에 입력 후 추가 버튼을 누르면, 상단 터치 카드와 스마트폰에 아이콘이 추가 설계됩니다!
                    </p>
                  </div>

                  <div className="bg-orange-50/40 p-4 border border-orange-100 rounded-xl space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <label className="font-bold block text-[10px]">아이콘 (이모지)</label>
                        <input
                          type="text"
                          value={newPhraseIcon}
                          onChange={(e) => setNewPhraseIcon(e.target.value)}
                          className="w-full p-2.5 bg-white border border-stone-200 rounded-lg text-center font-bold text-sm"
                          placeholder="🤝, 👋, 🤟, 🏡"
                        />
                      </div>
                      <div className="space-y-1 col-span-2">
                        <label className="font-bold block text-[10px]">영문 제목(카드용)</label>
                        <input
                          type="text"
                          value={newPhraseEnglish}
                          onChange={(e) => setNewPhraseEnglish(e.target.value)}
                          className="w-full p-2.5 bg-white border border-stone-200 rounded-lg text-xs"
                          placeholder="Thank you 등"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold block text-[10px]">한글 수어 문장</label>
                      <input
                        type="text"
                        value={newPhraseKorean}
                        onChange={(e) => setNewPhraseKorean(e.target.value)}
                        className="w-full p-2.5 bg-white border border-stone-200 rounded-lg text-xs"
                        placeholder="예: 또 만나요!, 만나서 환영합니다"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold block text-[10px]">수어 손동작 상세 가이드 가이드라인</label>
                      <textarea
                        rows={2}
                        value={newPhraseDesc}
                        onChange={(e) => setNewPhraseDesc(e.target.value)}
                        className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs"
                        placeholder="손을 곧게 뻗어 원을 그린 뒤 가슴께에 포갭니다."
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold block text-[10px]">배경 테두리 색상 테마</label>
                      <select
                        value={newPhraseColor}
                        onChange={(e) => setNewPhraseColor(e.target.value)}
                        className="w-full p-2 bg-white border rounded-lg text-xs"
                      >
                        <option value="border-pink-200 bg-pink-50/20 text-pink-700">분홍 벚꽃 (Pink)</option>
                        <option value="border-blue-200 bg-blue-50/20 text-blue-700">푸른 하늘 (Blue)</option>
                        <option value="border-orange-200 bg-orange-50/20 text-orange-700">따뜻 오렌지 (Orange)</option>
                        <option value="border-purple-200 bg-purple-50/20 text-purple-700">신비 보라 (Purple)</option>
                        <option value="border-emerald-200 bg-emerald-50/20 text-emerald-700">생태 초록 (Emerald)</option>
                      </select>
                    </div>

                    <button
                      onClick={addNewPhrase}
                      className="w-full bg-[#E76F51] hover:bg-orange-600 text-white p-2.5 rounded-xl font-bold transition-all text-xs flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>수어 아이콘 리스트에 정식 등록</span>
                    </button>
                  </div>

                  {/* Existing interactive lists */}
                  <div className="space-y-3">
                    <h5 className="font-extrabold text-stone-900 text-xs border-t pt-3">현재 등록된 수어 리스트 ({config.signPhrases.length}개)</h5>
                    <div className="space-y-2">
                      {config.signPhrases.map((phrase: any, index: number) => (
                        <div key={phrase.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex flex-col gap-2 relative">
                          <button
                            onClick={() => deletePhrase(phrase.id)}
                            className="absolute top-2.5 right-2.5 text-stone-400 hover:text-red-500 p-1"
                            title="삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={phrase.icon}
                              onChange={(e) => updatePhraseField(index, 'icon', e.target.value)}
                              className="w-10 p-1 bg-white border rounded text-center text-xs font-bold"
                            />
                            <input
                              type="text"
                              value={phrase.korean}
                              onChange={(e) => updatePhraseField(index, 'korean', e.target.value)}
                              className="flex-1 p-1 bg-white border rounded text-xs font-extrabold"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-400 block font-bold mb-0.5">동작 설명</span>
                            <textarea
                              rows={2}
                              value={phrase.gestureDescription}
                              onChange={(e) => updatePhraseField(index, 'gestureDescription', e.target.value)}
                              className="w-full p-1 bg-white border rounded text-[10px] leading-relaxed scale-95 origin-left"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* --- TAB 4: FEATURES (6혁신 가치) --- */}
              {editorTab === 'features' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 border-b pb-1 text-sm flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#E76F51]" />
                    <span>6가지 핵심 서비스 혜택 편집</span>
                  </h4>
                  <p className="text-[10px] text-stone-400">아래 6개의 주요 카드 항목을 실시간으로 편집 수정해 활용하세요.</p>

                  <div className="space-y-4 pt-1">
                    {config.features.map((feat: any, idx: number) => (
                      <div key={idx} className="p-3 bg-stone-100/60 rounded-xl border border-stone-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-orange-600 block text-[10px]">혜택 항목 {idx + 1}</span>
                          <input
                            type="text"
                            value={feat.badge}
                            onChange={(e) => updateFeatureField(idx, 'badge', e.target.value)}
                            className="bg-white p-1 text-[10px] font-bold text-right border rounded w-28 text-stone-605"
                          />
                        </div>
                        <input
                          type="text"
                          value={feat.title}
                          onChange={(e) => updateFeatureField(idx, 'title', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded font-extrabold text-xs"
                        />
                        <textarea
                          rows={2}
                          value={feat.desc}
                          onChange={(e) => updateFeatureField(idx, 'desc', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-[10px] leading-relaxed"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- TAB 5: TESTIMONIALS & STEPS --- */}
              {editorTab === 'testimonials' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-stone-900 border-b pb-1 text-sm flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>3가지 이웃들의 생활 수기 후기</span>
                    </h4>
                  </div>

                  {config.testimonials.map((test: any, idx: number) => (
                    <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200/50 space-y-2 text-[11px]">
                      <span className="text-[10px] text-stone-400 font-bold block">독자 후기 {idx + 1}</span>
                      <textarea
                        rows={3}
                        value={test.quote}
                        onChange={(e) => updateTestimonialField(idx, 'quote', e.target.value)}
                        className="w-full p-1.5 bg-white border rounded text-xs leading-relaxed"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={test.author}
                          onChange={(e) => updateTestimonialField(idx, 'author', e.target.value)}
                          className="p-1.5 bg-white border rounded font-bold text-stone-900"
                          placeholder="작성자 성명"
                        />
                        <input
                          type="text"
                          value={test.role}
                          onChange={(e) => updateTestimonialField(idx, 'role', e.target.value)}
                          className="p-1.5 bg-white border rounded text-stone-500 text-[10px]"
                          placeholder="작성자 수식어"
                        />
                      </div>
                    </div>
                  ))}

                  {/* 3 Steps Title editing */}
                  <div className="border-t pt-4 mt-4 space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-emerald-600" />
                      <span>3단계 가이드 제목 편집</span>
                    </h4>

                    <div className="space-y-3">
                      <div className="bg-stone-50 p-2.5 rounded-lg space-y-1.5">
                        <span className="text-[10px] font-bold text-emerald-600">1단계 내용</span>
                        <input
                          type="text"
                          value={config.step1Title}
                          onChange={(e) => updateBasics('step1Title', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-xs font-bold"
                        />
                        <textarea
                          rows={2}
                          value={config.step1Desc}
                          onChange={(e) => updateBasics('step1Desc', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-[11px]"
                        />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-lg space-y-1.5">
                        <span className="text-[10px] font-bold text-emerald-600">2단계 내용</span>
                        <input
                          type="text"
                          value={config.step2Title}
                          onChange={(e) => updateBasics('step2Title', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-xs font-bold"
                        />
                        <textarea
                          rows={2}
                          value={config.step2Desc}
                          onChange={(e) => updateBasics('step2Desc', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-[11px]"
                        />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-lg space-y-1.5">
                        <span className="text-[10px] font-bold text-emerald-600">3단계 내용</span>
                        <input
                          type="text"
                          value={config.step3Title}
                          onChange={(e) => updateBasics('step3Title', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-xs font-bold"
                        />
                        <textarea
                          rows={2}
                          value={config.step3Desc}
                          onChange={(e) => updateBasics('step3Desc', e.target.value)}
                          className="w-full p-1.5 bg-white border rounded text-[11px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar Footer Controls */}
            <div className="p-4 border-t bg-stone-50 flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={resetToFactoryDefaults}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-stone-200 hover:bg-stone-300 rounded-xl text-stone-700 font-bold transition-all text-xs"
                title="공장 등급 초기화"
              >
                <Undo className="w-3.5 h-3.5" />
                <span>데이터 초기화</span>
              </button>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-850 text-white rounded-xl font-bold transition-all text-xs text-center flex items-center justify-center gap-1"
              >
                <Check className="w-4 h-4 text-orange-400" />
                <span>편집 완료 및 저장</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* --- PREMIUM FLOATING HEADER --- */}
      <header className="sticky top-0 z-30 bg-[#FFF9F6]/95 backdrop-blur-md border-b border-orange-100/50 shadow-xs px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#itda-root" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-200 rounded-lg p-1">
            <div className="w-16 h-16 overflow-hidden rounded-full flex items-center justify-center p-0.5  transform group-hover:scale-105 transition-transform shrink-0">
              <ImgWithFallback
                src={config.logoImg}
                alt="ITDA 대표 로고 꽃잎 심볼"
                className="w-full h-full object-contain"
                fallbackIcon={<Smile className="w-5 h-5 text-orange-500" />}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <ImgWithFallback
                  src={config.logoBanner}
                  alt="ITDA 로고 타이포 배너"
                  className="h-20 w-52 object-contain"
                  fallbackIcon={<span className="font-extrabold text-[#E76F51] tracking-wide text-sm">{config.logoTitle}</span>}
                />
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-stone-600">
            <a href="#intro" className="hover:text-[#E76F51] transition-colors font-semibold">서비스 소개</a>
            <a href="#features" className="hover:text-[#E76F51] transition-colors font-semibold">핵심 기술</a>
            <a href="#steps" className="hover:text-[#E76F51] transition-colors font-semibold">시작하기</a>
          </nav>

        </div>
      </header>

      {/* --- HERO BANNER (핵심 가치 & 로고) --- */}
      <section className="relative pt-12 pb-20 px-4 md:px-8 overflow-hidden" id="hero-landing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero text Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100/50 border border-orange-200/40 px-3.5 py-1.5 rounded-full text-orange-700 text-xs font-bold tracking-tight shadow-2xs">
              <Heart className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
              <span>{config.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 leading-[1.25]">
              {config.heroTitleLine1} <br />
              <span className="text-[#E76F51] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                {config.heroTitleLine2}
              </span>
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {config.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
              <a
                href="#demo"
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2 group text-sm"
              >
                <span>{config.heroBtnStart}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#intro"
                className="bg-white hover:bg-orange-50/50 text-stone-800 border border-stone-200 py-3.5 px-6 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 text-sm"
              >
                <Play className="w-4 h-4 fill-current text-[#E76F51]" />
                <span>{config.heroBtnLearn}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-orange-100/60 w-full grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-stone-900">{config.stat1Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{config.stat1Label}</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-stone-900">{config.stat2Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{config.stat2Label}</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#E76F51]">{config.stat3Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{config.stat3Label}</p>
              </div>
            </div>
          </div>

          {/* Large Hero Card Right */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/30 to-amber-100/30 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div className="bg-white border border-stone-200/60 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col items-center w-full max-w-sm">
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-orange-100/80 text-[#E76F51] text-[10px] font-bold px-2 py-0.5 rounded-md">
                대세 애플리케이션
              </span>

              {/* Service Flower logo with fallback */}
              <div className="w-44 h-44 my-4 flex items-center justify-center">
                <ImgWithFallback
                  src={config.logoImg}
                  alt="ITDA 원형 꽃 심볼 대표 로고"
                  className="w-full h-full object-contain filter drop-shadow-md transform hover:rotate-12 transition-transform duration-700"
                  fallbackIcon={<Sparkles className="w-16 h-16 text-orange-400" />}
                />
              </div>

              {/* Core Banner representation with fallback */}
              <div className="w-full bg-slate-50/80 border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center">
                <ImgWithFallback
                  src={config.logoBanner}
                  alt="ITDA 소통의 교각 영문 배너"
                  className="h-7 object-contain mb-2"
                  fallbackIcon={<p className="text-semibold text-[#E76F51] text-lg font-bold">{config.logoTitle}</p>}
                />
                <p className="text-[11px] text-stone-500 leading-relaxed font-semibold">
                  수어와 세상을 가장 조화롭게 가로지르는 현대적인 영혼의 무지개 다리
                </p>
              </div>

              {/* Miniature horizontal interactive pills dynamically pulled from phrases */}
              <div className="grid grid-cols-2 gap-2 w-full mt-4">
                {config.signPhrases.slice(0, 2).map((item: any, id: number) => (
                  <div key={item.id} className="bg-orange-50/40 p-3 rounded-xl flex items-center gap-2.5 border border-orange-100/30">
                    <div className="w-6 h-6 rounded-full bg-orange-100/70 flex items-center justify-center text-xs">{item.icon}</div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-stone-800 truncate">{item.korean}</p>
                      <p className="text-[10px] text-stone-400 truncate">{item.english}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOUR CORE MEANING TOUCH CARDS (DYNAMIC TO ACCOMMODATE MORE OR CHANGED PHRASES!) --- */}
      <section className="bg-stone-50/50 border-y border-orange-100/40 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8">
            <h2 className="text-xs font-extrabold text-orange-600 tracking-widest uppercase">Touch Card Interaction</h2>
            <p className="text-lg font-extrabold text-[#2E2520] mt-1">
              마음을 전하는 따뜻한 {config.logoTitle} 수어 및 아이콘 표현들
            </p>
            <p className="text-xs text-stone-550 mt-1">스탬프 카드를 누르면 아래 인공지능 핸드트래킹 모션 체임버 시뮬레이터로 즉각 연동됩니다!</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {config.signPhrases.map((card: any, i: number) => (
              <motion.div
                key={card.id || i}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  runSimulation(card);
                  const demoEl = document.getElementById('demo');
                  if (demoEl) {
                    demoEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`border rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group select-none min-h-[175px] flex flex-col justify-between ${card.color || 'border-orange-200 bg-orange-50/20 text-orange-700'}`}
              >
                <div>
                  <div className="text-3xl mb-2.5 transform group-hover:scale-120 transition-transform">{card.icon}</div>
                  <h3 className="font-extrabold text-stone-900 text-sm sm:text-base leading-tight">{card.korean}</h3>
                  <p className="text-[10px] opacity-75 font-semibold tracking-wide uppercase mt-0.5">{card.english}</p>
                </div>
                <div>
                  <p className="text-[11px] text-stone-500 leading-relaxed line-clamp-2 mt-2.5">
                    {card.gestureDescription}
                  </p>
                  <div className="mt-3.5 inline-flex items-center justify-center gap-1 text-[10px] font-extrabold group-hover:underline text-stone-700">
                    <span>수어 모션 체험하기</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRAND STORY: "한국의 정(情)을 세계로 잇다" --- */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="intro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">{config.storyBadge}</h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-snug">
              {config.storyTitle}
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>{config.storyDesc1}</p>
              <p>{config.storyDesc2}</p>
            </div>

            {/* Feature small icon horizontal layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white border border-stone-200/60 p-4 rounded-xl shadow-2xs">
                <div className="p-2 bg-orange-100 rounded-lg text-[#E76F51] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-stone-900">다국어 허브 수어 연결</h4>
                  <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">한국어 수어 표준은 물론 글로벌 범용 규격까지 빈틈없이 제공합니다.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-stone-200/60 p-4 rounded-xl shadow-2xs">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-stone-900">오픈 커뮤니티 공간</h4>
                  <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">단순 기술 호환을 넘어 서로의 일상을 교류하는 안전한 맵핑 공간입니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic (As requested in image: "잇다" box design) */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 rounded-3xl p-8 shadow-xs relative">
              <div className="absolute -top-3 -left-3 bg-[#E76F51] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                ITDA VALUE SLOGAN
              </div>

              <div className="flex flex-col items-center gap-6 py-4">
                {/* 3 Steps graphical connection element */}
                <div className="flex justify-center items-center gap-4 w-full max-w-xs">
                  {/* Deaf person side */}
                  <div className="flex flex-col items-center text-center flex-1 bg-white border border-stone-200 p-4 rounded-2xl shadow-2xs">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-lg shadow-inner mb-2 select-none">
                      🤟
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-800">청각장애인</span>
                    <span className="text-[9px] text-[#E76F51] font-semibold mt-0.5">수어 제스처</span>
                  </div>

                  {/* Red Heart Connection Word */}
                  <div className="flex flex-col items-center justify-center min-w-[70px] select-none">
                    <div className="w-1.5 h-1.5 bg-[#E76F51] rounded-full animate-ping mb-1" />
                    <span className="text-xs sm:text-sm font-extrabold text-orange-900 px-3.5 py-1 bg-orange-100 border border-orange-200 rounded-full">잇다</span>
                    <div className="flex gap-1 mt-1 text-orange-400">
                      <span className="text-[8px]">●</span>
                      <span className="text-[8px]">●</span>
                      <span className="text-[8px]">●</span>
                    </div>
                  </div>

                  {/* Hearing person side */}
                  <div className="flex flex-col items-center text-center flex-1 bg-white border border-stone-200 p-4 rounded-2xl shadow-2xs">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg shadow-inner mb-2 select-none">
                      🗣️
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-800">비장애인(청인)</span>
                    <span className="text-[9px] text-purple-600 font-semibold mt-0.5">음성 대화</span>
                  </div>
                </div>

                {/* Sub message */}
                <div className="text-center max-w-sm mt-3">
                  <h4 className="font-extrabold text-stone-900 text-sm tracking-tight">수어와 음성으로 자연스럽게 동화되는 세상</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    {config.logoTitle}는 누구도 대화를 시작하길 망설이지 않고, 누구도 침묵과 외로움 속에 갇히지 않도록 인격적 존엄을 쉴 새 없이 지켜줍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* --- INTRINSIC VALUES: SIX CORE INNOVATIONS --- */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="features">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">ITDA Key Innovations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">서비스가 전달하는 핵심 소통가치</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            전혀 새로운 차원의 전인류적 장벽 철폐 메커니즘을 경험해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.features.map((feat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`border p-6 rounded-2xl flex flex-col justify-between transition-all bg-white relative overflow-hidden group hover:shadow-md ${feat.colorClass || 'bg-stone-50/50 border-stone-200'}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getIconComponent(feat.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-500">
                    {feat.badge}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-stone-900 text-base">{feat.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-normal">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* --- THREE STEPS TO START --- */}
      <section className="bg-stone-50 border-y border-orange-100/60 py-20 px-4 md:px-8 text-center" id="steps">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">Simple 3-Steps</span>
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">장벽을 정복하는 간편한 3단계 안내</h2>
            <p className="text-stone-600 text-sm">교육 없이 직관적으로 시작하는 가장 정겨운 발걸음</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-[#E76F51] text-white flex items-center justify-center text-xl font-black shadow-md shadow-orange-500/20 select-none">
                1
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{config.step1Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {config.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-black shadow-md shadow-stone-800/20 select-none">
                2
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{config.step2Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {config.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md shadow-emerald-500/20 select-none">
                3
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{config.step3Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {config.step3Desc}
              </p>
            </div>

            {/* Dotted Connection graphic line for screens greater than md */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 border-t border-dashed border-stone-300 -z-0" />

          </div>
        </div>
      </section>

      {/* --- STUNNING BOTTOM CALL TO ACTION BANNER --- */}
      <section className="bg-stone-950 text-white relative py-20 px-4 md:px-8 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-44 h-44 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-2xl transform -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl transform translate-x-20 translate-y-20" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md shrink-0">
              <ImgWithFallback
                src={config.logoImg}
                alt="ITDA 로고 하단 상징"
                className="w-full h-full object-contain"
                fallbackIcon={<Heart className="w-6 h-6 text-[#E76F51]" />}
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            지금 {config.logoTitle}로<br />서로의 마음 속 온도를 한층 늘려보세요!
          </h2>

          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            벽을 허물어 따뜻하게 상호 포용하는 세상을 열어 가기 위해, 기술은 오늘도 애쓰며 한 호흡으로 전진합니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
            <a
              href="mailto:support@itda.app"
              className="bg-white/10 hover:bg-white/15 active:scale-95 text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-1.5"
            >
              <span>기관 비즈니스 연동 문의하기</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- CLEAN PROFESSIONAL FOOTER --- */}
      <footer className="bg-stone-900 border-t border-stone-850 py-10 px-4 md:px-8 text-stone-400 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center p-0.5 shrink-0">
              <ImgWithFallback
                src={config.logoImg}
                alt="ITDA"
                className="w-full h-full object-contain"
                fallbackIcon={<Smile className="w-4 h-4 text-orange-500" />}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-sm tracking-tight">{config.logoTitle}</span>
              <span className="text-[9px] text-[#E76F51] tracking-wide font-bold">소리가 없어도, 우리는 이어집니다</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-stone-400 font-medium">
            <a href="#intro" className="hover:text-white transition-colors">서비스 소개</a>
            <a href="#features" className="hover:text-white transition-colors">데이터 수집 처리방침</a>
            <a href="#demo" className="hover:text-white transition-colors">수어 인식 가이드 라인</a>
            <a href="#quiz-section" className="hover:text-white transition-colors">상식 보조 퀴즈</a>
          </div>

          <div className="text-stone-500 text-[10px] text-center md:text-right">
            <p>© 2026 {config.logoTitle} Inc. All Rights Reserved.</p>
            <p className="mt-1 text-[9px] opacity-70">전국 언어 장애인 모임 수어 학습센터 공식 기술 제휴</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
