import styled from "styled-components";

const Cart = (props) => {
  const Container = styled.div``;
  const Cards = styled.div`
    background-color: green;
    height: 10px;
  `;

  const data = props.data;
  const total = data.length;
  const map = new Map(
    Object.entries(
      data.reduce((acc, curr) => {
        const str = JSON.stringify(curr);
        acc[str] = (acc[str] || 0) + 1;
        return acc;
      }, {})
    )
  );
  const cartData = data.reduce((acc, curr) => {
    const str = JSON.stringify(curr);
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, []);

  const buttonClick = () => {
    console.log(data);
    console.log(cartData);
    console.log(map);
    console.log(Object.keys(map));
    const y= Object.keys(map).map((value)=>{
      return "<div>value</div>"
    })
    console.log(y);
    // const x = map.forEach(function (value, key) {
    //   console.log(value, JSON.parse(key));
    //   // return ( "hello")
    // });
    
    // console.log(x);
  };
  return (
    <>
      <button onClick={buttonClick}>hello</button>
      {

      }
    </>
  );
};

export default Cart;
