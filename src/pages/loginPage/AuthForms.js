import React from 'react';
import "./LoginPage.css"
import "..//..//layauts/form.css"
import messege from "../../images/messages-2.png"
import { Outlet } from 'react-router-dom';
import Modal from '../../components/modal/PopapModal';
const AuthForms = () => {


    return (
        <>
        <div className='wrapper_Login-page'>
           
            <div className='logo'></div>
            <div className='form'>
                <div className='form_content'>
                    <Outlet></Outlet>
                </div>
            </div>
            <button className='messeges'></button>
        </div>
        </>
    );
};

export default AuthForms;