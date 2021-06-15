import React, { useEffect, useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/UserAction'
import { useHistory } from 'react-router';
import {SignupUser} from '../../actions/UserAction'

function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const user = useSelector(state => state.userSignin)
    const {userInfo, error} = user
    const onSubmit = data => {
        if(password === confirmPassword) {
            dispatch(SignupUser(data))            
        } else{
            alert("wrong repeat password")
        }
    }
  
    return (
        <div className="signup-page">
            <h2>register</h2>
            <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
                <input {...register("name")} placeholder="name"></input>
                <input {...register("email")} placeholder="email" type="email"></input>
                <input {...register("password")} placeholder="password" type="password" onChange={e => setPassword(e.target.value)}></input>
                <input {...register("repeat password")} placeholder="password" type="password" onChange={e => setConfirmPassword(e.target.value)}></input>

                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Login;