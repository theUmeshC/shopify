import React from 'react'

const Cart = (props) => {  
  const data = props.data
  var map = data.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  
  const buttonClick = () => {
    console.log(map);
    Object.keys(map);
    console.log(...Object.keys(map));
  }
    

  return (
    <div>
      <button onClick={buttonClick}>hello</button>
    </div>
  )
}

export default Cart