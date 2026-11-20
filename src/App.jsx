import { useState } from 'react';
import Lab1EffectTimer from './components/Lab1_EffectTimer.jsx';
import Lab2TimerControl from './components/Lab2_TimerControl.jsx';
import Lab3InputFocus from './components/Lab3_InputFocus.jsx';
import Lab4RefTimer from './components/Lab4_RefTimer.jsx';

// 컴퍼넌트들을 하나의 배열에 담음
const labs = [
  { id: '1', name: 'LAB 1', subtitle: 'useEffect Timer', Component: Lab1EffectTimer },
  { id: '2', name: 'LAB 2', subtitle: 'Start / Stop / Cleanup', Component: Lab2TimerControl },
  { id: '3', name: 'LAB 3', subtitle: 'useRef Input Focus', Component: Lab3InputFocus },
  { id: '4', name: 'LAB 4', subtitle: 'useRef Timer', Component: Lab4RefTimer },
];

//

export default function App() {

  //초기값은 1 active에 선택이된 탭의 id를 저장
  const [active, setActive] = useState('1');
  // 배열에서 현재 저장된 id와 같은 객체를 찾아 해당 컴퍼넌트를 꺼냄
  const chosen = labs.find(lab => lab.id === active);
  const CurrentLab = chosen.Component;

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">오픈소스스튜디오 · WEEK 12</p>
        <h1>리액트활용 연습</h1>
        <p>useEffect · Cleanup · useRef — 4개의 독립된 Lab</p>
      </header>
    {/* 버튼을 누르면 해당탭 화면이 렌더링 될수있게 저장함 */}
      <nav className="tabs" aria-label="실습 선택">
        {labs.map(lab => (
          <button key={lab.id} type="button" className={active === lab.id ? 'tab active' : 'tab'}
            onClick={() => setActive(lab.id)} aria-current={active === lab.id ? 'page' : undefined}>
            <b>{lab.name}</b><span>{lab.subtitle}</span>
          </button>
        ))}
      </nav>
        {/* 렌더링이 실제 이루어지는곳 다른탭을 누르면 해당탭이 렌더링됨  */}
      <section className="lab-panel">
        <div className="section-heading">
          <span className="pill">{chosen.name}</span>
          <h2>{chosen.subtitle}</h2>
        </div>
        <CurrentLab />
      </section>
      <footer>랩을 전환하면 이전 Lab은 언마운트됩니다. Timer Cleanup을 확인해 보세요.</footer>
    </main>
  );
}
