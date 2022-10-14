import styled from "styled-components";

export const Nav = styled.div`
position: sticky;
top: 0;
width: 100vw;
height: 10vh;
display: flex;
box-sizing: border-box;
justify-content: space-between;
padding: 1px 15px;
align-items: center;
background-color: #5333ed;
color: white;
z-index: 999;
box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`;
export const Cart = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
.cart__icon {
  color: white;
}
.cart__icon:hover {
  text-decoration: none;
  cursor: pointer;
  color: gold;
}
`;
export const RightContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
h1 {
  color: white;
  font-size: 15px;
}
h1:hover {
  text-decoration: none;
  cursor: pointer;
  color: #3ee83e;
}
`;
export const Logo = styled.h1`
font-size: 20px;
color: white;
font-family: "Sofia", serif;
`;
export const SearchInput = styled.div`
display: flex;
min-width: 80px;
align-items: center;
.input {
  padding-bottom: 20px;
}
.searchBar {
  min-width: 80px;
  background-color: transparent;
  height: 20px;
  border: solid white;
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.searchBar:focus {
  color:white;
}
`;