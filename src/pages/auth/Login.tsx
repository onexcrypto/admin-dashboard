/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import type { LoginForm } from '../../models';
import './auth.css';

const Login = () => {
    const navigate = useNavigate();
    const disabled = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        console.log(data);
        let btn_login = document.getElementById('btn_login');
        btn_login?.setAttribute('disabled','disabled');
        if (data.username === 'admin' && data.password==='admin') {
            toast.success("Connexion établie avec succès");
            setTimeout(() => {
                navigate('/dashboard');
            }, 3500);
        } else {
            setTimeout(() => {
                btn_login?.removeAttribute('disabled');
            }, 3500);
            toast.error("Username ou mot de passe incorrect");
        }
    };


    return (
        <>
            <div className="auth-page-wrapper pt-5">
                {/* auth page bg */}
                <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                    <div className="bg-overlay" />
                    <div className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                        </svg>
                    </div>
                </div>
                {/* auth page content */}
                <div className="auth-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="text-center mt-sm-5 mb-4 text-white-50">
                                <div>
                                <a href="index-2.html" className="d-inline-block auth-logo">
                                    <img src="assets/images/1xcrypto.svg" alt="" height={20} />
                                </a>
                                </div>
                                <p className="mt-3 fs-15 fw-medium">
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                        {/* end row */}
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card mt-4">
                                <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">BIENVENUE SUR 1XC BACK-OFFICE!</h5>
                                    <p className="text-muted">Connectez-vous pour accéder à votre back-office 1XC</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" {...register("username", { required: true })} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.username && <span className='text-danger'>Veuillez entrez un nom d'utilisateur</span>}
                                        </div>
                                        <div className="mb-3">
                                            <div className="float-end">
                                                <a href="auth-pass-reset-basic.html" className="text-muted">Mot de passe oublié?</a>
                                            </div>
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" {...register("password", { required: true })}  />
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon">
                                                    <i className="ri-eye-fill align-middle" />
                                                </button>
                                                {errors.password && <span className='text-danger'>Veuillez entrez votre mot de passe</span>}
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="auth-remember-check" />
                                            <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                        </div>
                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit" id='btn_login' >Se connecter</button>
                                        </div>
                                        {/* <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                            <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                            </div>
                                            <div>
                                            <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16" /></button>
                                            <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16" /></button>
                                            <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16" /></button>
                                            <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16" /></button>
                                            </div>
                                        </div> */}
                                    </form>
                                </div>
                                </div>
                                {/* end card body */}
                            </div>
                            {/* end card */}
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end auth page content */}
                {/* footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="mb-0 text-muted">©
                                        1XC. Crafted with <i className="mdi mdi-heart text-danger" /> by 1XC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* end Footer */}
                </div>
                {/* end auth-page-wrapper */}

        </>
    )
}

export default Login