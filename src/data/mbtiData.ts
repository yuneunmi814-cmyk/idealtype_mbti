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
  bestMatch: MBTIType
  worstMatch: MBTIType
  bestReason: string
  worstReason: string
}

export const questions: Question[] = [
  // E / I
  {
    id: 1,
    text: '주말 계획으로 더 끌리는 것은?',
    dimension: 'EI',
    choiceA: '친구들과 신나는 파티 또는 모임',
    choiceB: '집에서 혼자 느긋하게 쉬기',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 2,
    text: '새로운 사람을 처음 만났을 때 나는?',
    dimension: 'EI',
    choiceA: '먼저 말을 걸고 적극적으로 대화한다',
    choiceB: '상대가 먼저 다가올 때까지 기다린다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 3,
    text: '하루 종일 사람들과 함께 있으면?',
    dimension: 'EI',
    choiceA: '에너지가 더 넘치고 기분이 좋다',
    choiceB: '피곤하고 혼자만의 시간이 필요하다',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 4,
    text: '나는 주로 어디서 생각이 잘 정리되나?',
    dimension: 'EI',
    choiceA: '말하면서 / 다른 사람과 대화하면서',
    choiceB: '혼자 조용히 생각하면서',
    labelA: 'E', labelB: 'I',
  },
  {
    id: 5,
    text: '모임에서 내 모습은?',
    dimension: 'EI',
    choiceA: '여기저기 돌아다니며 여러 사람과 이야기한다',
    choiceB: '친한 사람 몇 명과 깊은 대화를 나눈다',
    labelA: 'E', labelB: 'I',
  },
  // S / N
  {
    id: 6,
    text: '새로운 프로젝트를 시작할 때 나는?',
    dimension: 'SN',
    choiceA: '구체적인 계획과 단계별 절차를 먼저 세운다',
    choiceB: '큰 그림과 가능성부터 상상한다',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 7,
    text: '대화할 때 더 편한 주제는?',
    dimension: 'SN',
    choiceA: '현실적인 일상 이야기, 실용적인 정보',
    choiceB: '미래 계획, 아이디어, 상상력 이야기',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 8,
    text: '무언가를 배울 때 선호하는 방식은?',
    dimension: 'SN',
    choiceA: '실습과 경험을 통해 직접 익힌다',
    choiceB: '개념과 이론을 먼저 이해한 후 적용한다',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 9,
    text: '나는 주로 어떤 사람으로 불리나?',
    dimension: 'SN',
    choiceA: '현실적이고 꼼꼼한 사람',
    choiceB: '창의적이고 상상력 넘치는 사람',
    labelA: 'S', labelB: 'N',
  },
  {
    id: 10,
    text: '미래에 대해 생각할 때 나는?',
    dimension: 'SN',
    choiceA: '현재 상황에서 현실적으로 예측한다',
    choiceB: '다양한 가능성과 시나리오를 상상한다',
    labelA: 'S', labelB: 'N',
  },
  // T / F
  {
    id: 11,
    text: '친구가 고민을 털어놓을 때 나는?',
    dimension: 'TF',
    choiceA: '문제의 원인을 분석하고 해결책을 제시한다',
    choiceB: '먼저 공감하고 감정을 받아준다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 12,
    text: '중요한 결정을 내릴 때 나는?',
    dimension: 'TF',
    choiceA: '논리와 객관적인 데이터를 중심으로 판단한다',
    choiceB: '나와 주변 사람들의 감정과 가치관을 고려한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 13,
    text: '누군가 잘못된 선택을 하고 있다면?',
    dimension: 'TF',
    choiceA: '불편하더라도 솔직하게 말해준다',
    choiceB: '상대방의 감정이 상하지 않게 조심스럽게 전달한다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 14,
    text: '영화를 보고 난 후 주로 하는 것은?',
    dimension: 'TF',
    choiceA: '스토리의 논리적 허점이나 개연성을 분석한다',
    choiceB: '캐릭터의 감정에 공감하며 여운을 느낀다',
    labelA: 'T', labelB: 'F',
  },
  {
    id: 15,
    text: '나를 더 잘 표현하는 것은?',
    dimension: 'TF',
    choiceA: '공정하고 논리적인 사람',
    choiceB: '따뜻하고 공감 잘 하는 사람',
    labelA: 'T', labelB: 'F',
  },
  // J / P
  {
    id: 16,
    text: '여행을 갈 때 나는?',
    dimension: 'JP',
    choiceA: '일정, 숙소, 맛집을 미리 꼼꼼히 계획한다',
    choiceB: '대략적인 방향만 정하고 즉흥적으로 움직인다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 17,
    text: '마감이 있는 일이라면?',
    dimension: 'JP',
    choiceA: '여유 있게 미리미리 끝내놓는다',
    choiceB: '마감 직전에 집중해서 한번에 처리한다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 18,
    text: '내 방/책상 상태는 보통?',
    dimension: 'JP',
    choiceA: '정리된 상태가 기본, 어질러지면 바로 치운다',
    choiceB: '나름의 규칙이 있는 창의적 카오스 상태',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 19,
    text: '하루 일과를 어떻게 보내나?',
    dimension: 'JP',
    choiceA: '할 일 목록을 만들고 하나씩 체크한다',
    choiceB: '그때그때 기분과 상황에 따라 움직인다',
    labelA: 'J', labelB: 'P',
  },
  {
    id: 20,
    text: '예상치 못한 변수가 생겼을 때?',
    dimension: 'JP',
    choiceA: '당황스럽고 계획이 틀어지는 게 싫다',
    choiceB: '오히려 신선하고 재미있게 느껴진다',
    labelA: 'J', labelB: 'P',
  },
]

