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

// --- i18n Multi-language Support ---
type Lang = 'ko' | 'en' | 'ja' | 'zh' | 'vi' | 'id' | 'hi';

const LANG_LABELS: Record<Lang, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  vi: 'Tiếng Việt',
  id: 'Bahasa',
  hi: 'हिन्दी',
};

const i18n: Record<Lang, Record<string, string>> = {
  ko: {
    navIntro: '서비스 소개',
    navFeatures: '핵심 기술',
    navSteps: '시작하기',
    heroBadge: '장애 너머의 따뜻한 통찰과 기술의 결합',
    heroLine1: '소리가 없어도,',
    heroLine2: '우리는 이어집니다',
    heroDesc: 'ITDA(잇다)는 수어와 음성을 실시간 인공지능으로 튼튼하게 결합하여 청각장애인과 비장애인이 일상에서 지연 없이 부드럽고 자연스럽게 대화하도록 이끄는 스마트 소통 혁신 서비스입니다.',
    btnStart: '무료로 체험 시작하기',
    btnLearn: 'ITDA 가치 알아보기',
    stat1Num: '36만+',
    stat1Label: '국내 청각장애 보증 파트너',
    stat2Num: '4.66억',
    stat2Label: '글로벌 잠재 수어 인구',
    stat3Num: '지연 없음',
    stat3Label: '실시간 온디바이스 응답',
    storyBadge: 'Brand Core Vision',
    storyTitle: "한국의 '정(情)'을 담아, 언어의 장벽을 세계로 잇다",
    storyDesc1: 'ITDA는 단순한 디지털 안내 번역 애플리케이션에 멈추지 않습니다. 청각장애인 당사자, 깊은 애정을 지닌 가족과 친구들, 환자의 아픔을 듣는 의료진, 그리고 일상의 이웃들까지—소리가 필요한 곳이라면 수어와 완벽한 음성을 투명하게 이어줍니다.',
    storyDesc2: '한국인의 깊고 정겨운 따뜻한 정(情)에서 시작된 아이디어는 전 세계 대다수의 언어적 단절을 이겨내는 위대한 기술적 비전으로 자라나며, 소외 받는 구성원이 단 한 명도 없는 평등하고 따뜻한 사회를 구현해 나갑니다.',
    visionText: '청각장애인 당사자, 가족, 친구, 사회, 세계 — 다섯\n마음이 하나의 원을 이루는 ITDA의 비전입니다.',
    visionSlogan: '너와 나를 하나로 이어 모두가 즐거운 세상',
    visionPills: '당사자,가족,친구,사회,세계',
    touchCardTitle: '마음을 전하는 따뜻한 수어 및 아이콘 표현들',
    touchCardSub: '스탬프 카드를 누르면 아래 인공지능 핸드트래킹 모션 체임버 시뮬레이터로 즉각 연동됩니다!',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: '서비스가 전달하는 핵심 소통가치',
    featuresSub: '전혀 새로운 차원의 전인류적 장벽 철폐 메커니즘을 경험해보세요.',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: '장벽을 정복하는 간편한 3단계 안내',
    stepsSub: '교육 없이 직관적으로 시작하는 가장 정겨운 발걸음',
    step1Title: '앱 접속 / 웹 실행',
    step1Desc: '설치 없이 브라우저 주소 접속이나 ITDA 모바일 애플리케이션을 상쾌하게 다운로드 받아 켜주세요.',
    step2Title: '실시간 대화 모드 결정',
    step2Desc: "화면 지침의 '수어 발신'과 '음성 번역 수신' 중 나에게 맞는 가장 친절하고 직관적인 모드를 탭해 활성화합니다.",
    step3Title: '카메라 지향 및 밀접 대화',
    step3Desc: '단순 손바닥 지문과 턱선을 가벼운 렌즈 앵글에 맞춰 편하게 손짓과 말소리로 풍부하고 따뜻한 소통을 이뤄갑니다.',
    ctaTitle: '지금, 소통의 벽을 함께 허물어요',
    ctaSub: '벽을 허물어 따뜻하게 상호 포용하는 세상을 열어 가기 위해, 기술은 오늘도 애쓰며 한 호흡으로 전진합니다.',
    ctaBtn: '기관 비즈니스 연동 문의하기',
    comingSoonTitle: '준비 중입니다',
    comingSoonMsg: '지금 준비중입니다. 빠른 시간내 준비하도록 하겠습니다. 감사합니다.',
    comingSoonClose: '닫기',
    feat1Title: '실시간 수어 번역 센서',
    feat1Desc: 'AI 모델이 카메라 영상을 온디바이스로 신속 분석해, 수어 제스처의 미세한 흐름을 실시간으로 정확히 추적 번역합니다.',
    feat2Title: '음성 ➜ 캐릭터 수어 변환',
    feat2Desc: '비장애인이 내뱉은 음성은 실시간 텍스트로 보조될 뿐 아니라 아바타 모델링을 통해 섬세한 손짓 수어로 즉각 형상화됩니다.',
    feat3Title: '다국어 글로벌 수어 라이브러리',
    feat3Desc: '한국어 표준 수어 연구 결과는 물론이고, 국제 범용 수어(IS)와 전 세계 메이저 국가별 수어 모듈을 통합 제공합니다.',
    feat4Title: '학습 및 파트너 커뮤니티',
    feat4Desc: '수어 사용자, 교육생, 재능 나누미 통역사, 그리고 응원하는 가족들이 소소한 에피소드를 안전하게 쌓아가는 나눔의 공간입니다.',
    feat5Title: '크로스 멀티디바이스 웹앱',
    feat5Desc: 'iOS와 안드로이드 네이티브 앱은 물론, 태블릿, 키오스크 매장 웹 브라우저까지 완벽히 최적화된 반응형 프레임워크입니다.',
    feat6Title: '종단간 프라이버시 원칙',
    feat6Desc: '민감한 오디오 대화나 일개 촬영 화면 정보는 서버에 무단 기록되지 않으며 대화방 폐쇄 순간 종단간 암호화되어 소멸합니다.',
    feat1Badge: '독보적 응답성',
    feat2Badge: '시각 가독 보장',
    feat3Badge: '세계 최초 통합',
    feat4Badge: '커뮤니티 파워',
    feat5Badge: '높은 연결 호환성',
    feat6Badge: '철저한 보안성',
  },
  en: {
    navIntro: 'About',
    navFeatures: 'Features',
    navSteps: 'Get Started',
    heroBadge: 'Warm insight and technology beyond disability',
    heroLine1: 'Even without sound,',
    heroLine2: 'we stay connected',
    heroDesc: 'ITDA seamlessly bridges sign language and voice through real-time AI, enabling natural and smooth conversations between deaf and hearing people without any delay.',
    btnStart: 'Start Free Trial',
    btnLearn: 'Learn About ITDA',
    stat1Num: '360K+',
    stat1Label: 'Domestic Deaf Partners',
    stat2Num: '466M',
    stat2Label: 'Global Sign Language Users',
    stat3Num: 'Zero Delay',
    stat3Label: 'Real-time On-device Response',
    storyBadge: 'Brand Core Vision',
    storyTitle: "Bridging the world's language barriers with Korean warmth",
    storyDesc1: 'ITDA is more than a digital translation app. From deaf individuals, loving families and friends, medical staff, to everyday neighbors — wherever sound is needed, we transparently connect sign language and voice.',
    storyDesc2: 'An idea born from the deep Korean spirit of Jeong(情) grows into a great technological vision that overcomes linguistic disconnection worldwide, building an equal and warm society where no one is left behind.',
    visionText: 'Individuals, Family, Friends, Society, World — five\nhearts forming one circle is the vision of ITDA.',
    visionSlogan: 'A joyful world where you and I are connected as one',
    visionPills: 'Individual,Family,Friend,Society,World',
    touchCardTitle: 'Warm sign language expressions that convey your heart',
    touchCardSub: 'Tap a stamp card to instantly connect to the AI hand-tracking motion simulator below!',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: 'Core communication values delivered by our service',
    featuresSub: 'Experience a whole new dimension of barrier-breaking mechanisms for all humanity.',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: 'Three easy steps to conquer barriers',
    stepsSub: 'The most intuitive first steps, no training needed',
    step1Title: 'Access App / Open Web',
    step1Desc: 'Simply visit the browser URL or download the ITDA mobile app to get started.',
    step2Title: 'Choose Conversation Mode',
    step2Desc: "Tap to activate the most intuitive mode for you: 'Sign Language Send' or 'Voice Translation Receive'.",
    step3Title: 'Point Camera & Chat',
    step3Desc: 'Align your palms and chin with the camera angle for rich and warm communication through gestures and voice.',
    ctaTitle: "Let's break down communication barriers together",
    ctaSub: 'Technology strives every day to open a world of mutual inclusion by breaking down walls.',
    ctaBtn: 'Contact for Business Integration',
    comingSoonTitle: 'Coming Soon',
    comingSoonMsg: 'We are currently preparing this feature. It will be ready soon. Thank you for your patience.',
    comingSoonClose: 'Close',
    feat1Title: 'Real-time Sign Translation Sensor',
    feat1Desc: 'AI model rapidly analyzes camera video on-device, accurately tracking and translating subtle sign language gesture flows in real-time.',
    feat2Title: 'Voice ➜ Character Sign Conversion',
    feat2Desc: 'Spoken voice is not only supplemented with real-time text but also instantly visualized as delicate sign language through avatar modeling.',
    feat3Title: 'Multilingual Global Sign Library',
    feat3Desc: 'Provides Korean standard sign language research results as well as International Sign (IS) and major country-specific sign language modules worldwide.',
    feat4Title: 'Learning & Partner Community',
    feat4Desc: 'A sharing space where sign language users, trainees, volunteer interpreters, and supporting families safely build small episodes together.',
    feat5Title: 'Cross Multi-device Web App',
    feat5Desc: 'Perfectly optimized responsive framework for iOS and Android native apps, tablets, kiosk store web browsers.',
    feat6Title: 'End-to-End Privacy Principle',
    feat6Desc: 'Sensitive audio conversations and camera footage are never recorded on servers and are end-to-end encrypted upon chat room closure.',
    feat1Badge: 'Unmatched Speed',
    feat2Badge: 'Visual Clarity',
    feat3Badge: 'World First',
    feat4Badge: 'Community Power',
    feat5Badge: 'High Compatibility',
    feat6Badge: 'Strict Security',
  },
  ja: {
    navIntro: 'サービス紹介',
    navFeatures: 'コア技術',
    navSteps: '始める',
    heroBadge: '障害を超えた温かい洞察と技術の融合',
    heroLine1: '音がなくても、',
    heroLine2: 'つながっています',
    heroDesc: 'ITDA（イッダ）は手話と音声をリアルタイムAIで結合し、聴覚障害者と健聴者が日常で遅延なくスムーズに会話できるスマートコミュニケーション革新サービスです。',
    btnStart: '無料体験を始める',
    btnLearn: 'ITDAの価値を知る',
    stat1Num: '36万+',
    stat1Label: '国内聴覚障害パートナー',
    stat2Num: '4.66億',
    stat2Label: 'グローバル手話人口',
    stat3Num: '遅延なし',
    stat3Label: 'リアルタイム応答',
    storyBadge: 'Brand Core Vision',
    storyTitle: '韓国の「情」を込めて、言語の壁を世界へつなぐ',
    storyDesc1: 'ITDAは単なるデジタル翻訳アプリにとどまりません。聴覚障害者本人、愛情深い家族や友人、医療従事者、そして日常の隣人まで — 音が必要な場所で手話と音声を透明につなぎます。',
    storyDesc2: '韓国人の温かい情（ジョン）から始まったアイデアは、世界中の言語的断絶を克服する偉大な技術ビジョンへと成長し、誰一人取り残されない平等で温かい社会を実現していきます。',
    visionText: '当事者、家族、友人、社会、世界 — 五つの\n心が一つの円を成すITDAのビジョンです。',
    visionSlogan: 'あなたと私を一つにつないで皆が楽しい世界',
    visionPills: '当事者,家族,友人,社会,世界',
    touchCardTitle: '心を伝える温かい手話とアイコン表現',
    touchCardSub: 'スタンプカードをタップすると、下のAIハンドトラッキングシミュレーターに即座に連動します！',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: 'サービスが届けるコアコミュニケーション価値',
    featuresSub: '全く新しい次元の障壁撤廃メカニズムを体験してください。',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: '障壁を克服する簡単3ステップガイド',
    stepsSub: '教育不要、直感的に始める最も親しみやすい一歩',
    step1Title: 'アプリ接続 / Web実行',
    step1Desc: 'インストール不要でブラウザからアクセス、またはITDAモバイルアプリをダウンロードして起動してください。',
    step2Title: 'リアルタイム会話モード選択',
    step2Desc: '「手話送信」と「音声翻訳受信」から最も直感的なモードをタップして有効化します。',
    step3Title: 'カメラを向けて会話',
    step3Desc: '手のひらと顎をカメラアングルに合わせ、手話と声で豊かなコミュニケーションを実現します。',
    ctaTitle: '今、コミュニケーションの壁を一緒に壊しましょう',
    ctaSub: '壁を壊し、温かく互いを包容する世界を開くために、技術は今日も一歩ずつ前進します。',
    ctaBtn: '法人ビジネス連携のお問い合わせ',
    comingSoonTitle: '準備中です',
    comingSoonMsg: 'ただいま準備中です。近日中にご利用いただけるよう準備いたします。ありがとうございます。',
    comingSoonClose: '閉じる',
    feat1Title: 'リアルタイム手話翻訳センサー',
    feat1Desc: 'AIモデルがカメラ映像をオンデバイスで迅速に分析し、手話ジェスチャーの微細な流れをリアルタイムで正確に追跡翻訳します。',
    feat2Title: '音声 ➜ キャラクター手話変換',
    feat2Desc: '健聴者の音声はリアルタイムテキストで補助されるだけでなく、アバターモデリングを通じて繊細な手話として即座に形象化されます。',
    feat3Title: '多言語グローバル手話ライブラリ',
    feat3Desc: '韓国語標準手話の研究成果はもちろん、国際手話(IS)と世界各国の手話モジュールを統合提供します。',
    feat4Title: '学習＆パートナーコミュニティ',
    feat4Desc: '手話ユーザー、研修生、ボランティア通訳者、応援する家族が安全にエピソードを積み重ねる共有空間です。',
    feat5Title: 'クロスマルチデバイスWebアプリ',
    feat5Desc: 'iOSとAndroidネイティブアプリはもちろん、タブレット、キオスク店舗Webブラウザまで完全最適化されたレスポンシブフレームワークです。',
    feat6Title: 'エンドツーエンドプライバシー原則',
    feat6Desc: '機密性の高い音声会話やカメラ映像情報はサーバーに無断記録されず、チャットルーム閉鎖時にエンドツーエンド暗号化されて消滅します。',
    feat1Badge: '独自の応答性',
    feat2Badge: '視覚的可読性',
    feat3Badge: '世界初統合',
    feat4Badge: 'コミュニティ力',
    feat5Badge: '高い互換性',
    feat6Badge: '厳格なセキュリティ',
  },
  zh: {
    navIntro: '服务介绍',
    navFeatures: '核心技术',
    navSteps: '开始使用',
    heroBadge: '超越障碍的温暖洞察与技术结合',
    heroLine1: '即使没有声音，',
    heroLine2: '我们依然相连',
    heroDesc: 'ITDA通过实时人工智能将手语和语音紧密结合，使听障人士和健听人士在日常生活中无延迟地进行自然流畅的对话。',
    btnStart: '免费开始体验',
    btnLearn: '了解ITDA价值',
    stat1Num: '36万+',
    stat1Label: '国内听障合作伙伴',
    stat2Num: '4.66亿',
    stat2Label: '全球手语人口',
    stat3Num: '零延迟',
    stat3Label: '实时设备端响应',
    storyBadge: 'Brand Core Vision',
    storyTitle: '承载韩国"情"，将语言的壁垒连接到世界',
    storyDesc1: 'ITDA不仅仅是一个数字翻译应用。从听障当事人、充满爱的家人和朋友、医疗人员到日常邻居——只要有声音需要的地方，我们都透明地连接手语和语音。',
    storyDesc2: '源自韩国人深厚温暖的"情"的创意，成长为克服全球语言断裂的伟大技术愿景，实现没有任何成员被排斥的平等温暖社会。',
    visionText: '当事人、家人、朋友、社会、世界——五颗\n心组成一个圆是ITDA的愿景。',
    visionSlogan: '将你和我连为一体，共创快乐世界',
    visionPills: '当事人,家人,朋友,社会,世界',
    touchCardTitle: '传递心意的温暖手语和图标表达',
    touchCardSub: '点击印章卡片，立即连接到下方AI手部追踪运动模拟器！',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: '服务传递的核心沟通价值',
    featuresSub: '体验全新维度的全人类障碍消除机制。',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: '征服障碍的简单3步指南',
    stepsSub: '无需培训，直觉式开始的最亲切步伐',
    step1Title: '访问应用 / 打开网页',
    step1Desc: '无需安装，直接通过浏览器访问或下载ITDA移动应用即可开始。',
    step2Title: '选择实时对话模式',
    step2Desc: '点击选择最适合您的直觉模式："手语发送"或"语音翻译接收"。',
    step3Title: '对准摄像头开始对话',
    step3Desc: '将手掌和下巴对准镜头角度，通过手势和声音进行丰富温暖的沟通。',
    ctaTitle: '现在，让我们一起打破沟通的壁垒',
    ctaSub: '为了打破壁垒、开创温暖包容的世界，技术每天都在努力前进。',
    ctaBtn: '机构业务对接咨询',
    comingSoonTitle: '准备中',
    comingSoonMsg: '目前正在准备中，我们会尽快完成准备。感谢您的耐心等待。',
    comingSoonClose: '关闭',
    feat1Title: '实时手语翻译传感器',
    feat1Desc: 'AI模型在设备端快速分析摄像头画面，实时精确追踪翻译手语手势的细微流动。',
    feat2Title: '语音 ➜ 角色手语转换',
    feat2Desc: '健听者的语音不仅有实时文字辅助，还通过虚拟形象建模即时呈现为细腻的手语。',
    feat3Title: '多语言全球手语库',
    feat3Desc: '提供韩语标准手语研究成果以及国际通用手语(IS)和全球主要国家手语模块。',
    feat4Title: '学习与伙伴社区',
    feat4Desc: '手语使用者、学员、志愿翻译员和支持的家人安全积累小故事的共享空间。',
    feat5Title: '跨多设备Web应用',
    feat5Desc: '完美优化的响应式框架，支持iOS和Android原生应用、平板电脑、店铺自助终端Web浏览器。',
    feat6Title: '端到端隐私原则',
    feat6Desc: '敏感的音频对话和摄像画面信息不会被服务器擅自记录，聊天室关闭时通过端到端加密销毁。',
    feat1Badge: '无与伦比的响应',
    feat2Badge: '视觉可读性',
    feat3Badge: '全球首创',
    feat4Badge: '社区力量',
    feat5Badge: '高兼容性',
    feat6Badge: '严格安全',
  },
  vi: {
    navIntro: 'Giới thiệu',
    navFeatures: 'Công nghệ',
    navSteps: 'Bắt đầu',
    heroBadge: 'Sự kết hợp giữa công nghệ và sự thấu hiểu vượt qua rào cản',
    heroLine1: 'Dù không có âm thanh,',
    heroLine2: 'chúng ta vẫn kết nối',
    heroDesc: 'ITDA kết hợp liền mạch ngôn ngữ ký hiệu và giọng nói thông qua AI thời gian thực, giúp người khiếm thính và người nghe giao tiếp tự nhiên, mượt mà mà không có bất kỳ sự chậm trễ nào.',
    btnStart: 'Dùng thử miễn phí',
    btnLearn: 'Tìm hiểu về ITDA',
    stat1Num: '360K+',
    stat1Label: 'Đối tác hỗ trợ khiếm thính',
    stat2Num: '466 triệu',
    stat2Label: 'Người dùng ngôn ngữ ký hiệu toàn cầu',
    stat3Num: 'Không độ trễ',
    stat3Label: 'Phản hồi thời gian thực trên thiết bị',
    storyBadge: 'Brand Core Vision',
    storyTitle: 'Mang hơi ấm tình người Hàn Quốc, kết nối rào cản ngôn ngữ ra thế giới',
    storyDesc1: 'ITDA không chỉ là một ứng dụng dịch thuật số. Từ người khiếm thính, gia đình và bạn bè yêu thương, nhân viên y tế đến những người hàng xóm — bất cứ nơi nào cần âm thanh, chúng tôi kết nối minh bạch ngôn ngữ ký hiệu và giọng nói.',
    storyDesc2: 'Ý tưởng sinh ra từ tinh thần Jeong (情) ấm áp của người Hàn Quốc phát triển thành tầm nhìn công nghệ vĩ đại vượt qua sự đứt gãy ngôn ngữ trên toàn thế giới, xây dựng một xã hội bình đẳng và ấm áp nơi không ai bị bỏ lại phía sau.',
    visionText: 'Đương sự, Gia đình, Bạn bè, Xã hội, Thế giới — năm\ntrái tim tạo thành một vòng tròn là tầm nhìn của ITDA.',
    visionSlogan: 'Kết nối bạn và tôi thành một, tạo nên thế giới vui vẻ',
    visionPills: 'Đương sự,Gia đình,Bạn bè,Xã hội,Thế giới',
    touchCardTitle: 'Biểu đạt ngôn ngữ ký hiệu ấm áp truyền tải trái tim bạn',
    touchCardSub: 'Nhấn vào thẻ để kết nối ngay với trình mô phỏng theo dõi tay AI bên dưới!',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: 'Giá trị giao tiếp cốt lõi của dịch vụ',
    featuresSub: 'Trải nghiệm cơ chế phá bỏ rào cản hoàn toàn mới cho toàn nhân loại.',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: 'Hướng dẫn 3 bước đơn giản để vượt qua rào cản',
    stepsSub: 'Bước đi trực quan nhất, không cần đào tạo',
    step1Title: 'Truy cập ứng dụng / Mở web',
    step1Desc: 'Chỉ cần truy cập URL trên trình duyệt hoặc tải ứng dụng ITDA để bắt đầu.',
    step2Title: 'Chọn chế độ hội thoại',
    step2Desc: 'Nhấn để kích hoạt chế độ phù hợp nhất: "Gửi ngôn ngữ ký hiệu" hoặc "Nhận dịch giọng nói".',
    step3Title: 'Hướng camera và trò chuyện',
    step3Desc: 'Căn chỉnh lòng bàn tay và cằm với góc camera để giao tiếp phong phú và ấm áp qua cử chỉ và giọng nói.',
    ctaTitle: 'Hãy cùng nhau phá bỏ rào cản giao tiếp',
    ctaSub: 'Công nghệ mỗi ngày đều nỗ lực để mở ra một thế giới bao dung lẫn nhau bằng cách phá bỏ những bức tường.',
    ctaBtn: 'Liên hệ hợp tác doanh nghiệp',
    comingSoonTitle: 'Đang chuẩn bị',
    comingSoonMsg: 'Chúng tôi đang chuẩn bị tính năng này. Sẽ sớm sẵn sàng phục vụ bạn. Xin cảm ơn.',
    comingSoonClose: 'Đóng',
    feat1Title: 'Cảm biến dịch ngôn ngữ ký hiệu thời gian thực',
    feat1Desc: 'Mô hình AI phân tích nhanh video camera trên thiết bị, theo dõi và dịch chính xác các cử chỉ ngôn ngữ ký hiệu tinh tế theo thời gian thực.',
    feat2Title: 'Giọng nói ➜ Chuyển đổi ký hiệu nhân vật',
    feat2Desc: 'Giọng nói không chỉ được hỗ trợ bằng văn bản thời gian thực mà còn được hình ảnh hóa tức thì thành ngôn ngữ ký hiệu tinh tế qua mô hình avatar.',
    feat3Title: 'Thư viện ngôn ngữ ký hiệu đa ngôn ngữ toàn cầu',
    feat3Desc: 'Cung cấp kết quả nghiên cứu ngôn ngữ ký hiệu tiêu chuẩn Hàn Quốc cùng với ngôn ngữ ký hiệu quốc tế (IS) và các mô-đun ngôn ngữ ký hiệu theo quốc gia.',
    feat4Title: 'Cộng đồng học tập và đối tác',
    feat4Desc: 'Không gian chia sẻ nơi người dùng ngôn ngữ ký hiệu, học viên, phiên dịch tình nguyện và gia đình hỗ trợ cùng nhau xây dựng.',
    feat5Title: 'Ứng dụng web đa thiết bị',
    feat5Desc: 'Framework đáp ứng được tối ưu hóa hoàn hảo cho ứng dụng iOS, Android, máy tính bảng và trình duyệt web kiosk.',
    feat6Title: 'Nguyên tắc bảo mật đầu cuối',
    feat6Desc: 'Cuộc hội thoại âm thanh nhạy cảm và cảnh quay camera không bao giờ được ghi lại trên máy chủ và được mã hóa đầu cuối khi đóng phòng chat.',
    feat1Badge: 'Tốc độ vượt trội',
    feat2Badge: 'Rõ ràng trực quan',
    feat3Badge: 'Đầu tiên thế giới',
    feat4Badge: 'Sức mạnh cộng đồng',
    feat5Badge: 'Tương thích cao',
    feat6Badge: 'Bảo mật nghiêm ngặt',
  },
  id: {
    navIntro: 'Tentang',
    navFeatures: 'Fitur',
    navSteps: 'Mulai',
    heroBadge: 'Perpaduan teknologi dan wawasan hangat melampaui disabilitas',
    heroLine1: 'Meski tanpa suara,',
    heroLine2: 'kita tetap terhubung',
    heroDesc: 'ITDA menghubungkan bahasa isyarat dan suara secara mulus melalui AI real-time, memungkinkan percakapan alami dan lancar antara penyandang tunarungu dan orang dengar tanpa jeda.',
    btnStart: 'Coba Gratis',
    btnLearn: 'Pelajari ITDA',
    stat1Num: '360K+',
    stat1Label: 'Mitra Tunarungu Domestik',
    stat2Num: '466 Juta',
    stat2Label: 'Pengguna Bahasa Isyarat Global',
    stat3Num: 'Tanpa Jeda',
    stat3Label: 'Respons Real-time di Perangkat',
    storyBadge: 'Brand Core Vision',
    storyTitle: 'Menjembatani hambatan bahasa dunia dengan kehangatan Korea',
    storyDesc1: 'ITDA lebih dari sekadar aplikasi penerjemah digital. Dari penyandang tunarungu, keluarga dan teman yang penuh kasih, tenaga medis, hingga tetangga sehari-hari — di mana pun suara dibutuhkan, kami menghubungkan bahasa isyarat dan suara secara transparan.',
    storyDesc2: 'Ide yang lahir dari semangat Jeong (情) Korea yang mendalam tumbuh menjadi visi teknologi besar yang mengatasi keterputusan bahasa di seluruh dunia, membangun masyarakat yang setara dan hangat di mana tak seorang pun tertinggal.',
    visionText: 'Penyandang, Keluarga, Teman, Masyarakat, Dunia — lima\nhati membentuk satu lingkaran adalah visi ITDA.',
    visionSlogan: 'Menghubungkan kamu dan aku menjadi satu, menciptakan dunia yang menyenangkan',
    visionPills: 'Penyandang,Keluarga,Teman,Masyarakat,Dunia',
    touchCardTitle: 'Ekspresi bahasa isyarat hangat yang menyampaikan hati Anda',
    touchCardSub: 'Ketuk kartu stempel untuk langsung terhubung ke simulator pelacakan tangan AI di bawah!',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: 'Nilai komunikasi inti yang disampaikan layanan kami',
    featuresSub: 'Rasakan mekanisme penghapusan hambatan dimensi baru untuk seluruh umat manusia.',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: 'Panduan 3 langkah mudah untuk menaklukkan hambatan',
    stepsSub: 'Langkah pertama paling intuitif, tanpa perlu pelatihan',
    step1Title: 'Akses Aplikasi / Buka Web',
    step1Desc: 'Cukup kunjungi URL di browser atau unduh aplikasi mobile ITDA untuk memulai.',
    step2Title: 'Pilih Mode Percakapan',
    step2Desc: 'Ketuk untuk mengaktifkan mode paling intuitif: "Kirim Bahasa Isyarat" atau "Terima Terjemahan Suara".',
    step3Title: 'Arahkan Kamera & Mulai Chat',
    step3Desc: 'Sejajarkan telapak tangan dan dagu dengan sudut kamera untuk komunikasi yang kaya dan hangat melalui gerakan dan suara.',
    ctaTitle: 'Mari bersama-sama meruntuhkan hambatan komunikasi',
    ctaSub: 'Teknologi berusaha setiap hari untuk membuka dunia yang saling merangkul dengan meruntuhkan tembok.',
    ctaBtn: 'Hubungi untuk Integrasi Bisnis',
    comingSoonTitle: 'Sedang Dipersiapkan',
    comingSoonMsg: 'Kami sedang mempersiapkan fitur ini. Akan segera siap melayani Anda. Terima kasih.',
    comingSoonClose: 'Tutup',
    feat1Title: 'Sensor Terjemahan Bahasa Isyarat Real-time',
    feat1Desc: 'Model AI menganalisis video kamera di perangkat dengan cepat, melacak dan menerjemahkan alur gerakan bahasa isyarat yang halus secara real-time.',
    feat2Title: 'Suara ➜ Konversi Isyarat Karakter',
    feat2Desc: 'Suara tidak hanya dilengkapi teks real-time tetapi juga langsung divisualisasikan sebagai bahasa isyarat halus melalui pemodelan avatar.',
    feat3Title: 'Perpustakaan Bahasa Isyarat Global Multibahasa',
    feat3Desc: 'Menyediakan hasil penelitian bahasa isyarat standar Korea serta modul Bahasa Isyarat Internasional (IS) dan bahasa isyarat negara-negara utama.',
    feat4Title: 'Komunitas Belajar & Mitra',
    feat4Desc: 'Ruang berbagi tempat pengguna bahasa isyarat, peserta pelatihan, penerjemah sukarelawan, dan keluarga pendukung bersama-sama membangun.',
    feat5Title: 'Aplikasi Web Multi-perangkat',
    feat5Desc: 'Framework responsif yang dioptimalkan sempurna untuk aplikasi iOS, Android, tablet, dan browser web kiosk toko.',
    feat6Title: 'Prinsip Privasi End-to-End',
    feat6Desc: 'Percakapan audio sensitif dan rekaman kamera tidak pernah dicatat di server dan dienkripsi end-to-end saat ruang chat ditutup.',
    feat1Badge: 'Kecepatan Unggul',
    feat2Badge: 'Kejelasan Visual',
    feat3Badge: 'Pertama di Dunia',
    feat4Badge: 'Kekuatan Komunitas',
    feat5Badge: 'Kompatibilitas Tinggi',
    feat6Badge: 'Keamanan Ketat',
  },
  hi: {
    navIntro: 'परिचय',
    navFeatures: 'विशेषताएं',
    navSteps: 'शुरू करें',
    heroBadge: 'विकलांगता से परे गर्मजोशी भरी अंतर्दृष्टि और प्रौद्योगिकी का संयोजन',
    heroLine1: 'आवाज़ न हो तब भी,',
    heroLine2: 'हम जुड़े रहते हैं',
    heroDesc: 'ITDA रियल-टाइम AI के माध्यम से सांकेतिक भाषा और आवाज़ को सहज रूप से जोड़ता है, जिससे बधिर और सुनने वाले लोग बिना किसी देरी के स्वाभाविक बातचीत कर सकते हैं।',
    btnStart: 'मुफ़्त में आज़माएं',
    btnLearn: 'ITDA के बारे में जानें',
    stat1Num: '3.6 लाख+',
    stat1Label: 'घरेलू बधिर साझेदार',
    stat2Num: '46.6 करोड़',
    stat2Label: 'वैश्विक सांकेतिक भाषा उपयोगकर्ता',
    stat3Num: 'शून्य विलंब',
    stat3Label: 'रियल-टाइम डिवाइस प्रतिक्रिया',
    storyBadge: 'Brand Core Vision',
    storyTitle: 'कोरियाई गर्मजोशी के साथ दुनिया की भाषा बाधाओं को जोड़ना',
    storyDesc1: 'ITDA सिर्फ एक डिजिटल अनुवाद ऐप नहीं है। बधिर व्यक्तियों से लेकर प्यार करने वाले परिवार और दोस्तों, चिकित्सा कर्मचारियों से लेकर रोज़मर्रा के पड़ोसियों तक — जहाँ भी आवाज़ की ज़रूरत है, हम सांकेतिक भाषा और आवाज़ को पारदर्शी रूप से जोड़ते हैं।',
    storyDesc2: 'कोरियाई लोगों की गहरी गर्मजोशी "जियोंग" (情) से जन्मा विचार दुनिया भर में भाषाई विसंगति को दूर करने वाली एक महान तकनीकी दृष्टि में विकसित होता है, जहाँ कोई भी पीछे नहीं छूटता।',
    visionText: 'स्वयं, परिवार, मित्र, समाज, विश्व — पाँच\nदिल एक वृत्त बनाते हैं, यही ITDA की दृष्टि है।',
    visionSlogan: 'तुम और मैं एक होकर सबके लिए खुशहाल दुनिया',
    visionPills: 'स्वयं,परिवार,मित्र,समाज,विश्व',
    touchCardTitle: 'आपके दिल की बात पहुँचाने वाली गर्मजोशी भरी सांकेतिक भाषा अभिव्यक्तियाँ',
    touchCardSub: 'स्टैम्प कार्ड पर टैप करें और नीचे AI हैंड-ट्रैकिंग सिम्युलेटर से तुरंत जुड़ें!',
    featuresLabel: 'ITDA Key Innovations',
    featuresTitle: 'हमारी सेवा द्वारा प्रदान किए जाने वाले मूल संचार मूल्य',
    featuresSub: 'पूरी मानवता के लिए बाधा-मुक्ति के एक बिल्कुल नए आयाम का अनुभव करें।',
    stepsLabel: 'Simple 3-Steps',
    stepsTitle: 'बाधाओं को जीतने के 3 आसान कदम',
    stepsSub: 'सबसे सहज पहला कदम, किसी प्रशिक्षण की ज़रूरत नहीं',
    step1Title: 'ऐप एक्सेस / वेब खोलें',
    step1Desc: 'बस ब्राउज़र URL पर जाएं या शुरू करने के लिए ITDA मोबाइल ऐप डाउनलोड करें।',
    step2Title: 'बातचीत मोड चुनें',
    step2Desc: 'अपने लिए सबसे सहज मोड सक्रिय करें: "सांकेतिक भाषा भेजें" या "ध्वनि अनुवाद प्राप्त करें"।',
    step3Title: 'कैमरा लक्ष्य करें और बात करें',
    step3Desc: 'हथेलियों और ठोड़ी को कैमरा एंगल से मिलाएं और इशारों और आवाज़ से समृद्ध संवाद करें।',
    ctaTitle: 'आइए, मिलकर संवाद की बाधाएं तोड़ें',
    ctaSub: 'दीवारें तोड़कर आपसी समावेश की दुनिया खोलने के लिए, प्रौद्योगिकी हर दिन एक कदम आगे बढ़ती है।',
    ctaBtn: 'व्यावसायिक एकीकरण के लिए संपर्क करें',
    comingSoonTitle: 'तैयारी जारी है',
    comingSoonMsg: 'हम वर्तमान में इस सुविधा को तैयार कर रहे हैं। जल्द ही उपलब्ध होगी। धन्यवाद।',
    comingSoonClose: 'बंद करें',
    feat1Title: 'रियल-टाइम सांकेतिक भाषा अनुवाद सेंसर',
    feat1Desc: 'AI मॉडल डिवाइस पर कैमरा वीडियो का तेज़ी से विश्लेषण करता है, सांकेतिक भाषा के सूक्ष्म इशारों को रियल-टाइम में सटीक रूप से ट्रैक और अनुवाद करता है।',
    feat2Title: 'आवाज़ ➜ कैरेक्टर सांकेतिक रूपांतरण',
    feat2Desc: 'बोली गई आवाज़ न केवल रियल-टाइम टेक्स्ट से सहायता प्राप्त होती है बल्कि अवतार मॉडलिंग के माध्यम से तुरंत सूक्ष्म सांकेतिक भाषा में विज़ुअलाइज़ होती है।',
    feat3Title: 'बहुभाषी वैश्विक सांकेतिक भाषा पुस्तकालय',
    feat3Desc: 'कोरियाई मानक सांकेतिक भाषा अनुसंधान के साथ-साथ अंतर्राष्ट्रीय सांकेतिक (IS) और प्रमुख देशों के सांकेतिक भाषा मॉड्यूल प्रदान करता है।',
    feat4Title: 'शिक्षण एवं साझेदार समुदाय',
    feat4Desc: 'सांकेतिक भाषा उपयोगकर्ता, प्रशिक्षु, स्वयंसेवी दुभाषिए और सहायक परिवार मिलकर साझा स्थान बनाते हैं।',
    feat5Title: 'क्रॉस मल्टी-डिवाइस वेब ऐप',
    feat5Desc: 'iOS, Android, टैबलेट और कियोस्क स्टोर वेब ब्राउज़र के लिए पूरी तरह अनुकूलित रिस्पॉन्सिव फ्रेमवर्क।',
    feat6Title: 'एंड-टू-एंड गोपनीयता सिद्धांत',
    feat6Desc: 'संवेदनशील ऑडियो वार्तालाप और कैमरा फुटेज कभी सर्वर पर रिकॉर्ड नहीं होते और चैट रूम बंद होने पर एंड-टू-एंड एन्क्रिप्ट होकर नष्ट हो जाते हैं।',
    feat1Badge: 'बेजोड़ गति',
    feat2Badge: 'दृश्य स्पष्टता',
    feat3Badge: 'विश्व में पहली बार',
    feat4Badge: 'समुदाय शक्ति',
    feat5Badge: 'उच्च संगतता',
    feat6Badge: 'सख्त सुरक्षा',
  },
};

