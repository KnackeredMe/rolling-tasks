import axios from 'axios';

export const getBoard = async (boardId) => {
    const response = await axios.get(`http://185.199.99.158:8085/boards/${boardId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
    }});
    console.log(response)
    return response;
}

export const getRows = async () => {
    const response = await axios.get(`http://185.199.99.158:8085/rows`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }});
    console.log(response)
    return response;
}

export const getTickets = async () => {
    const response = await axios.get(`http://185.199.99.158:8085/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }});
    console.log(response)
    return response;
}
