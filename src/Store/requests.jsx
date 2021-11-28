import axios from 'axios';

export const getBoard = async (boardId) => {
    const response = await axios.get(`http://185.199.99.158:8085/boards/${boardId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0',
    }});
    console.log(response);
    return response;
}

export const getRows = async () => {
    const response = await axios.get(`http://185.199.99.158:8085/rows`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0',
        }});
    console.log(response);
    return response;
}

export const getTickets = async () => {
    const response = await axios.get(`http://185.199.99.158:8085/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0',
        }});
    console.log(response);
    return response;
}

export const postRow = async (body) => {
    const response = await axios.post(`http://185.199.99.158:8085/rows`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0',
        }});
    console.log(response);
    return response;
}

export const deleteRow = async (rowId) => {
    const response = await axios.delete(`http://185.199.99.158:8085/rows/${rowId}`, {
        headers: {
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0',
        }});
    console.log(response);
    return response;
}

