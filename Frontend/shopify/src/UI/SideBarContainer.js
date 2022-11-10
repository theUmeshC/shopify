import styled from 'styled-components';

const SideBarContainer = styled.div`
  height: 90vh;
  width: 16%;
  position: sticky;
  top: 10vh;
  background: #A3C7D6;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 5px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .sidebar_checkbox{
    color:green;
  }
  .sidebar_title{
    font-size:17px;
    color:black;
    font-weight: 700;
    margin: 15px 0 5px 0;
  }
`;

export default SideBarContainer;
