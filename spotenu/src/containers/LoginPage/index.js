/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";




export function Login(){
    const [nickameValue, setNicknameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const onChangeNickname = event => { 
        setNicknameValue(event.target.value);
    }

    const onChangeEmail = event => {
        setEmailValue(event.target.value);
    }

    const onChangePassword = event => {
        setPasswordValue(event.target.value);
    }

    const onClickSubmit = () => {
        const newSubmit = {
            nickname: nickameValue, 
            email: emailValue, 
            password: passwordValue
        }

        setNicknameValue("");
        setEmailValue("");
        setPasswordValue("");
    }

    return (
        <div>
            <input
            onChange={onChangeNickname}
            value={nickameValue}
            type={"text"}
            placeholder={"Nickname"}
            />
        <input
            onChange={onChangeEmail}
            value={emailValue}
            type={"email"}
            placeholder={"Email"}
            />
        <input
            onChange={onChangePassword}
            value={passwordValue}
            type={"password"}
            placeholder={"Password"}
            />
            <button onClick={onClickSubmit}></button>
        </div>
    )
}