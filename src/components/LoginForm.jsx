import React, { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from "./UI/input/MyInput";

const LoginForm = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            username: username,
            password: password
        };

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <MyInput value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Benutzername..."></MyInput>
            <MyInput value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Passwort..."></MyInput>
            <MyButton>Anmelden</MyButton>
        </form>
    );
};

export default LoginForm;