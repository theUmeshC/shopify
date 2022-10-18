import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 90vh;
  min-width: 160px;
  position: sticky;
  top: 10vh;
  background: #cacaca;
  box-shadow: 50px 50px 100px #ebe9e9, -50px -50px 100px #ffffff;
  flex-direction: column;
  padding-left: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
