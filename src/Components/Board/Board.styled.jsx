import styled from "@emotion/styled"
import {defaultColors} from "../../Utils/defaultColors";
import chatIcon from "../../Assets/Images/chatIcon.png";

export const StyledBoard = styled.div`
    .boardName {
      color: ${defaultColors.orange};
      font-style: normal;
      font-weight: 500;
      font-size: 45px;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .boardHeader {
      display: flex;
      justify-content: space-between;
    }
    .boardHeaderActions {
      display: flex;
      align-items: center;
    }
    .chatButton {
      background-color: white;
      border: none;
      width: 40px;
      height: 40px;
      background-image: url(${chatIcon});
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      margin-left: 20px;
    }
    .createTaskButton {
      width: 110px;
      height: 25px;
      color: white;
      border: none;
      background-color: ${defaultColors.orange};
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      white-space: nowrap;
      justify-content: space-between;
    }
    .addListButton {
      width: 100px;
      height: 25px;
      color: white;
      border: none;
      background-color: ${defaultColors.yellow};
      margin-left: 15px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      white-space: nowrap;
      justify-content: space-between;
    }
`
