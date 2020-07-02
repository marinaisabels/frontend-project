import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

const baseURL = ''

export const createGenre = (name) => async (dispatch) => {
    const genreData = {
        name
    }
    try {
        const response = await axios.post(`${baseURL}/addGenre/band`, genreData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        dispatch(push(routes.addGenre))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}
export const getMusicGenre = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.post(`${baseURL}/addAlbum/band`, {
            headers: {
                "Content-Type": "application/json",
                auth: token
            }
        });
        dispatch(setBandGenre(response.data.genres))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const setBandGenre = (genres) => ({
    type: "SET_BAND_GENRE",
    payload: { genres }
})