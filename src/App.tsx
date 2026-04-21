import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
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
      }, 250)
    } else {
      const mbti = calculateMBTI(newAnswers)
      setResult(mbti)
      setPage('result')
    }
  }

  function handleBack() {
    if (animating) return
    if (current === 0) {
      setPage('landing')
    } else {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((c) => c - 1)
        setAnimating(false)
      }, 250)
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
      onBack={handleBack}
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
          20가지 상황 질문으로 당신의 MBTI를 알아보고<br />
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
  current, total, question, onAnswer, onBack, animating,
}: {
  current: number
  total: number
  question: (typeof questions)[0]
  onAnswer: (c: 'A' | 'B') => void
  onBack: () => void
  animating: boolean
}) {
  const progress = (current / total) * 100
  const dimensionLabel: Record<string, string> = {
    EI: '에너지 방향', SN: '인식 방식', TF: '판단 기준', JP: '생활 양식',
  }

  const lines = question.text.split('\n')

  return (
    <div className="quiz">
      <div className="quiz-header">
        <div className="quiz-top-row">
          <button className="back-btn" onClick={onBack}>
            ← {current === 0 ? '처음으로' : '이전'}
          </button>
          <span className="quiz-count">{current + 1} / {total}</span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-dimension-label">{dimensionLabel[question.dimension]}</div>
      </div>

      <div className={`quiz-card ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="quiz-number">Q{current + 1}</div>
        <h2 className="quiz-question">
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
          ))}
        </h2>
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
  const shareRef = useRef<HTMLDivElement>(null)
  const [capturing, setCapturing] = useState(false)

  async function shareAsImage() {
    if (!shareRef.current || capturing) return
    setCapturing(true)
    try {
      const canvas = await html2canvas(shareRef.current, {
        scale: 2,
        backgroundColor: '#0f0f1a',
        useCORS: true,
        logging: false,
      })
      const link = document.createElement('a')
      link.download = `MBTI_${mbti}_결과.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } finally {
      setCapturing(false)
    }
  }

  return (
    <>
    {/* 이미지 캡처용 카드 (화면 밖에 숨겨둠) */}
    <div style={{ position: 'fixed', left: '-9999px', top: 0, pointerEvents: 'none' }}>
      <div ref={shareRef} style={{
        width: '400px',
        background: 'linear-gradient(160deg, #0f0f1a 0%, #1a0a2e 50%, #0d1b3e 100%)',
        padding: '40px 32px 32px',
        fontFamily: 'system-ui, sans-serif',
        boxSizing: 'border-box',
      }}>
        {/* 헤더 */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            color: 'white', fontSize: '11px', fontWeight: 700,
            letterSpacing: '2px', padding: '4px 14px', borderRadius: '100px',
            marginBottom: '20px', textTransform: 'uppercase',
          }}>MBTI 궁합 테스트</div>

          <div style={{ fontSize: '56px', lineHeight: 1, marginBottom: '12px' }}>{info.emoji}</div>
          <div style={{
            display: 'inline-block',
            background: info.color, color: 'white',
            fontSize: '26px', fontWeight: 900, letterSpacing: '4px',
            padding: '8px 24px', borderRadius: '100px', marginBottom: '8px',
          }}>{mbti}</div>
          <div style={{ fontSize: '15px', color: '#d1d5db', fontWeight: 600, marginBottom: '12px' }}>{info.nickname}</div>
          <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.6, padding: '0 8px' }}>{info.description}</div>
        </div>

        {/* 구분선 */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '24px' }} />

        {/* 직업 */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px' }}>💼 어울리는 직업</div>
          {info.jobs.map((job) => (
            <div key={job.title} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '20px' }}>{job.emoji}</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f3f4f6' }}>{job.title}</div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>{job.reason}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '24px' }} />

        {/* 궁합 */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
          <div style={{
            flex: 1, padding: '16px', borderRadius: '14px',
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
          }}>
            <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px' }}>💘 최고의 짝꿍</div>
            <div style={{ fontSize: '24px', marginBottom: '4px' }}>{best.emoji}</div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: best.color, letterSpacing: '2px' }}>{info.bestMatch}</div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>{best.nickname}</div>
          </div>
          <div style={{
            flex: 1, padding: '16px', borderRadius: '14px',
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
          }}>
            <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px' }}>💔 최악의 짝꿍</div>
            <div style={{ fontSize: '24px', marginBottom: '4px' }}>{worst.emoji}</div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: worst.color, letterSpacing: '2px' }}>{info.worstMatch}</div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>{worst.nickname}</div>
          </div>
        </div>

        {/* 하단 브랜딩 */}
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#374151', letterSpacing: '1px' }}>
          MBTI 궁합 테스트 · idealtype-mbti
        </div>
      </div>
    </div>

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

      <div className="result-jobs">
        <div className="section-title">💼 어울리는 직업</div>
        {info.jobs.map((job) => (
          <div key={job.title} className="job-card">
            <span className="job-emoji">{job.emoji}</span>
            <div>
              <div className="job-title">{job.title}</div>
              <div className="job-reason">{job.reason}</div>
            </div>
          </div>
        ))}
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
        <button className="share-btn" onClick={shareAsImage} disabled={capturing}>
          {capturing ? '이미지 생성 중...' : '이미지로 저장 🖼️'}
        </button>
        <button className="restart-btn" onClick={onRestart}>다시 하기 🔄</button>
      </div>
    </div>
    </>
  )
}