// --- Sign Language Video URL Mapping (Supabase Storage) ---
// Mobile uses mp4 (no transparency issues), desktop uses webm (transparent)
const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const SIGN_VIDEO_MAP: Record<string, string | string[]> = {
  hello: isMobile
    ? 'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/f417621b02834909a3dc6393d6a6f53d.mp4'
    : 'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/d4b9133f45744d28822a94b63501c613_transparent.webm',
  thanks: isMobile
    ? 'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/69eeada6eb6445e9b9f88c0adf07d985.mp4'
    : 'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/0ae9e93686834c8d803e56d7242888ae_transparent.webm',
  love: 'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/3_transparent.webm',
  together: [
    'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/b2e12b5ba647425b88b5319302036dea_transparent.webm',
    'https://nnbtsjwgqocaypwggiey.supabase.co/storage/v1/object/public/sign_videos/7bab94c996cd453a8e672a4c9e21cbe4_transparent.webm',
  ],
};

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
    { id: 'together', korean: '우리 같이', gestureDescription: '양손의 집게손가락을 모아서 앞을 향해 뻗으며 하나되는 움직임을 생성합니다.', icon: '🤝', english: 'Together', color: 'border-amber-200 bg-amber-50/20 text-amber-750' },
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

  // Language state
  const [lang, setLang] = useState<Lang>('ko');
  const t = i18n[lang];

  // Coming soon modal state
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Sign video modal state
  const [videoModal, setVideoModal] = useState<{ urls: string[]; title: string } | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoopCount, setVideoLoopCount] = useState(0);

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
          onClick={() => {
            const el = document.getElementById('sign-cards');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#E76F51] hover:bg-[#d4603f] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs sm:text-sm tracking-tight border border-orange-400/30"
        >
          <Heart className="w-4 h-4 text-white fill-white" />
          <span>따스한 수어표현을 체험하세요</span>
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
            <a href="#intro" className="hover:text-[#E76F51] transition-colors font-semibold">{t.navIntro}</a>
            <a href="#features" className="hover:text-[#E76F51] transition-colors font-semibold">{t.navFeatures}</a>
            <button onClick={() => setShowComingSoon(true)} className="hover:text-[#E76F51] transition-colors font-semibold">{t.navSteps}</button>
            {/* Language Selector */}
            <div className="relative">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="appearance-none bg-orange-50 border border-orange-200 text-stone-700 text-xs font-bold rounded-lg px-3 py-1.5 pr-7 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                {(Object.keys(LANG_LABELS) as Lang[]).map((key) => (
                  <option key={key} value={key}>{LANG_LABELS[key]}</option>
                ))}
              </select>
              <Globe className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500 pointer-events-none" />
            </div>
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
              <span>{t.heroBadge}</span>
            </div>


            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 leading-[1.25]">
              {t.heroLine1} <br />
              <span className="text-[#E76F51] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                {t.heroLine2}
              </span>
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2 group text-sm"
              >
                <span>{t.btnStart}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#intro"
                className="bg-white hover:bg-orange-50/50 text-stone-800 border border-stone-200 py-3.5 px-6 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 text-sm"
              >
                <Play className="w-4 h-4 fill-current text-[#E76F51]" />
                <span>{t.btnLearn}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-orange-100/60 w-full grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-stone-900">{t.stat1Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{t.stat1Label}</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-stone-900">{t.stat2Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{t.stat2Label}</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#E76F51]">{t.stat3Num}</p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium leading-tight">{t.stat3Label}</p>
              </div>
            </div>
          </div>

          {/* Brand Vision Card Right */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-sky-100/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div className="bg-white border border-stone-200/60 rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col items-center w-full max-w-sm text-center">
              {/* ITDA Flower Logo */}
              <div className="w-36 h-36 my-2 flex items-center justify-center">
                <ImgWithFallback
                  src={config.logoImg}
                  alt="ITDA 원형 꽃 심볼 대표 로고"
                  className="w-full h-full object-contain filter drop-shadow-md"
                  fallbackIcon={<Sparkles className="w-16 h-16 text-blue-400" />}
                />
              </div>

              {/* Vision Statement */}
              <p className="text-sm text-stone-700 leading-relaxed font-medium mt-2 mb-5 whitespace-pre-line">
                {t.visionText.split('ITDA')[0]}<span className="font-extrabold text-stone-900">ITDA</span>{t.visionText.split('ITDA')[1]}
              </p>

              {/* 5 Value Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {t.visionPills.split(',').map((label: string) => (
                  <span key={label} className="border border-sky-300 text-sky-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                    {label}
                  </span>
                ))}
              </div>

              {/* ITDA Banner Logo */}
              <div className="w-full flex flex-col items-center">
                <ImgWithFallback
                  src={config.logoBanner}
                  alt="ITDA 로고 배너"
                  className="h-16 object-contain mb-2"
                  fallbackIcon={<p className="text-2xl font-extrabold text-stone-800">ITDA</p>}
                />
                <p className="text-sm text-stone-500 font-medium">
                  {t.visionSlogan}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOUR CORE MEANING TOUCH CARDS (DYNAMIC TO ACCOMMODATE MORE OR CHANGED PHRASES!) --- */}
      <section className="bg-stone-50/50 border-y border-orange-100/40 py-12 px-4 md:px-8" id="sign-cards">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8">
            <p className="text-lg font-extrabold text-[#2E2520] mt-1">
              따스한 수어표현을 배워보세요?
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {config.signPhrases.filter((card: any) => SIGN_VIDEO_MAP[card.id]).map((card: any, i: number) => (
              <motion.div
                key={card.id || i}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const videoEntry = SIGN_VIDEO_MAP[card.id];
                  if (videoEntry) {
                    const urls = Array.isArray(videoEntry) ? videoEntry : [videoEntry];
                    setCurrentVideoIndex(0);
                    setVideoModal({ urls, title: card.korean });
                  }
                }}
                className={`border rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group select-none min-h-[175px] flex flex-col justify-between ${card.color || 'border-orange-200 bg-orange-50/20 text-orange-700'}`}
              >
                <div>
                  <div className="text-3xl mb-2.5 transform group-hover:scale-120 transition-transform">{card.icon}</div>
                  <h3 className="font-extrabold text-stone-900 text-sm sm:text-base leading-tight">{card.korean}</h3>
                  <p className="text-[10px] opacity-75 font-semibold tracking-wide uppercase mt-0.5">{card.english}</p>
                </div>
                <div className="mt-3.5 inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold group-hover:underline text-[#E76F51]">
                  <Play className="w-3 h-3" />
                  <span>수어 모션 체험하기 &gt;</span>
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
            <h3 className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">{t.storyBadge}</h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-snug">
              {t.storyTitle}
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>{t.storyDesc1}</p>
              <p>{t.storyDesc2}</p>
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
          <span className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">{t.featuresLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">{t.featuresTitle}</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            {t.featuresSub}
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
                    {(t as any)[`feat${i+1}Badge`] || feat.badge}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-stone-900 text-base">{(t as any)[`feat${i+1}Title`] || feat.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-normal">{(t as any)[`feat${i+1}Desc`] || feat.desc}</p>
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
            <span className="text-[#E76F51] text-xs font-bold tracking-widest uppercase">{t.stepsLabel}</span>
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">{t.stepsTitle}</h2>
            <p className="text-stone-600 text-sm">{t.stepsSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-[#E76F51] text-white flex items-center justify-center text-xl font-black shadow-md shadow-orange-500/20 select-none">
                1
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{t.step1Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {t.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-black shadow-md shadow-stone-800/20 select-none">
                2
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{t.step2Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {t.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md shadow-emerald-500/20 select-none">
                3
              </div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">{t.step3Title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs font-normal">
                {t.step3Desc}
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
            {t.ctaTitle}
          </h2>

          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            {t.ctaSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-white/10 hover:bg-white/15 active:scale-95 text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-1.5"
            >
              <span>{t.ctaBtn}</span>
            </button>
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

      {/* --- SIGN VIDEO MODAL --- */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-[#f5f0eb] rounded-2xl shadow-2xl p-5 max-w-lg w-full text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-stone-900">"{videoModal.title}" 수어 영상</h3>
                <button onClick={() => setVideoModal(null)} className="p-1 hover:bg-stone-200 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#d9d0c7] aspect-video relative">
                {videoModal.urls.length > 1 && (
                  <span className="absolute top-2 left-2 bg-black/40 text-white text-[11px] font-bold px-2.5 py-1 rounded-md z-10">
                    {videoModal.title.split(' ')[currentVideoIndex] || `영상 ${currentVideoIndex + 1}`} ({currentVideoIndex + 1}/{videoModal.urls.length})
                  </span>
                )}
                <video
                  key={currentVideoIndex}
                  src={videoModal.urls[currentVideoIndex]}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                  onLoadedMetadata={(e) => {
                    if (currentVideoIndex > 0) {
                      e.currentTarget.currentTime = 0.5;
                    }
                  }}
                  onTimeUpdate={(e) => {
                    const vid = e.currentTarget;
                    if (vid.duration && vid.currentTime >= vid.duration - 0.4 && videoModal.urls.length > 1) {
                      const next = currentVideoIndex < videoModal.urls.length - 1 ? currentVideoIndex + 1 : 0;
                      setCurrentVideoIndex(next);
                    }
                  }}
                  onEnded={() => {
                    if (videoModal.urls.length === 1) {
                      setCurrentVideoIndex(0);
                    }
                  }}
                />
                {/* Preload next video */}
                {videoModal.urls.length > 1 && (
                  <link rel="preload" as="video" href={videoModal.urls[(currentVideoIndex + 1) % videoModal.urls.length]} />
                )}
              </div>
              {videoModal.urls.length > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {videoModal.urls.map((_: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrentVideoIndex(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currentVideoIndex === i ? 'bg-[#E76F51] text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                    >
                      {videoModal.title.split(' ')[i] || `영상 ${i + 1}`}
                    </button>
                  ))}
                </div>
              )}
              <p className="text-xs text-stone-500">카드를 클릭하여 다른 수어 영상도 확인해 보세요.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- COMING SOON MODAL --- */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <Settings className="w-8 h-8 text-[#E76F51] animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h3 className="text-xl font-extrabold text-stone-900">{t.comingSoonTitle}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{t.comingSoonMsg}</p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 px-8 rounded-xl text-sm transition-all"
              >
                {t.comingSoonClose}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
