import React, {useEffect, useState} from 'react';
import {
    ALL_MESSAGES_HTTP_ENDPOINT,
    CREATE_MESSAGE_SOCKET_ENDPOINT,
    MESSAGES_TOPIC,
    STOMP_HTTP_ENDPOINT,
    WS_API_URL
} from "../../../../Utils/constants";
import * as SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs";
import {StyledMessenger} from './Messenger.styled'
import {getAllMessages} from "../../../../Store/requests";
import {TextField} from "@mui/material";
import armadilloIcon from "../../../../Assets/Images/armadilloIcon.svg"

function Messenger({boardName}) {
    const [messages, setMessages] = useState(null);
    const [message, setMessage] = useState('');
    const [currentUserEmail, setCurrentUserEmail] = useState('');
    const [stompClient, setStompClient] = useState({});

    useEffect(() => {
        connect();
        // return () => disconnect();
    }, [])

    useEffect(() => {
        updateScroll()
    }, [messages])

    const updateScroll = () => {
        const element = document.querySelector('.chat-messages');
        element.scrollTop = element.scrollHeight;
    }

    const connect = () => {
        let socket = new SockJS(WS_API_URL + STOMP_HTTP_ENDPOINT);
        const stompClientLocal = Stomp.over(socket);
        stompClientLocal.connect({}, (frame) => {
            console.log('Connected! Frame:', frame);
            setCurrentUserEmail(frame.headers['user-name'])
            setStompClient(stompClientLocal);
            stompClientLocal.subscribe(MESSAGES_TOPIC, getNewMessage);
            getAllMessages().then(result =>  setMessages(result.data))
        });
    }

    const sendMessage = () => {
        let request = {'messageText': message, 'jwtToken': localStorage.getItem('token')};
        let requestJson = JSON.stringify(request);
        stompClient.send(CREATE_MESSAGE_SOCKET_ENDPOINT, {}, requestJson);
    }

    const disconnect = () => {
        if (stompClient) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    const onChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const getNewMessage = (message) => {
        setMessages(prevState => [...prevState, JSON.parse(message.body)]);
    }


    return (
        <StyledMessenger>
            <h2 className={'chat-name'}>{boardName}</h2>
            <div className={'chat-messages'}>
                <ul className={'chat-messages-list'}>
                    {
                        messages && messages.map(message => {
                                const chatBubbleClass = currentUserEmail.includes(message.email) ? 'chat-message chat-bubble-right' : 'chat-message chat-bubble-left';
                                return <li key={message.id} className={chatBubbleClass}>
                                            <span className={'chat-message-name'}>{message.fullName}</span>
                                            <p className={'chat-message-text'}>{message.messageText}</p>
                                        </li>
                            }
                        )
                    }
                </ul>
            </div>
            <div className={'chat-input'}>
                <TextField autoFocus
                           margin="dense"
                           id="name"
                           type="text"
                           fullWidth
                           placeholder={'Type here...'}
                           variant="standard"
                           value={message}
                           onChange={onChangeMessage}/>
                <button className={'chat-send-button'} onClick={sendMessage}><img src={armadilloIcon} alt={'send'}/></button>
            </div>
        </StyledMessenger>
    );
}

export default Messenger;
