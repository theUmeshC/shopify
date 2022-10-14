import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 90vh;
  min-width: 160px;
  position: sticky;
  top: 10vh;
  border-radius: 4px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 50px 50px 100px #ebe9e9, -50px -50px 100px #ffffff;
  flex-direction: column;
  padding-left: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
