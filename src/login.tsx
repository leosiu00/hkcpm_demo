import React, { useEffect, useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { data } from "./importData/importData";
import dataService from './util/data.service';
import { courseData } from "./importData/coursesList";
import courseService from './util/courseData.service';
import sessionService from './util/storage.service';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        if (!dataService.get()) {
            dataService.set(data);
        }        
		if (!courseService.get()) {
            courseService.set(courseData);
        }
    }, []);

    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!username || !password) {
            setLoginError(true);
            return;
        }
        if (username === 'admin' && password === 'admin') {
            sessionService.set('user', 'admin');
        } else if (username === 'user' && password === 'user') {
            sessionService.set('user', 'user');
            sessionService.set('memberProfile', 0);
            window.location.href = '/hkcpm_demo/#/user';
        } else if (username === 'user1' && password === 'user1') {
            sessionService.set('user', 'user');
            sessionService.set('memberProfile', 1);
            window.location.href = '/hkcpm_demo/#/user';
        } else if (username === 'user2' && password === 'user2') {
            sessionService.set('user', 'user');
            sessionService.set('memberProfile', 2);
            window.location.href = '/hkcpm_demo/#/user';
        }
    };

    return (
        <>
            <div className="login-container">
                <a className="navbar-brand logo" href="#">
                    <img src="./hkcpmlogo.png" width="104" height="84" alt="" />
                </a>
                <div id="form1">
                    {/* <input type="hidden" name="_token" value="{{ csrf_token() }}" /> */}
                    <div className="login_form">
                        <div className="login_title">登入</div>
                        <div className="login_desc">請輸入你的電郵及密碼登入帳戶</div>
                        <div className="login_label">用戶名稱/電郵</div>
                        <div className="login_textbox">
                            <input name="account" className="form_textbox" type="text" placeholder="用戶名稱/電郵" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="login_label">密碼</div>
                        <div className="login_textbox">
                            <input name="password" className="form_textbox" type="password" placeholder="密碼" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="btn_group">
                            <button onClick={e => handleLogin(e)} className="sign-in-btn full-width">登入</button>
                            <div className="login_forget">
                                忘記密碼? &nbsp;
                                <Link className="login_link" to="/user/forget-password" relative="path">請按此處</Link>
                            </div>
                            <div className="login_register">
                                想建立新用戶? &nbsp;
                                <Link className="login_link" to="/user/forget-password" relative="path">請按此處</Link>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '50%' }}>

            </div>
        </>
    );
}

export default Login;