

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'bed8637b66msh2872cd6deb12ef6p1e34b6jsnb3c21af16256'
        },
    });

    return data;
}