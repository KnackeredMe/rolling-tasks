import axios from 'axios';
import {API_URL, WS_API_URL, ALL_MESSAGES_HTTP_ENDPOINT} from "../Utils/constants";

export const getBoard = async (boardId) => {
    const response = await axios.get(`${API_URL}/boards/${boardId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
    }});
    console.log(response);
    return response;
}

export const getRows = async () => {
    const response = await axios.get(`${API_URL}/rows`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const getTickets = async () => {
    const response = await axios.get(`${API_URL}/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const postRow = async (body) => {
    const response = await axios.post(`${API_URL}/rows`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const getTicket = async (ticketId) => {
    console.log(ticketId)
    const response = await axios.get(`${API_URL}/tickets/${ticketId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const postTickets = async (body) => {
    const response = await axios.post(`${API_URL}/tickets`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const putTicket = async (body, ticketId) => {
    const response = await axios.put(`${API_URL}/tickets/${ticketId}`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}


export const deleteTicket = async (ticketId) => {
    const response = await axios.delete(`${API_URL}/tickets/${ticketId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const deleteRow = async (rowId) => {
    const response = await axios.delete(`${API_URL}/rows/${rowId}`, {
        headers: {
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

export const registration = async (body) => {
    const response = await axios.post(`${API_URL}/auth/registration`, body, {
        headers: {
        }});
    console.log(response);
    return response;
}

export const authorization = async (body) => {
    const response = await axios.post(`${API_URL}/auth`, body, {
        headers: {
        }});
    console.log(response);
    return response;
}

export const getAllMessages = async () => {
    const response = await axios.get(API_URL + ALL_MESSAGES_HTTP_ENDPOINT, {
        headers: {
            'Authorization' : localStorage.getItem('token'),
        }});
    console.log(response);
    return response;
}

