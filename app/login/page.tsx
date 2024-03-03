'use client'
import React from 'react';
import { useForm, Form } from "react-hook-form"

function Login() {
    const { register, control } = useForm()

    return (
        <Form action="http://127.0.0.1:8000/api/login/"
              onSuccess={() => {
                  alert("Logged In")
              }}
              onError={() => {
                  alert("Authentication failed.")
              }}
              control={control}>
            <label>Username</label>
            <input {...register("username", { required: true})} />
            <label>Password</label>
            <input {...register("password", { required: true})} />
            <input type="submit"/>
        </Form>
    );
}

export default Login;