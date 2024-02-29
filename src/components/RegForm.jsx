import React, { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from "./UI/input/MyInput";

const RegForm = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            username: username,
            password: password,
            firstname: firstname,
            surname: surname,
            email: email,
        };

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <MyInput value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Benutzername..."></MyInput>
            <MyInput value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Passwort..."></MyInput>
            <MyInput value={firstname} onChange={e => setFirstname(e.target.value)} type="text" placeholder="Vorname..."></MyInput>
            <MyInput value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Nachname..."></MyInput>
            <MyInput value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-Mail..."></MyInput>
            <MyButton>Registrieren</MyButton>
        </form>
    );
};

export default RegForm;