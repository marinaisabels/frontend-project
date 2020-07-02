import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

const baseURL = ''

export const createMusic = (name, album) => async (dispatch) => {
    const musicData = {
        name,
        album
    }
    try {
        const response = await axios.post(`${baseURL}/addMusic/band`, musicData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        dispatch(push(routes.addMusic))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}
export const getBandMusic = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.post(`${baseURL}/addAlbum/band`, {
            headers: {
                "Content-Type": "application/json",
                auth: token
            }
        });
        dispatch(setBandMusic(response.data.musics))
    }
    catch (error) {
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const setBandMusic = (musics) => ({
    type: "SET_BAND_MUSIC",
    payload: { musics }
})