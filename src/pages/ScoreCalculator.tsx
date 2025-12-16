import { FormEvent, useState } from 'react'
import '../App.css'
import {
  GameType,
  Role,
  ScoreResult,
  WinType,
  calculateScore,
} from '../utils/score'

const fuOptions = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110]

const ScoreCalculator = () => {
  const [gameType, setGameType] = useState<GameType>('four')
  const [role, setRole] = useState<Role>('child')
  const [winType, setWinType] = useState<WinType>('ron')
  const [fu, setFu] = useState<number | ''>('')
  const [hanInput, setHanInput] = useState<string>('1')
  const [error, setError] = useState<string>('')
  const [result, setResult] = useState<ScoreResult | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (fu === '') {
      setError('符を選んでください')
      setResult(null)
      return
    }

    const parsedHan = Number(hanInput)
    if (!hanInput || Number.isNaN(parsedHan) || parsedHan < 1) {
      setError('翻は1以上で入力してください')
      setResult(null)
      return
    }

    setError('')
    const calc = calculateScore(gameType, role, winType, fu, parsedHan)
    setResult(calc)
  }

  return (
    <section className="page-card">
      <h1 className="page-title">点数計算</h1>
      <p className="page-subtitle">
        三人麻雀/四人麻雀・親子・ツモ/ロン・符/翻を指定して支払い点を算出します。
        HashRouter 採用で GitHub Pages でも安心。
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label>三麻 / 四麻</label>
            <div className="toggle-group">
              <button
                type="button"
                className={`pill ${gameType === 'four' ? 'active' : ''}`}
                onClick={() => setGameType('four')}
              >
                四人麻雀
              </button>
              <button
                type="button"
                className={`pill ${gameType === 'three' ? 'active' : ''}`}
                onClick={() => setGameType('three')}
              >
                三人麻雀
              </button>
            </div>
          </div>

          <div className="field">
            <label>親 / 子</label>
            <div className="radio-group">
              <button
                type="button"
                className={`pill ${role === 'parent' ? 'active' : ''}`}
                onClick={() => setRole('parent')}
              >
                親
              </button>
              <button
                type="button"
                className={`pill ${role === 'child' ? 'active' : ''}`}
                onClick={() => setRole('child')}
              >
                子
              </button>
            </div>
          </div>

          <div className="field">
            <label>和了方法</label>
            <div className="radio-group">
              <button
                type="button"
                className={`pill ${winType === 'tsumo' ? 'active' : ''}`}
                onClick={() => setWinType('tsumo')}
              >
                ツモ
              </button>
              <button
                type="button"
                className={`pill ${winType === 'ron' ? 'active' : ''}`}
                onClick={() => setWinType('ron')}
              >
                ロン
              </button>
            </div>
          </div>

          <div className="field">
            <label>符</label>
            <select
              className="control"
              value={fu === '' ? '' : String(fu)}
              onChange={(e) =>
                setFu(e.target.value === '' ? '' : Number(e.target.value))
              }
            >
              <option value="">選択してください</option>
              {fuOptions.map((value) => (
                <option key={value} value={value}>
                  {value} 符
                </option>
              ))}
            </select>
            <small>20, 25, 30...110 までの基本符に対応</small>
          </div>

          <div className="field">
            <label>翻数</label>
            <input
              className="control"
              type="number"
              min={1}
              inputMode="numeric"
              value={hanInput}
              onChange={(e) => setHanInput(e.target.value)}
              placeholder="翻を入力"
            />
            <small>1翻以上必須（0以下はエラー）</small>
          </div>
        </div>

        <div className="sticky-actions">
          <div className="action-row">
            <button className="primary-btn" type="submit">
              この条件で計算する
            </button>
            {error && <span className="error">{error}</span>}
          </div>
        </div>
      </form>

      {result && (
        <div className="result-card">
          <h3>計算結果</h3>
          <p className="secondary-info">
            {(gameType === 'four' ? '四人麻雀' : '三人麻雀') +
              ' / ' +
              (role === 'parent' ? '親' : '子') +
              ' / ' +
              (winType === 'tsumo' ? 'ツモ' : 'ロン') +
              ` / ${fu} 符 ${hanInput || '?'} 翻`}
          </p>
          <p className="secondary-info">
            基本点: {result.base.toLocaleString()} 点{' '}
            {result.limitLabel ? `（${result.limitLabel}扱い）` : '（通常計算）'}
            {result.limitLabel && ` / 元の基本点 ${result.rawBase.toLocaleString()} 点`}
          </p>
          <div className="result-payments">
            {result.payments.map((payment) => (
              <div key={payment.label} className="payment-item">
                <p className="payment-title">{payment.label}</p>
                <div className="payment-amount">
                  {payment.amount.toLocaleString()} 点
                </div>
              </div>
            ))}
          </div>
          <p className="secondary-info">
            {gameType === 'three'
              ? '三人麻雀: ツモの支払いは2人分（親ツモは2人が同額、子ツモは親+もう一人の子）'
              : '四人麻雀: 親ツモは3人から均等、子ツモは親2本・子1本で支払い'}
          </p>
        </div>
      )}
    </section>
  )
}

export default ScoreCalculator
