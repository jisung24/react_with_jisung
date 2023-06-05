import React from 'react'
import AppProfile from './AppProfile';

export default function App() { // 함수형 컴포넌트 (무조건 대문자)
  const name = "hello"
  const data = "dada";
  const arr = [1,2,3,4];
  return (
    <>
    <AppProfile 
    isNew = { "yes" }
    name = { "지성" }
    age = { 26 }
    />
    <AppProfile 
    isNew = { "yes" }
    name = { "홍래"}
    age = { 27 }
    />
    <AppProfile 
    name = { "현태" }
    age = { 28 }
    />
    </>
  )
}


// JSX문법 

// 1. 반환할때는 무조건 1개의 태그만 반환해야 돼! 
// => 부모태그가 필요한 경우가 아니라면 텅텅빈 태그 return하면 돼!

// 2. className : class는 javascript예약어이기 때문에, 사용할 수 없다. 

// 3. jsx지만 js파일도 돼! => 자바스크립트 파일 쓸 땐 {}안에 들어가줘야 한다.


// 최종 정리 
// 1. 리엑트에서 컴포넌트는 함수로 만든다. 
// 2. 이름은 무조건 대문자로 시작해야한다. 
// 3. return은 무조건 jsx문법 사용! 
// - 하나의 태그만 꼭 반환 
// - className사용 
// - js도 작성가능 중괄호 사용해야함 {}

// 1. 중복코드 반복문으로 줄임!  
// => 태그도 반복문으로 생성 가능! 