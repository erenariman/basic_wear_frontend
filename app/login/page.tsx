'use client'
import React, {useState} from 'react';
import { useForm, Form } from "react-hook-form"
import {redirect, useNavigate} from "react-router";

function Login() {
    const { register, handleSubmit, control } = useForm()
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (data, e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                alert("Logged in successfully. ");
                navigate('http://localhost:3000/store');
            } else {
                const resData = await res.json();
                setError(resData.detail);
            }
        } catch (error) {
            console.error('Error', error);
            setError("Something went wrong. ");
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} control={control}>
            <label>Username</label>
            <input {...register("username", { required: true})} />
            <label>Password</label>
            <input {...register("password", { required: true})} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="submit" />
        </Form>
    );
}

export default Login;