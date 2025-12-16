import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import FuPage from './pages/FuPage'
import ScoreCalculator from './pages/ScoreCalculator'
import YakuPage from './pages/YakuPage'

const BottomNav = () => (
  <nav className="bottom-nav" aria-label="主要ナビゲーション">
    <NavLink
      className={({ isActive }) =>
        `bottom-nav__item${isActive ? ' is-active' : ''}`
      }
      to="/"
    >
      <span className="bottom-nav__label">計算</span>
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `bottom-nav__item${isActive ? ' is-active' : ''}`
      }
      to="/yaku"
    >
      <span className="bottom-nav__label">役一覧</span>
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `bottom-nav__item${isActive ? ' is-active' : ''}`
      }
      to="/fu"
    >
      <span className="bottom-nav__label">符の見方</span>
    </NavLink>
  </nav>
)

const App = () => {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="brand">
            <span className="brand-mark">Riichi Score</span>
            <p className="brand-sub">三麻/四麻 リーチ麻雀点数計算</p>
          </div>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ScoreCalculator />} />
            <Route path="/yaku" element={<YakuPage />} />
            <Route path="/fu" element={<FuPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <span>HashRouter で GitHub Pages 対応済み / Vite + React + TypeScript</span>
        </footer>
        <BottomNav />
      </div>
    </HashRouter>
  )
}

export default App
