import styled from 'styled-components';

const SideBarContainer = styled.div`
  height: 90vh;
  width: 18%;
  position: sticky;
  top: 10vh;
  background: #c2e2fe;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 5px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SideBarContainer;
