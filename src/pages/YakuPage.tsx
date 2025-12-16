import '../App.css'
import { yakuList } from '../data/yaku'

const formatHan = (value: number | 'yakuman') =>
  value === 'yakuman' ? '役満' : `${value} 翻`

const YakuPage = () => {
  return (
    <section className="page-card">
      <h1 className="page-title">役一覧</h1>
      <p className="page-subtitle">
        門前/食い下がりの有無を添えて、主要な役と翻数を一覧化しました。役満も含めて編集しやすいデータ定義（src/data/yaku.ts）です。
      </p>

      <div className="yaku-grid">
        {yakuList.map((yaku) => (
          <article key={yaku.name} className="yaku-card">
            <h3>{yaku.name}</h3>
            <div className="yaku-han">
              {yaku.hanClosed === 'yakuman'
                ? '役満（門前/鳴きとも同じ）'
                : `門前: ${formatHan(yaku.hanClosed)}`}
            </div>
            {yaku.hanClosed !== 'yakuman' && (
              <div className="yaku-note">
                鳴き: {yaku.hanOpen ? formatHan(yaku.hanOpen) : 'なし/門前のみ'}
              </div>
            )}
            {yaku.note && <p className="yaku-note">{yaku.note}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default YakuPage
