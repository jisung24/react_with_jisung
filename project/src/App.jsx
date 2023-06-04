import logo from './logo.svg';
import './App.css';
// ❗️컴포넌트❗️
import Header from './components/Header.jsx';
import { useState } from 'react';


// 컴포넌트 함수. 
function App() { // App 함수(컴포넌트)는 상태값이 바뀔때마다, 이 함수가 또 호출된다. 
  // 컴포넌트가 갖는 상태 
  const [data, setData] = useState(0);
  // state를 변경하는 함수. 
  // 1개의 state지만 서로 다른 역할을하는 함수 여러개를 적용할 수 있음.
  const change = (value) => {
    return value === "+" ? setData(data => data + 1) : setData(data => data - 1);
  }

  return (
    <div className="container">
      <Header />
      {/* 잘 만들어놓고, client에서 router에 맞는 코드를
      줄 때 컴포넌트가 갈아끼워진다. 
      => CSR방식으로 동작한다. 
      */}
      <main>
        <h2>Data</h2>
        <span>{ data }</span>
        <button className='incButton' onClick = { () => change("+") }>+</button>
        <button className='incButton' onClick = { () => change('-') }>-</button>
        {/* 파라미터에 따라서 달라지는 함수ㅋ */}
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;

// jsx 문법 
// 1. 

// 2. 최상위 태그 
// jsx로 컴포넌트를 만드려면 가장 최상위 부모태그는 1개여야 한다.
// 같은 레벨의 태그 2개는 안 돼! 

// 3. class => javascript예약어이기 때문에, 쓰지 못 한다. 
// class => className

// 4. jsx {}안에 쓸 수 있는 js type => number, string 
// => 삼항연산자 = 조건부랜더링!!! => 무조건 알아두기 

// 5. 컴포넌트 함수는 자신의 state(상태)가 값이 바뀌면,
// 즉, set함수가 호출이 되는 순간 다시 화면을 그린다 (❗️리랜더링❗️)
// 즉, 다시 호출된다 => 값이 바꼈으니 새로운 값을 적용시켜주기 위해서 다시 호출됨. 

