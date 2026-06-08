# ITDA 랜딩 페이지 프로젝트 진행 사항

## 프로젝트 개요

**ITDA(잇다)** 는 수어와 음성을 실시간 AI로 연결하여 청각장애인과 비장애인이 자연스럽게 대화할 수 있도록 하는 스마트 소통 플랫폼의 **서비스 소개 랜딩 페이지**입니다.

---

## 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| 프론트엔드 | React + TypeScript | React 19 |
| 번들러 | Vite | 6.2 |
| 스타일링 | Tailwind CSS | 4.1 |
| 애니메이션 | Motion (Framer Motion) | 12.x |
| 아이콘 | Lucide React | 0.546 |
| 백엔드 | Express.js | 4.21 |
| AI API | Google Gemini (@google/genai) | 2.4 |

---

## 프로젝트 구조

```
ITDA_Landing.py/
├── index.html              # HTML 엔트리포인트
├── server.ts               # Express 백엔드 서버
├── package.json            # 의존성 및 스크립트
├── vite.config.ts          # Vite 설정
├── tsconfig.json           # TypeScript 설정
├── metadata.json           # 앱 메타데이터 (AI Studio 연동)
├── .env.example            # 환경변수 예시 (GEMINI_API_KEY, APP_URL)
├── .gitignore              # Git 제외 파일 설정
├── README.md               # 프로젝트 설명
├── image/
│   └── ITDA_icon/
│       ├── 3.png           # 로고 배너 이미지
│       └── 4.png           # 로고 아이콘 이미지
└── src/
    ├── main.tsx            # React 엔트리포인트
    ├── index.css           # 글로벌 스타일
    └── App.tsx             # 메인 랜딩 페이지 컴포넌트
```

---

## 랜딩 페이지 주요 섹션

1. **헤더** - 로고 + 네비게이션 (서비스 소개, 핵심 기술, 시작하기)
2. **히어로 배너** - 핵심 가치 메시지 + CTA 버튼 + 통계 수치 (36만+ 파트너, 4.66억 글로벌 수어 인구)
3. **브랜드 스토리** - "한국의 정(情)을 담아, 언어의 장벽을 세계로 잇다"
4. **수어 인터랙티브 시뮬레이터** - 수어↔음성 변환 체험 (안녕하세요, 감사합니다, 사랑합니다 등 5개 문구)
5. **핵심 기능 6개 카드**
   - 실시간 수어 번역 센서
   - 음성 → 캐릭터 수어 변환
   - 다국어 글로벌 수어 라이브러리
   - 학습 및 파트너 커뮤니티
   - 크로스 멀티디바이스 웹앱
   - 종단간 프라이버시 원칙
6. **사용자 후기** - 3명의 실사용자 후기 (청각장애인 당사자, 가입자, 매장 대표)
7. **3단계 시작 가이드** - 앱 접속 → 대화 모드 결정 → 카메라 대화
8. **CTA 배너** - 하단 행동 유도 섹션

---

## 백엔드 API

| 엔드포인트 | 메서드 | 설명 |
|-----------|--------|------|
| `/api/health` | GET | 헬스체크 |
| `/api/antigravity` | POST | Gemini AI 기반 Python 원격 실행 브릿지 |

---

## 주요 기능

- **실시간 콘텐츠 편집기**: localStorage 기반으로 텍스트, 이미지, 카드 내용을 실시간 수정 가능
- **반응형 디자인**: 모바일/태블릿/데스크탑 대응
- **애니메이션**: Motion 라이브러리를 활용한 스크롤 기반 인터랙션
- **이미지 폴백**: 이미지 로드 실패 시 아이콘 대체 표시 (ImgWithFallback 컴포넌트)

---

## 완료된 작업

- [x] 프로젝트 초기 세팅 (React + Vite + Tailwind + Express)
- [x] 랜딩 페이지 전체 UI 구현 (App.tsx 단일 컴포넌트)
- [x] Express 백엔드 서버 구축 (Gemini API 연동)
- [x] Git 저장소 초기화 및 초기 커밋
- [x] npm 의존성 설치 (215개 패키지)
- [x] 로고 배너 이미지 변경 (ITDA_icon/3.png → 4.png)
- [x] GitHub 리포지토리 푸시 완료

---

## Git 이력

| 커밋 해시 | 메시지 |
|----------|--------|
| `f9051b7` | Initial commit: ITDA 수어-음성 소통 플랫폼 랜딩 페이지 |
| `2ab0e09` | Update logo banner to use ITDA_icon/4.png |

---

## GitHub 리포지토리

- **URL**: https://github.com/inkidong26-eng/ITDA.project
- **브랜치**: `main`

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 환경변수 설정

`.env.example`을 `.env`로 복사 후 값을 입력합니다.

```env
GEMINI_API_KEY="실제_GEMINI_API_키"
APP_URL="앱_호스팅_URL"
```

---

*최종 업데이트: 2026-06-08*
