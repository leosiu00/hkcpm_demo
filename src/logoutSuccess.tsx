import React from 'react';
import './logoutSuccess.scss';
import { Link } from 'react-router-dom';

const LogoutSuccess: React.FC = () => {
    return (
        <>
            <div className="login-container">
                <a className="navbar-brand logo" href="#">
                    <img src="./hkcpmlogo.png" width="104" height="84" alt="" />
                </a>
                <div className='return-btn'> 返回</div>
                <div className='login-form'>
                    <h1>你已成功登出</h1>
                    <p>歡迎你再次瀏覽</p>
                    <div className='next-step-wrapper'>
                        <Link to='/' className='re-login-btn'>
                            <div>
                                再次登入
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoutSuccess;