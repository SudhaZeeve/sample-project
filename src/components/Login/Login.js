import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png"
import InputTag from "../common/InputTag";

const Login = () => {

    const [change,setChange] =  useState({Email:"",Password:"",});

    const handleChange=(e)=>{
        const{name,value} = e.target;
        setChange({...change,[name]:value});
    }

    return (
        <>
            <section className="user-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="user-bg col-8 mx-auto">
                                <div className="logo text-center mb-5">
                                    <img src={Logo} width="130" alt="logo" />
                                </div>
                                <h4 className="text-center mb-5">Welcome to GroPlus Portal</h4>
                                <form>
                                    <InputTag Label="Email" Type="email" Placeholder="sudha@gmail.com" Value={change.Email} Required onChangeValue={handleChange} name="Email" classcol="col-9 mx-auto" />
                                    
                                    <InputTag Label="Password" Type="password" placeholder="password" Value={change.Password} Required onChangeValue={handleChange} name="Password" classcol="col-9 mx-auto" />

                                    <div className="col-9 mx-auto text-end mb-3">
                                        <a href="forgot-password.html" className="float-right ForgotPaswd mt-2">Forgot Password?</a>
                                    </div>

                                    <div className="form-group col-9 mx-auto">
                                        <NavLink to="/user/dashboard" className="btn btn-orange w-100 hoverStyle">Login</NavLink>
                                    </div>
                                    <p className="text-center font-18 mb-0 NewReg mt-3"><a href="registration.html" className="text-orange hoverStyle"><b>New Registration</b></a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;