export const mbtiInfo: Record<MBTIType, MBTIInfo> = {
  INTJ: {
    type: 'INTJ', nickname: '전략가', emoji: '🧠', color: '#6366f1',
    description: '독립적이고 결단력 있는 완벽주의자. 복잡한 문제를 꿰뚫어 보는 통찰력이 탁월하며, 목표를 향해 묵묵히 나아갑니다.',
    traits: ['전략적 사고', '독립적', '완벽주의', '통찰력'],
    bestMatch: 'ENFP',
    worstMatch: 'ESFP',
    bestReason: 'ENFP의 열정과 창의성이 INTJ의 논리적 비전을 현실로 만들어줍니다. 서로 부족한 부분을 완벽하게 채워주는 황금 궁합!',
    worstReason: 'ESFP의 즉흥적이고 감각적인 스타일이 INTJ의 체계적인 계획과 자주 충돌합니다.',
  },
  INTP: {
    type: 'INTP', nickname: '논리술사', emoji: '💡', color: '#8b5cf6',
    description: '지식에 끝없는 갈증을 느끼는 혁신적 사고자. 복잡한 이론을 탐구하고 새로운 아이디어를 발견하는 것을 즐깁니다.',
    traits: ['논리적', '분석적', '창의적', '독창적'],
    bestMatch: 'ENTJ',
    worstMatch: 'ESFJ',
    bestReason: 'ENTJ의 실행력이 INTP의 천재적 아이디어를 현실화합니다. 지적 대화가 끝없이 이어지는 최강 콤비!',
    worstReason: 'ESFJ의 감정 중심적이고 전통적인 가치관이 INTP의 논리적 자유로움과 자주 부딪힙니다.',
  },
  ENTJ: {
    type: 'ENTJ', nickname: '통솔자', emoji: '👑', color: '#ef4444',
    description: '강한 카리스마와 추진력을 가진 타고난 리더. 비효율을 참지 못하고 더 나은 방향으로 이끌어가는 능력이 있습니다.',
    traits: ['리더십', '결단력', '카리스마', '효율적'],
    bestMatch: 'INTP',
    worstMatch: 'ISFP',
    bestReason: 'INTP의 깊은 분석력과 ENTJ의 실행력이 만나면 어떤 목표도 달성할 수 있습니다. 서로에게 최고의 파트너!',
    worstReason: 'ISFP의 자유롭고 감성적인 스타일이 ENTJ의 빠른 추진력과 충돌하며 서로 답답함을 느낍니다.',
  },
  ENTP: {
    type: 'ENTP', nickname: '변론가', emoji: '⚡', color: '#f59e0b',
    description: '아이디어와 도전을 즐기는 영리한 토론자. 기존의 틀을 깨고 새로운 가능성을 탐색하는 것을 즐깁니다.',
    traits: ['독창적', '토론 좋아함', '호기심', '도전적'],
    bestMatch: 'INFJ',
    worstMatch: 'ISFJ',
    bestReason: 'INFJ의 깊은 통찰과 ENTP의 폭발적인 아이디어가 만나 서로를 완성시켜 줍니다. 지적 케미 최강!',
    worstReason: 'ISFJ의 안정과 규칙을 중시하는 성향이 ENTP의 변화와 도전 추구와 계속 마찰을 일으킵니다.',
  },
  INFJ: {
    type: 'INFJ', nickname: '옹호자', emoji: '🌙', color: '#7c3aed',
    description: '조용하지만 강한 신념을 가진 이상주의자. 사람들을 깊이 이해하고 더 나은 세상을 꿈꾸는 희귀한 유형입니다.',
    traits: ['통찰력', '이상주의', '공감능력', '신중함'],
    bestMatch: 'ENTP',
    worstMatch: 'ESTP',
    bestReason: 'ENTP의 넘치는 에너지와 아이디어가 INFJ의 깊은 이상을 현실로 연결해 줍니다. 서로에게 영감이 되는 관계!',
    worstReason: 'ESTP의 충동적이고 즉흥적인 행동 방식이 INFJ의 깊은 신념과 계획을 흔들어 불안하게 만듭니다.',
  },
  INFP: {
    type: 'INFP', nickname: '중재자', emoji: '🌸', color: '#ec4899',
    description: '풍부한 감수성과 이상을 가진 시적인 영혼. 자신만의 가치관에 따라 조용하지만 강하게 살아갑니다.',
    traits: ['감수성', '이상주의', '창의적', '공감능력'],
    bestMatch: 'ENFJ',
    worstMatch: 'ESTJ',
    bestReason: 'ENFJ의 따뜻한 리더십이 INFP의 깊은 감성을 세상과 연결해 줍니다. 서로의 가장 든든한 지원군!',
    worstReason: 'ESTJ의 규칙과 효율 중심적인 태도가 INFP의 감성적이고 자유로운 영혼을 답답하게 만듭니다.',
  },
  ENFJ: {
    type: 'ENFJ', nickname: '선도자', emoji: '✨', color: '#10b981',
    description: '타인에게 영감을 주는 카리스마 넘치는 리더. 사람들의 잠재력을 알아보고 성장할 수 있도록 돕습니다.',
    traits: ['카리스마', '공감능력', '리더십', '헌신적'],
    bestMatch: 'INFP',
    worstMatch: 'ISTP',
    bestReason: 'INFP의 순수한 감성과 ENFJ의 따뜻한 에너지가 만나 서로를 깊이 이해하는 최고의 커플!',
    worstReason: 'ISTP의 감정 표현이 적고 독립적인 성향이 ENFJ의 깊은 연결을 원하는 욕구와 충돌합니다.',
  },
  ENFP: {
    type: 'ENFP', nickname: '활동가', emoji: '🎉', color: '#f97316',
    description: '열정과 창의력이 넘치는 자유로운 영혼. 어디서든 새로운 가능성을 발견하고 사람들에게 영감을 줍니다.',
    traits: ['열정적', '창의적', '자유로운', '사교적'],
    bestMatch: 'INTJ',
    worstMatch: 'ISTJ',
    bestReason: 'INTJ의 깊은 전략과 ENFP의 넘치는 창의성이 만나면 세상을 바꿀 수 있습니다. 극과 극의 황금 매칭!',
    worstReason: 'ISTJ의 철저한 계획과 규칙 중심적인 생활 방식이 ENFP의 자유분방함을 억압하는 느낌을 줍니다.',
  },
  ISTJ: {
    type: 'ISTJ', nickname: '현실주의자', emoji: '📋', color: '#0ea5e9',
    description: '책임감과 신뢰를 중시하는 꼼꼼한 관리자. 한 번 맡은 일은 끝까지 완수하는 강한 의지를 가졌습니다.',
    traits: ['책임감', '신뢰성', '꼼꼼함', '체계적'],
    bestMatch: 'ESFP',
    worstMatch: 'ENFP',
    bestReason: 'ESFP의 밝은 에너지가 ISTJ의 진지함에 활기를 불어넣고, ISTJ의 안정감이 ESFP의 든든한 버팀목이 됩니다!',
    worstReason: 'ENFP의 즉흥적이고 자유로운 스타일이 ISTJ의 철저한 계획과 질서 의식과 계속 부딪힙니다.',
  },
  ISFJ: {
    type: 'ISFJ', nickname: '수호자', emoji: '🛡️', color: '#06b6d4',
    description: '헌신적이고 따뜻한 보호자. 주변 사람들을 세심하게 배려하며 조용히 최선을 다하는 숨은 영웅입니다.',
    traits: ['헌신적', '배려심', '신중함', '책임감'],
    bestMatch: 'ESTP',
    worstMatch: 'ENTP',
    bestReason: 'ESTP의 활발한 에너지가 ISFJ에게 새로운 경험을 선물하고, ISFJ의 따뜻함이 ESTP의 든든한 안식처가 됩니다!',
    worstReason: 'ENTP의 논쟁을 즐기는 성향과 충동적인 변화 추구가 안정을 원하는 ISFJ를 지치게 만듭니다.',
  },
  ESTJ: {
    type: 'ESTJ', nickname: '경영자', emoji: '💼', color: '#64748b',
    description: '전통과 질서를 중시하는 실용적인 관리자. 명확한 규칙과 구조 안에서 최고의 결과를 만들어냅니다.',
    traits: ['조직력', '실용적', '리더십', '결단력'],
    bestMatch: 'ISFP',
    worstMatch: 'INFP',
    bestReason: 'ISFP의 유연하고 감성적인 면이 ESTJ의 딱딱한 외면을 부드럽게 만들어줍니다. 의외의 찰떡 궁합!',
    worstReason: 'INFP의 이상주의적이고 감성적인 가치관이 ESTJ의 현실적이고 규칙적인 세계관과 자주 충돌합니다.',
  },
  ESFJ: {
    type: 'ESFJ', nickname: '집정관', emoji: '🤝', color: '#84cc16',
    description: '배려심 깊고 사교적인 협력자. 사람들과의 조화를 중시하며 주변을 따뜻하게 만드는 능력이 있습니다.',
    traits: ['사교적', '배려심', '협력적', '친화력'],
    bestMatch: 'ISTP',
    worstMatch: 'INTP',
    bestReason: 'ISTP의 실용적인 문제 해결 능력과 ESFJ의 따뜻한 사람 관리 능력이 완벽하게 맞물립니다!',
    worstReason: 'INTP의 감정보다 논리를 우선시하는 태도와 사회적 규범을 무시하는 경향이 ESFJ를 상처받게 합니다.',
  },
  ISTP: {
    type: 'ISTP', nickname: '만능재주꾼', emoji: '🔧', color: '#78716c',
    description: '대담하고 실용적인 문제 해결사. 원리를 파악하고 손으로 직접 해결하는 것을 즐기는 조용한 전문가입니다.',
    traits: ['분석적', '실용적', '독립적', '관찰력'],
    bestMatch: 'ESFJ',
    worstMatch: 'ENFJ',
    bestReason: 'ESFJ의 따뜻한 사교성이 ISTP의 차가운 외면을 녹이고, ISTP의 실용적 능력이 ESFJ의 완벽한 파트너가 됩니다!',
    worstReason: 'ENFJ의 감정적 연결과 헌신을 요구하는 성향이 자유를 중시하는 ISTP에게 큰 부담이 됩니다.',
  },
  ISFP: {
    type: 'ISFP', nickname: '모험가', emoji: '🎨', color: '#f472b6',
    description: '유연하고 감성적인 예술가적 영혼. 현재 순간을 즐기며 자신만의 방식으로 세상을 아름답게 표현합니다.',
    traits: ['감성적', '유연함', '예술적', '자유로운'],
    bestMatch: 'ESTJ',
    worstMatch: 'ENTJ',
    bestReason: 'ESTJ의 안정적인 구조가 ISFP의 자유로운 창의성을 꽃피울 수 있는 환경을 만들어줍니다. 의외의 명콤비!',
    worstReason: 'ENTJ의 지나친 추진력과 통제 성향이 자유를 사랑하는 ISFP를 압도하고 억압하는 느낌을 줍니다.',
  },
  ESTP: {
    type: 'ESTP', nickname: '사업가', emoji: '🚀', color: '#ef4444',
    description: '에너지 넘치는 현실적인 모험가. 즉각적인 행동과 실용적인 해결책을 좋아하며 어디서든 존재감을 발휘합니다.',
    traits: ['행동력', '실용적', '대담함', '사교적'],
    bestMatch: 'ISFJ',
    worstMatch: 'INFJ',
    bestReason: 'ISFJ의 따뜻한 배려가 ESTP의 거친 에너지를 감싸주고, ESTP의 활력이 ISFJ의 일상을 즐겁게 만듭니다!',
    worstReason: 'INFJ의 깊은 내면과 신중한 이상주의가 즉흥적이고 현실 중심적인 ESTP와 근본적으로 다릅니다.',
  },
  ESFP: {
    type: 'ESFP', nickname: '연예인', emoji: '🌟', color: '#fbbf24',
    description: '자발적이고 에너지 넘치는 삶의 즐거움을 아는 사람. 어디서든 분위기를 밝히고 모두를 웃게 만드는 재주가 있습니다.',
    traits: ['활발함', '긍정적', '즉흥적', '친화력'],
    bestMatch: 'ISTJ',
    worstMatch: 'INTJ',
    bestReason: 'ISTJ의 든든한 안정감이 ESFP의 넘치는 에너지를 지탱해주고, ESFP의 밝음이 ISTJ의 일상에 활기를 줍니다!',
    worstReason: 'INTJ의 내향적이고 체계적인 세계관이 자유롭고 즉흥적인 ESFP와 끊임없이 마찰을 일으킵니다.',
  },
}
