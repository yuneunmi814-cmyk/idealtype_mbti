export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP'

export type Dimension = 'EI' | 'SN' | 'TF' | 'JP'

export interface Question {
  id: number
  text: string
  dimension: Dimension
  choiceA: string
  choiceB: string
  labelA: 'E' | 'S' | 'T' | 'J'
  labelB: 'I' | 'N' | 'F' | 'P'
}

export interface MBTIInfo {
  type: MBTIType
  nickname: string
  emoji: string
  color: string
  description: string
  traits: string[]
  jobs: { emoji: string; title: string; reason: string }[]
  bestMatch: MBTIType
  worstMatch: MBTIType
  bestReason: string
  worstReason: string
}

export const questions: Question[] = [
  // ── E / I ──────────────────────────────────────
  {
    id: 1,
    text: '금요일 저녁, 친구한테 갑자기 연락이 왔다.\n"야 지금 홍대 나와!" 나는?',
    dimension: 'EI',
    choiceA: '"ㅇㅇ 가고 있음" 바로 나간다',
    choiceB: '"아 오늘은 좀.. 다음에 보자" 거절한다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 2,
    text: '아는 사람이 한 명도 없는 파티에 혼자 도착했다. 나는?',
    dimension: 'EI',
    choiceA: '자연스럽게 아무한테나 말 걸며 친해진다',
    choiceB: '아는 사람을 찾거나 구석에서 음료를 홀짝인다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 3,
    text: '오랜만에 생긴 5일 연휴! 이상적인 계획은?',
    dimension: 'EI',
    choiceA: '친구들이랑 여행·모임·액티비티로 꽉 채운다',
    choiceB: '아무 계획 없이 집에서 혼자 드라마나 보며 쉰다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 4,
    text: '단체 프로젝트 첫 아이디어 회의. 나는?',
    dimension: 'EI',
    choiceA: '먼저 말을 꺼내고 토론을 이끈다',
    choiceB: '다들 얘기 듣다가 정리가 되면 의견을 낸다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 5,
    text: '오늘 하루가 너무 지치고 힘들었다. 기분 전환법은?',
    dimension: 'EI',
    choiceA: '친구한테 연락해서 수다를 떤다',
    choiceB: '혼자 음악 듣거나 유튜브 보며 조용히 쉰다',
    labelA: 'E', labelB: 'I',
  },
  // ── S / N ──────────────────────────────────────
  {
    id: 6,
    text: '처음 가는 카페에서 메뉴를 고른다. 나는?',
    dimension: 'SN',
    choiceA: '리뷰에 많이 나온 대표 메뉴를 시킨다',
    choiceB: '메뉴판 훑다가 가장 독특해 보이는 걸 시킨다',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 7,
    text: '"10년 뒤에 어떻게 살고 싶어?" 질문을 받았다. 나의 대답은?',
    dimension: 'SN',
    choiceA: '직업, 집, 연봉 같은 구체적인 그림을 말한다',
    choiceB: '어떤 사람이 되고 싶은지, 어떤 삶의 방식인지를 말한다',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 8,
    text: '새 스마트폰을 산다. 나의 선택 기준은?',
    dimension: 'SN',
    choiceA: '실제 사용 후기, 배터리·카메라 스펙 등 검증된 성능',
    choiceB: '브랜드 철학, 디자인 감성, 미래 지향적 기능',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 9,
    text: '길을 걷다가 길을 잃었다. 나는?',
    dimension: 'SN',
    choiceA: '바로 지도 앱 켜서 정확한 경로를 확인한다',
    choiceB: '대충 방향 감각으로 걷다 보면 나오겠지 한다',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 10,
    text: '친구한테 영화 추천을 해야 한다. 나는?',
    dimension: 'SN',
    choiceA: '"장르는 스릴러고 러닝타임은 2시간, 평점 8점대야" 정보 위주로 말한다',
    choiceB: '"그냥 봐봐, 분위기가 진짜 묘한데 설명하기 어려워" 감으로 말한다',
    labelA: 'S', labelB: 'N',
  },
  // ── T / F ──────────────────────────────────────
  {
    id: 11,
    text: '친한 친구가 새 연인 자랑을 한다.\n그런데 대화 중 위험 신호가 보인다. 나는?',
    dimension: 'TF',
    choiceA: '"야 그 사람 좀 이상한 것 같은데?" 솔직하게 바로 말한다',
    choiceB: '일단 같이 기뻐해주고, 걱정은 나중에 조심스럽게 전한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 12,
    text: '팀 회의에서 내 의견과 정반대인 결정이 났다. 나는?',
    dimension: 'TF',
    choiceA: '"제 생각엔 이 방향이 더 효율적입니다" 논리적으로 반박한다',
    choiceB: '분위기를 보며 일단 따르거나, 나중에 따로 얘기한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 13,
    text: '절친이 "나 요즘 너무 힘들어"라고 카톡을 보냈다.\n나의 첫 반응은?',
    dimension: 'TF',
    choiceA: '무슨 문제인지 파악하고 해결책을 찾아준다',
    choiceB: '"무슨 일이야, 나 여기 있어" 먼저 공감부터 한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 14,
    text: '소개팅 후기를 물어보는 친구에게 나는?',
    dimension: 'TF',
    choiceA: '"조건은 괜찮은데 대화가 좀 안 맞았어" 분석적으로 말한다',
    choiceB: '"느낌이 좀 아니었어, 설명하기 어렵지만.." 감으로 말한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 15,
    text: '내가 공들여 만든 결과물에 친구가 "솔직히 좀 아쉽다"고 했다. 나는?',
    dimension: 'TF',
    choiceA: '"어떤 부분이?" 구체적인 피드백을 물어본다',
    choiceB: '솔직히 좀 상처받고, 왜 그렇게 말했는지 생각한다',
    labelA: 'T', labelB: 'F',
  },
  // ── J / P ──────────────────────────────────────
  {
    id: 16,
    text: '내일 친구들이랑 여행을 간다. 전날 밤 나는?',
    dimension: 'JP',
    choiceA: '짐 체크리스트 만들고 모두 챙겼는지 확인한다',
    choiceB: '"필요하면 거기서 사지 뭐" 하고 대충 던져 넣는다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 17,
    text: '카페에서 오늘 할 일을 처리해야 한다. 나는?',
    dimension: 'JP',
    choiceA: '뭘 얼마나 끝낼지 정하고 순서대로 시작한다',
    choiceB: '일단 커피 주문하고 되는 만큼 하다 보면 되겠지',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 18,
    text: '계획에 없던 일이 생겨서 오늘 일정이 통째로 바뀌었다. 나는?',
    dimension: 'JP',
    choiceA: '당황스럽고 하루가 망한 기분이다',
    choiceB: '오히려 신선하고 뭔가 재미있을 것 같다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 19,
    text: '갑자기 생긴 빈 하루. 나는?',
    dimension: 'JP',
    choiceA: '못 했던 일들을 처리하는 생산적인 하루로 만든다',
    choiceB: '아무 계획 없이 그냥 흘러가는 대로 보낸다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 20,
    text: '친구와 약속 장소에 나는 주로?',
    dimension: 'JP',
    choiceA: '5~10분 전에 미리 도착해서 기다린다',
    choiceB: '딱 맞춰 오거나 살짝 늦을 때도 있다',
    labelA: 'J', labelB: 'P',
  },
]

