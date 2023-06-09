"use strict";

// why react

// 1. 간단한 유지보수 (공통부분 함수만 찾으면 돼!)
// - 만약 header만 다른 서로 다른 html파일 5개가 있다고 치자.

// 공통된 부분을 수정하려면 html 5개를 모두 수정해줬어야 해!
// 근데 공통부분을 함수로 만들어서 그 함수만 찾아 수정하면 끝.

// 2. 재사용
// - 함수로 컴포넌트 하나를 잘 만들어놓으면, 필요할 때 언제든지 재사용할 수 있음.

// 3. virtual dom
// - what is dom?
// => 브라우져가 html을 받고, javascript가 조작할 수 있게끔 tree형태의 객체로 바꾼 객체이다.
// => dom은 조금이라도 바뀔 때 마다, 브라우져가 렌더링 과정을 싹 다 처음부터 계속 반복한다.
// => 그래서 성능저하의 원인이 된다.

// => 해결책
// 5번 1번씩 하는게 아니라, 5번을 한 번에 모아서 업데이트 한다.

// 🔴 다시 한 번 브라우져 렌더링 과정 🔴

// 👉 1. 렌더링 엔진이 html을 해석해서 DOM노드로 이루어진 트리 생성
// 👉 2. ❗️이젠 css차례❗️
// - css파일 && html인라인 css를 해석해서 css dom을 구성

// 👉 3. dom + css dom === render tree생성

// 👉 4. 이제 레이아웃 단계
// - render tree에 있는 각 노드들이 문서 어느 공간에 위치해야 하는지 결정됨.
// - position이나, size등이 여기서 계산됨.
// 👉 5. repaint : 실제로 화면에 그리기

// ❌ 문제점 : 변화가 발생하면, 저 과정을 처음부터 계속 반복함
// - 너무 불필요한 과정들이 계속 반복됨.
// - 사소한 변화지만 layout을 다시계산해야하고, 글자만 바꼈는데도 size등도 다시 계산해야하고..
// - 🔴 좋아요만 눌렀는데, 다른 변화도 없는 노드들이 싹 다 다시 그려짐 🔴

// 그래서 등장한게 virtual dom => 기존 dom의 복사본
// 실제 dom이 갖고있는 api는 갖고있지 않다!
// virtual dom은 자바스크립트 객체로 표현된다
// 변경 부분을 한 번에 묶어서 dom에 던져주는 역할을 한다.

// 🔴 props => 차별성 🔴
// - 컴포넌트에게 data를 전달하는 방식!
// 만약 박스 컴포넌트를 10번 사용하고 싶은데,
// => 거기 안에 들어갈 내용이 각각 다르다면?
// => 서로 다른 data를 전달만 해주면 돼!
