/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

const baseURL = ''

export const createAlbum = (name, genre) => async (dispatch) => {
    const albumData = {
        name,
        genre
    }
    try {
        const response = await axios.post(`${baseURL}/addAlbum/band`, albumData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        dispatch(push(routes.addAlbum))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}
export const getBandAlbuns = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.post(`${baseURL}/addAlbum/band`, {
            headers: {
                "Content-Type": "application/json",
                auth: token
            }
        });
        dispatch(setBandAlbuns(response.data.albuns))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const setBandAlbuns = (albuns) => ({
    type: "SET_BAND_ALBUNS",
    payload: { albuns }
})