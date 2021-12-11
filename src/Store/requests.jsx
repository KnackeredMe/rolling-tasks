import axios from 'axios';
import {API_URL, TEMP_JWT_TOKEN} from "../Utils/constants";

export const getBoard = async (boardId) => {
    const response = await axios.get(`${API_URL}/boards/${boardId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : TEMP_JWT_TOKEN,
    }});
    console.log(response);
    return response;
}

export const getRows = async () => {
    const response = await axios.get(`${API_URL}/rows`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : TEMP_JWT_TOKEN,
        }});
    console.log(response);
    return response;
}

export const getTickets = async () => {
    const response = await axios.get(`${API_URL}/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : TEMP_JWT_TOKEN,
        }});
    console.log(response);
    return response;
}

export const postRow = async (body) => {
    const response = await axios.post(`${API_URL}/rows`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : TEMP_JWT_TOKEN,
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
            'Authorization' : TEMP_JWT_TOKEN,
        }});
    console.log(response);
    return response;
}

export const postTickets = async (body) => {
    const response = await axios.post(`${API_URL}/tickets`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : TEMP_JWT_TOKEN,
        }});
    console.log(response);
    return response;
}

export const deleteRow = async (rowId) => {
    const response = await axios.delete(`${API_URL}/rows/${rowId}`, {
        headers: {
            'Authorization' : TEMP_JWT_TOKEN,
        }});
    console.log(response);
    return response;
}

