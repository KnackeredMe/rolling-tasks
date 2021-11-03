import axios from 'axios';

export const getBoard = async () => {
    const response = await axios.get(`http://185.199.99.158:8085/boards/9e6b17e7-360b-492a-ba9a-ae8076d8b665`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors',
    }});
    console.log(response)
}
