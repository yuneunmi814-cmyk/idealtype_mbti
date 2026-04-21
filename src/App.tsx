import { useState } from 'react'
import { questions, mbtiInfo, type MBTIType } from './data/mbtiData'
import './App.css'

type Page = 'landing' | 'quiz' | 'result'

function calculateMBTI(answers: Record<number, 'A' | 'B'>): MBTIType {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  questions.forEach((q) => {
    const answer = answers[q.id]
    if (answer === 'A') scores[q.labelA]++
    else if (answer === 'B') scores[q.labelB]++
  })
  const e = scores.E >= scores.I ? 'E' : 'I'
  const s = scores.S >= scores.N ? 'S' : 'N'
  const t = scores.T >= scores.F ? 'T' : 'F'
  const j = scores.J >= scores.P ? 'J' : 'P'
  return `${e}${s}${t}${j}` as MBTIType
}

export default function App() {
  const [page, setPage] = useState<Page>('landing')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({})
  const [result, setResult] = useState<MBTIType | null>(null)
  const [animating, setAnimating] = useState(false)

  function startQuiz() {
    setCurrent(0)
    setAnswers({})
    setResult(null)
    setPage('quiz')
  }

  function handleAnswer(choice: 'A' | 'B') {
    if (animating) return
    const q = questions[current]
    const newAnswers = { ...answers, [q.id]: choice }
    setAnswers(newAnswers)

    if (current < questions.length - 1) {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((c) => c + 1)
        setAnimating(false)
      }, 300)
    } else {
      const mbti = calculateMBTI(newAnswers)
      setResult(mbti)
      setPage('result')
    }
  }

  function restart() {
    setCurrent(0)
    setAnswers({})
    setResult(null)
    setPage('landing')
  }

  if (page === 'landing') return <Landing onStart={startQuiz} />
  if (page === 'quiz') return (
    <Quiz
      current={current}
      total={questions.length}
      question={questions[current]}
      onAnswer={handleAnswer}
      animating={animating}
    />
  )
  if (page === 'result' && result) return <Result mbti={result} onRestart={restart} />
  return null
}

function Landing({ onStart }: { onStart: () => void }) {
  const types = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP',
                  'ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP']
  return (
    <div className="landing">
      <div className="landing-bg">
        {types.map((t) => (
          <span key={t} className="floating-type">{t}</span>
        ))}
      </div>
      <div className="landing-content">
        <div className="landing-badge">MBTI 궁합 테스트</div>
        <h1 className="landing-title">
          나의 <span className="highlight">최고</span>의 짝꿍과<br />
          <span className="highlight-bad">최악</span>의 짝꿍은?
        </h1>
        <p className="landing-desc">
          20가지 질문으로 당신의 MBTI를 알아보고<br />
          가장 잘 맞는 유형과 가장 안 맞는 유형을 발견해보세요 💘
        </p>
        <div className="landing-mbti-grid">
          {types.map((t) => {
            const info = mbtiInfo[t as MBTIType]
            return (
              <div key={t} className="mini-card" style={{ borderColor: info.color }}>
                <span className="mini-emoji">{info.emoji}</span>
                <span className="mini-type" style={{ color: info.color }}>{t}</span>
              </div>
            )
          })}
        </div>
        <button className="start-btn" onClick={onStart}>
          검사 시작하기 →
        </button>
        <p className="landing-hint">약 3분 소요 · 20문항</p>
      </div>
    </div>
  )
}

function Quiz({
  current, total, question, onAnswer, animating,
}: {
  current: number
  total: number
  question: (typeof questions)[0]
  onAnswer: (c: 'A' | 'B') => void
  animating: boolean
}) {
  const progress = ((current) / total) * 100
  const dimensionLabel: Record<string, string> = {
    EI: '에너지 방향', SN: '인식 방식', TF: '판단 기준', JP: '생활 양식',
  }
  return (
    <div className="quiz">
      <div className="quiz-header">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-meta">
          <span className="quiz-dimension">{dimensionLabel[question.dimension]}</span>
          <span className="quiz-count">{current + 1} / {total}</span>
        </div>
      </div>

      <div className={`quiz-card ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="quiz-number">Q{current + 1}</div>
        <h2 className="quiz-question">{question.text}</h2>
        <div className="quiz-choices">
          <button className="choice-btn choice-a" onClick={() => onAnswer('A')}>
            <span className="choice-label">A</span>
            <span className="choice-text">{question.choiceA}</span>
          </button>
          <button className="choice-btn choice-b" onClick={() => onAnswer('B')}>
            <span className="choice-label">B</span>
            <span className="choice-text">{question.choiceB}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Result({ mbti, onRestart }: { mbti: MBTIType; onRestart: () => void }) {
  const info = mbtiInfo[mbti]
  const best = mbtiInfo[info.bestMatch]
  const worst = mbtiInfo[info.worstMatch]

  function share() {
    const text = `나의 MBTI는 ${mbti} ${info.nickname}!\n최고의 짝꿍: ${info.bestMatch} ${best.nickname}\n최악의 짝꿍: ${info.worstMatch} ${worst.nickname}`
    navigator.clipboard.writeText(text).then(() => alert('결과가 클립보드에 복사됐어요! 📋'))
  }

  return (
    <div className="result">
      <div className="result-header">
        <div className="result-my-type" style={{ borderColor: info.color, boxShadow: `0 0 40px ${info.color}40` }}>
          <span className="result-emoji">{info.emoji}</span>
          <div className="result-type-badge" style={{ background: info.color }}>{mbti}</div>
          <div className="result-nickname">{info.nickname}</div>
        </div>
        <p className="result-description">{info.description}</p>
        <div className="result-traits">
          {info.traits.map((t) => (
            <span key={t} className="trait-tag" style={{ background: `${info.color}20`, color: info.color, borderColor: `${info.color}40` }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="result-matches">
        <div className="match-card best-card">
          <div className="match-header">
            <span className="match-icon">💘</span>
            <span className="match-title">최고의 짝꿍</span>
          </div>
          <div className="match-type-row">
            <span className="match-emoji">{best.emoji}</span>
            <div>
              <div className="match-type" style={{ color: best.color }}>{info.bestMatch}</div>
              <div className="match-nickname">{best.nickname}</div>
            </div>
          </div>
          <p className="match-reason">{info.bestReason}</p>
        </div>

        <div className="match-card worst-card">
          <div className="match-header">
            <span className="match-icon">💔</span>
            <span className="match-title">최악의 짝꿍</span>
          </div>
          <div className="match-type-row">
            <span className="match-emoji">{worst.emoji}</span>
            <div>
              <div className="match-type" style={{ color: worst.color }}>{info.worstMatch}</div>
              <div className="match-nickname">{worst.nickname}</div>
            </div>
          </div>
          <p className="match-reason">{info.worstReason}</p>
        </div>
      </div>

      <div className="result-actions">
        <button className="share-btn" onClick={share}>결과 공유하기 📋</button>
        <button className="restart-btn" onClick={onRestart}>다시 하기 🔄</button>
      </div>
    </div>
  )
}
