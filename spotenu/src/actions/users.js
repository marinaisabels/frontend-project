import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

const baseURL = ''

export const login = (nickname, email, password) => async (dispatch) =>{
    const loginData ={
        nickname,
        email,
        password
    }

    try{
        const response = await axios.post(`${baseURL}/`, loginData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        dispatch(push(routes.feedPage))
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const signupAdmin = (name, email, nickname, password) => async (dispatch) => {
    const signupData={
        name,
        email,
        nickname,
        password
    }

    try{
       const response =  await axios.post(`${baseURL}/register/admin`, signupData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        alert('Conta criada com sucesso!')
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar criar uma conta")
    }
}

export const signup = (name, email, nickname, password) => async (dispatch) => {
    const signupData={
        name,
        email,
        nickname,
        password
    }

    try{
       const response =  await axios.post(`${baseURL}/register`, signupData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        alert('Conta criada com sucesso!')
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar criar uma conta")
    }
}

export const signupBand = (name, email, nickname, description, password) => async (dispatch) => {
    const signupData={
        name,
        email,
        nickname,
        description,
        password
    }
    try{
       const response =  await axios.post(`${baseURL}/register/band`, signupData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        alert('Conta criada com sucesso!')
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar criar uma conta")
    }
}


export const setUsersListeners = (users) => ({
    type: "SET_USERS_LISTERNERS",
    payload: {users}
})

export const setUsersBand = (bands) => ({
    type: "SET_USERS_BANDS",
    payload: {bands}
})

export const setUser = (user) => ({
    type: "SET_USER",
    payload: {
        user
    }
})

