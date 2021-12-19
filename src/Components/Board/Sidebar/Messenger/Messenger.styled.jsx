import styled from '@emotion/styled'


export const StyledMessenger = styled.div`
    height: 100%;
    border-left: 2px solid rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    .chat-name {
      font-family: Manrope;
      font-size: 32px;
      background: -webkit-linear-gradient(#FFD600, #FF1F00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      height: 50px;
      line-height: 50px;
      width: 100%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
      border-bottom: 2px solid rgba(0, 0, 0, 0.25);
      margin: 0;
      text-align: center;
    }
    .chat-messages {
      height: 100%;
      overflow-y: scroll;
      &-list {
        list-style: none;
        padding: 30px;
        display: flex;
        flex-direction: column;
      }
    }
    .chat-message {
      min-height: 30px;
      width: 200px;
      background-color: #FF5A00;
      border-radius: 15px;
      position: relative;
      padding: 10px;
      margin-bottom: 10px;
      &-text {
        margin: 10px 0 0 0;
      }
      &-name {
        color: #f6e41e;
        font-weight: 600;
      }
    }
  
    .chat-input {
      min-height: 50px;
      display: flex;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
      border-top: 2px solid rgba(0, 0, 0, 0.25);
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .chat-send-button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      img {
        width: 40px;
      }
    }

  .chat-bubble-left:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: -20px;
    right: auto;
    top: auto;
    bottom: 0;
    border: 22px solid;
    border-color: transparent transparent #FF5A00 transparent;
  }
  
  .chat-bubble-right {
    margin-left: auto;
    &:after {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      left: auto;
      right: -20px;
      top: auto;
      bottom: 0;
      border: 20px solid;
      border-color: transparent transparent #FF5A00 transparent;
    }
  }

  .MuiInput-root {
    &::before, &::after {
      display: none;
    }
  }
`
