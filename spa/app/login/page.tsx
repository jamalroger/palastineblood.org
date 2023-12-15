'use client'
import { useState } from "react";

function setToken(token: string) {
    localStorage.setItem('auth-token', token);
}

function getToken() {
    return localStorage.getItem('auth-token') || null;
}

let login = (username: string, password: string) => {
    setToken("ddddd");
}

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit" onClick={() => login("test", "test")} >Submit</button>
            </div>
        </form>
    )
}
