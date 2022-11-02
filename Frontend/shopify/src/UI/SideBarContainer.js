import styled from 'styled-components';

const SideBarContainer = styled.div`
  height: 90vh;
  min-width: 190px;
  position: sticky;
  top: 10vh;
  background: #c2e2fe;
  flex-direction: column;
  padding-left: 25px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SideBarContainer;
