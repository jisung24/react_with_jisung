import React from 'react'

export default function AppProfile({ name, age, isNew }) {

  return (
    <div style = {
      {
        border : '3px solid black',
        margin : '10px 0',
        width : 'fit-content'
      }
    }>
      <img src="" alt="" />
      { isNew === 'yes' && <span>new</span>}
      <p>이름 : { `name >> ${ name }`}</p>
      <p>age : {`age >> ${ age }`}</p>
    </div>
  )
}

// 외부와 독립적이어야 한다.