export const mbtiInfo: Record<MBTIType, MBTIInfo> = {
  INTJ: {
    type: 'INTJ', nickname: '전략가', emoji: '🧠', color: '#6366f1',
    description: '독립적이고 결단력 있는 완벽주의자. 복잡한 문제를 꿰뚫어 보는 통찰력이 탁월하며, 목표를 향해 묵묵히 나아갑니다.',
    traits: ['전략적 사고', '독립적', '완벽주의', '통찰력'],
    jobs: [
      { emoji: '💻', title: '소프트웨어 아키텍트', reason: '복잡한 시스템을 설계하는 전략적 사고에 최적화' },
      { emoji: '🔬', title: '과학자 / 연구원', reason: '가설을 세우고 깊이 파고드는 집중력이 빛남' },
      { emoji: '📊', title: '투자 전략가', reason: '장기적 패턴 분석과 냉철한 판단력이 강점' },
    ],
    bestMatch: 'ENFP',
    worstMatch: 'ESFP',
    bestReason: 'ENFP의 열정과 창의성이 INTJ의 논리적 비전을 현실로 만들어줍니다. 서로 부족한 부분을 완벽하게 채워주는 황금 궁합!',
    worstReason: 'ESFP의 즉흥적이고 감각적인 스타일이 INTJ의 체계적인 계획과 자주 충돌합니다.',
  },
  INTP: {
    type: 'INTP', nickname: '논리술사', emoji: '💡', color: '#8b5cf6',
    description: '지식에 끝없는 갈증을 느끼는 혁신적 사고자. 복잡한 이론을 탐구하고 새로운 아이디어를 발견하는 것을 즐깁니다.',
    traits: ['논리적', '분석적', '창의적', '독창적'],
    jobs: [
      { emoji: '🤖', title: 'AI / ML 엔지니어', reason: '이론과 알고리즘을 끝없이 탐구하는 성향에 딱 맞음' },
      { emoji: '🎮', title: '게임 개발자', reason: '복잡한 시스템을 설계하며 창의성을 마음껏 발휘' },
      { emoji: '📐', title: '수학자 / 이론 물리학자', reason: '순수한 지적 탐구를 직업으로 삼을 수 있는 최적의 분야' },
    ],
    bestMatch: 'ENTJ',
    worstMatch: 'ESFJ',
    bestReason: 'ENTJ의 실행력이 INTP의 천재적 아이디어를 현실화합니다. 지적 대화가 끝없이 이어지는 최강 콤비!',
    worstReason: 'ESFJ의 감정 중심적이고 전통적인 가치관이 INTP의 논리적 자유로움과 자주 부딪힙니다.',
  },
  ENTJ: {
    type: 'ENTJ', nickname: '통솔자', emoji: '👑', color: '#ef4444',
    description: '강한 카리스마와 추진력을 가진 타고난 리더. 비효율을 참지 못하고 더 나은 방향으로 이끌어가는 능력이 있습니다.',
    traits: ['리더십', '결단력', '카리스마', '효율적'],
    jobs: [
      { emoji: '🏢', title: 'CEO / 창업가', reason: '조직을 이끌고 목표를 향해 달리는 타고난 사령관' },
      { emoji: '⚖️', title: '변호사 / 검사', reason: '논리와 설득으로 상대를 압도하는 능력이 빛남' },
      { emoji: '📈', title: '경영 컨설턴트', reason: '문제를 진단하고 효율적 해결책을 제시하는 것이 천직' },
    ],
    bestMatch: 'INTP',
    worstMatch: 'ISFP',
    bestReason: 'INTP의 깊은 분석력과 ENTJ의 실행력이 만나면 어떤 목표도 달성할 수 있습니다. 서로에게 최고의 파트너!',
    worstReason: 'ISFP의 자유롭고 감성적인 스타일이 ENTJ의 빠른 추진력과 충돌하며 서로 답답함을 느낍니다.',
  },
  ENTP: {
    type: 'ENTP', nickname: '변론가', emoji: '⚡', color: '#f59e0b',
    description: '아이디어와 도전을 즐기는 영리한 토론자. 기존의 틀을 깨고 새로운 가능성을 탐색하는 것을 즐깁니다.',
    traits: ['독창적', '토론 좋아함', '호기심', '도전적'],
    jobs: [
      { emoji: '🚀', title: '스타트업 창업가', reason: '기존 틀을 깨는 아이디어와 도전 정신이 폭발하는 무대' },
      { emoji: '🎙️', title: '방송인 / 크리에이터', reason: '재치 있는 입담과 독창적 콘텐츠로 대중을 사로잡음' },
      { emoji: '🧪', title: '제품 기획자 (PM)', reason: '다양한 가능성을 연결해 새로운 제품을 만드는 것이 즐거움' },
    ],
    bestMatch: 'INFJ',
    worstMatch: 'ISFJ',
    bestReason: 'INFJ의 깊은 통찰과 ENTP의 폭발적인 아이디어가 만나 서로를 완성시켜 줍니다. 지적 케미 최강!',
    worstReason: 'ISFJ의 안정과 규칙을 중시하는 성향이 ENTP의 변화와 도전 추구와 계속 마찰을 일으킵니다.',
  },
  INFJ: {
    type: 'INFJ', nickname: '옹호자', emoji: '🌙', color: '#7c3aed',
    description: '조용하지만 강한 신념을 가진 이상주의자. 사람들을 깊이 이해하고 더 나은 세상을 꿈꾸는 희귀한 유형입니다.',
    traits: ['통찰력', '이상주의', '공감능력', '신중함'],
    jobs: [
      { emoji: '🧘', title: '심리상담사', reason: '사람의 내면을 꿰뚫어 보는 통찰력이 최대 강점' },
      { emoji: '✍️', title: '작가 / 시나리오 작가', reason: '깊은 감수성과 인간에 대한 이해가 뛰어난 이야기를 만들어냄' },
      { emoji: '🌍', title: 'NGO / 사회운동가', reason: '세상을 더 나은 곳으로 만들겠다는 신념이 직업이 됨' },
    ],
    bestMatch: 'ENTP',
    worstMatch: 'ESTP',
    bestReason: 'ENTP의 넘치는 에너지와 아이디어가 INFJ의 깊은 이상을 현실로 연결해 줍니다. 서로에게 영감이 되는 관계!',
    worstReason: 'ESTP의 충동적이고 즉흥적인 행동 방식이 INFJ의 깊은 신념과 계획을 흔들어 불안하게 만듭니다.',
  },
  INFP: {
    type: 'INFP', nickname: '중재자', emoji: '🌸', color: '#ec4899',
    description: '풍부한 감수성과 이상을 가진 시적인 영혼. 자신만의 가치관에 따라 조용하지만 강하게 살아갑니다.',
    traits: ['감수성', '이상주의', '창의적', '공감능력'],
    jobs: [
      { emoji: '🎨', title: '일러스트레이터 / 아티스트', reason: '내면의 감성을 시각적으로 표현하는 것이 천직' },
      { emoji: '📚', title: '소설가 / 시인', reason: '섬세한 감수성이 독자의 마음을 울리는 글을 만들어냄' },
      { emoji: '🎬', title: '영화감독 / 스토리텔러', reason: '자신만의 세계관을 이야기로 펼치는 창작 작업에 몰입' },
    ],
    bestMatch: 'ENFJ',
    worstMatch: 'ESTJ',
    bestReason: 'ENFJ의 따뜻한 리더십이 INFP의 깊은 감성을 세상과 연결해 줍니다. 서로의 가장 든든한 지원군!',
    worstReason: 'ESTJ의 규칙과 효율 중심적인 태도가 INFP의 감성적이고 자유로운 영혼을 답답하게 만듭니다.',
  },
  ENFJ: {
    type: 'ENFJ', nickname: '선도자', emoji: '✨', color: '#10b981',
    description: '타인에게 영감을 주는 카리스마 넘치는 리더. 사람들의 잠재력을 알아보고 성장할 수 있도록 돕습니다.',
    traits: ['카리스마', '공감능력', '리더십', '헌신적'],
    jobs: [
      { emoji: '🎤', title: '강연가 / 코치', reason: '사람들에게 영감을 주고 변화를 이끄는 것이 본능' },
      { emoji: '🏫', title: '교사 / 교수', reason: '학생의 잠재력을 발견하고 성장시키는 데 큰 보람을 느낌' },
      { emoji: '📣', title: 'PR / 브랜드 마케터', reason: '공감을 이끌어내는 메시지로 사람들의 마음을 움직임' },
    ],
    bestMatch: 'INFP',
    worstMatch: 'ISTP',
    bestReason: 'INFP의 순수한 감성과 ENFJ의 따뜻한 에너지가 만나 서로를 깊이 이해하는 최고의 커플!',
    worstReason: 'ISTP의 감정 표현이 적고 독립적인 성향이 ENFJ의 깊은 연결을 원하는 욕구와 충돌합니다.',
  },
  ENFP: {
    type: 'ENFP', nickname: '활동가', emoji: '🎉', color: '#f97316',
    description: '열정과 창의력이 넘치는 자유로운 영혼. 어디서든 새로운 가능성을 발견하고 사람들에게 영감을 줍니다.',
    traits: ['열정적', '창의적', '자유로운', '사교적'],
    jobs: [
      { emoji: '📱', title: 'SNS 크리에이터 / 인플루언서', reason: '넘치는 에너지와 개성으로 팬들을 끌어모으는 타입' },
      { emoji: '🎭', title: '배우 / 엔터테이너', reason: '다양한 캐릭터를 소화하며 무대 위에서 빛을 발함' },
      { emoji: '💡', title: '광고 크리에이티브 디렉터', reason: '참신한 아이디어와 사람을 끌어당기는 감각이 폭발' },
    ],
    bestMatch: 'INTJ',
    worstMatch: 'ISTJ',
    bestReason: 'INTJ의 깊은 전략과 ENFP의 넘치는 창의성이 만나면 세상을 바꿀 수 있습니다. 극과 극의 황금 매칭!',
    worstReason: 'ISTJ의 철저한 계획과 규칙 중심적인 생활 방식이 ENFP의 자유분방함을 억압하는 느낌을 줍니다.',
  },
  ISTJ: {
    type: 'ISTJ', nickname: '현실주의자', emoji: '📋', color: '#0ea5e9',
    description: '책임감과 신뢰를 중시하는 꼼꼼한 관리자. 한 번 맡은 일은 끝까지 완수하는 강한 의지를 가졌습니다.',
    traits: ['책임감', '신뢰성', '꼼꼼함', '체계적'],
    jobs: [
      { emoji: '🏦', title: '회계사 / 세무사', reason: '정확성과 꼼꼼함이 생명인 분야에서 최고의 신뢰를 받음' },
      { emoji: '👮', title: '공무원 / 경찰', reason: '규칙을 지키며 사회의 안정을 유지하는 역할에 소명감을 느낌' },
      { emoji: '🔍', title: '감사 / 법무팀', reason: '원칙을 철저히 지키며 조직을 지키는 수호자 역할' },
    ],
    bestMatch: 'ESFP',
    worstMatch: 'ENFP',
    bestReason: 'ESFP의 밝은 에너지가 ISTJ의 진지함에 활기를 불어넣고, ISTJ의 안정감이 ESFP의 든든한 버팀목이 됩니다!',
    worstReason: 'ENFP의 즉흥적이고 자유로운 스타일이 ISTJ의 철저한 계획과 질서 의식과 계속 부딪힙니다.',
  },
  ISFJ: {
    type: 'ISFJ', nickname: '수호자', emoji: '🛡️', color: '#06b6d4',
    description: '헌신적이고 따뜻한 보호자. 주변 사람들을 세심하게 배려하며 조용히 최선을 다하는 숨은 영웅입니다.',
    traits: ['헌신적', '배려심', '신중함', '책임감'],
    jobs: [
      { emoji: '👩‍⚕️', title: '간호사 / 의사', reason: '환자를 세심하게 돌보는 헌신적인 배려가 빛을 발함' },
      { emoji: '👨‍🏫', title: '초등학교 교사', reason: '아이들을 따뜻하게 보살피며 성장을 지원하는 것에 보람' },
      { emoji: '🏠', title: '사회복지사', reason: '도움이 필요한 사람들을 묵묵히 돕는 것이 삶의 의미' },
    ],
    bestMatch: 'ESTP',
    worstMatch: 'ENTP',
    bestReason: 'ESTP의 활발한 에너지가 ISFJ에게 새로운 경험을 선물하고, ISFJ의 따뜻함이 ESTP의 든든한 안식처가 됩니다!',
    worstReason: 'ENTP의 논쟁을 즐기는 성향과 충동적인 변화 추구가 안정을 원하는 ISFJ를 지치게 만듭니다.',
  },
  ESTJ: {
    type: 'ESTJ', nickname: '경영자', emoji: '💼', color: '#64748b',
    description: '전통과 질서를 중시하는 실용적인 관리자. 명확한 규칙과 구조 안에서 최고의 결과를 만들어냅니다.',
    traits: ['조직력', '실용적', '리더십', '결단력'],
    jobs: [
      { emoji: '🏗️', title: '프로젝트 매니저', reason: '일정·인원·예산을 철저히 관리하는 타고난 운영자' },
      { emoji: '🏛️', title: '판사 / 행정 공무원', reason: '규칙과 질서를 바탕으로 공정하게 판단하는 역할에 적합' },
      { emoji: '🏦', title: '은행 지점장 / 금융 관리자', reason: '조직을 안정적으로 이끄는 리더십이 인정받는 자리' },
    ],
    bestMatch: 'ISFP',
    worstMatch: 'INFP',
    bestReason: 'ISFP의 유연하고 감성적인 면이 ESTJ의 딱딱한 외면을 부드럽게 만들어줍니다. 의외의 찰떡 궁합!',
    worstReason: 'INFP의 이상주의적이고 감성적인 가치관이 ESTJ의 현실적이고 규칙적인 세계관과 자주 충돌합니다.',
  },
  ESFJ: {
    type: 'ESFJ', nickname: '집정관', emoji: '🤝', color: '#84cc16',
    description: '배려심 깊고 사교적인 협력자. 사람들과의 조화를 중시하며 주변을 따뜻하게 만드는 능력이 있습니다.',
    traits: ['사교적', '배려심', '협력적', '친화력'],
    jobs: [
      { emoji: '🎪', title: '이벤트 플래너', reason: '사람들을 행복하게 만드는 자리를 기획하는 것에 에너지 충전' },
      { emoji: '💊', title: '약사 / 영양사', reason: '사람들의 건강을 꼼꼼히 챙기는 따뜻한 전문가' },
      { emoji: '🛎️', title: '호텔 매니저 / 서비스 디렉터', reason: '모든 이를 편안하게 만드는 탁월한 호스피탈리티 본능' },
    ],
    bestMatch: 'ISTP',
    worstMatch: 'INTP',
    bestReason: 'ISTP의 실용적인 문제 해결 능력과 ESFJ의 따뜻한 사람 관리 능력이 완벽하게 맞물립니다!',
    worstReason: 'INTP의 감정보다 논리를 우선시하는 태도와 사회적 규범을 무시하는 경향이 ESFJ를 상처받게 합니다.',
  },
  ISTP: {
    type: 'ISTP', nickname: '만능재주꾼', emoji: '🔧', color: '#78716c',
    description: '대담하고 실용적인 문제 해결사. 원리를 파악하고 손으로 직접 해결하는 것을 즐기는 조용한 전문가입니다.',
    traits: ['분석적', '실용적', '독립적', '관찰력'],
    jobs: [
      { emoji: '🚒', title: '소방관 / 응급 구조사', reason: '위기 상황에서 냉정하게 판단하고 즉각 행동하는 능력이 탁월' },
      { emoji: '✈️', title: '파일럿 / 항공 엔지니어', reason: '기계를 다루는 손재주와 침착한 대응력이 필수인 직종' },
      { emoji: '🔩', title: '기계 / 전기 엔지니어', reason: '구조를 파악하고 실용적으로 고치는 것이 즐거운 직업' },
    ],
    bestMatch: 'ESFJ',
    worstMatch: 'ENFJ',
    bestReason: 'ESFJ의 따뜻한 사교성이 ISTP의 차가운 외면을 녹이고, ISTP의 실용적 능력이 ESFJ의 완벽한 파트너가 됩니다!',
    worstReason: 'ENFJ의 감정적 연결과 헌신을 요구하는 성향이 자유를 중시하는 ISTP에게 큰 부담이 됩니다.',
  },
  ISFP: {
    type: 'ISFP', nickname: '모험가', emoji: '🎨', color: '#f472b6',
    description: '유연하고 감성적인 예술가적 영혼. 현재 순간을 즐기며 자신만의 방식으로 세상을 아름답게 표현합니다.',
    traits: ['감성적', '유연함', '예술적', '자유로운'],
    jobs: [
      { emoji: '📸', title: '사진작가 / 영상 감독', reason: '순간의 아름다움을 포착하는 감각이 남다름' },
      { emoji: '👗', title: '패션 디자이너', reason: '감성과 미적 감각으로 자신만의 스타일을 세상에 표현' },
      { emoji: '🍽️', title: '셰프 / 푸드 스타일리스트', reason: '오감으로 세상을 즐기고 표현하는 창작 직업에 최적화' },
    ],
    bestMatch: 'ESTJ',
    worstMatch: 'ENTJ',
    bestReason: 'ESTJ의 안정적인 구조가 ISFP의 자유로운 창의성을 꽃피울 수 있는 환경을 만들어줍니다. 의외의 명콤비!',
    worstReason: 'ENTJ의 지나친 추진력과 통제 성향이 자유를 사랑하는 ISFP를 압도하고 억압하는 느낌을 줍니다.',
  },
  ESTP: {
    type: 'ESTP', nickname: '사업가', emoji: '🚀', color: '#ef4444',
    description: '에너지 넘치는 현실적인 모험가. 즉각적인 행동과 실용적인 해결책을 좋아하며 어디서든 존재감을 발휘합니다.',
    traits: ['행동력', '실용적', '대담함', '사교적'],
    jobs: [
      { emoji: '💰', title: '영업 / 세일즈 디렉터', reason: '순발력과 설득력으로 어떤 상황에서도 딜을 성사시킴' },
      { emoji: '🎰', title: '트레이더 / 펀드매니저', reason: '빠른 판단과 리스크를 즐기는 기질이 금융 시장에서 빛남' },
      { emoji: '🏋️', title: '스포츠 선수 / 퍼스널 트레이너', reason: '몸을 쓰고 즉각적 피드백을 받는 환경에서 최고 성과 발휘' },
    ],
    bestMatch: 'ISFJ',
    worstMatch: 'INFJ',
    bestReason: 'ISFJ의 따뜻한 배려가 ESTP의 거친 에너지를 감싸주고, ESTP의 활력이 ISFJ의 일상을 즐겁게 만듭니다!',
    worstReason: 'INFJ의 깊은 내면과 신중한 이상주의가 즉흥적이고 현실 중심적인 ESTP와 근본적으로 다릅니다.',
  },
  ESFP: {
    type: 'ESFP', nickname: '연예인', emoji: '🌟', color: '#fbbf24',
    description: '자발적이고 에너지 넘치는 삶의 즐거움을 아는 사람. 어디서든 분위기를 밝히고 모두를 웃게 만드는 재주가 있습니다.',
    traits: ['활발함', '긍정적', '즉흥적', '친화력'],
    jobs: [
      { emoji: '🎤', title: '가수 / 아이돌', reason: '무대 위에서 빛나는 에너지와 사람을 끌어당기는 매력이 폭발' },
      { emoji: '🎬', title: '유튜버 / 방송 MC', reason: '카메라 앞에서 자연스럽게 빛나는 타고난 엔터테이너' },
      { emoji: '✈️', title: '여행 크리에이터 / 관광 가이드', reason: '세상을 돌아다니며 즐거운 경험을 나누는 것이 천직' },
    ],
    bestMatch: 'ISTJ',
    worstMatch: 'INTJ',
    bestReason: 'ISTJ의 든든한 안정감이 ESFP의 넘치는 에너지를 지탱해주고, ESFP의 밝음이 ISTJ의 일상에 활기를 줍니다!',
    worstReason: 'INTJ의 내향적이고 체계적인 세계관이 자유롭고 즉흥적인 ESFP와 끊임없이 마찰을 일으킵니다.',
  },
}
