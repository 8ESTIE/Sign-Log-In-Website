import React, { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from "./UI/input/MyInput";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <MyInput value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Benutzername..."></MyInput>
            <MyInput value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Passwort..."></MyInput>
            <MyButton>Anmelden</MyButton>
        </form>
    );
};

export default LoginForm;