import React, { createRef, Fragment, useEffect } from 'react';
import './userLayout.scss';
import { Link, Navigate, Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
const UserLayout = () => {
    const location = useLocation();
    const sideBarHidden = location?.pathname === '/user/continuation/payment' || location?.pathname === '/user/payment/success';
    const navigate = useNavigate();

    const logout = () => {
        navigate("/logoutSuccess");
        sessionStorage.removeItem('user');
    }
    return (
        <>
            <div className='nav-bar-wrapper'>
                <img style={{ marginLeft: '20px' }} src="./hkcpmlogo.png" width="104" height="84" alt="" />
                <div className='nav-end' style={{ display: 'flex', marginRight: '20px' }}>
                    <div style={{ marginLeft: '50px' }}>
                        陳大文 先生
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="side-menu-wrapper" hidden={sideBarHidden}>
                    <div>
                        <Link to='/user' className="sub-items ">
							<img src="./homepage_menu.svg" className="menu-icon" />
							<span>主頁</span>
						</Link>
                        <Link to='/user/info' className="sub-items" >
							<img src="./profile_menu.svg" className="menu-icon" />
							<span>個人檔案</span></Link>
                        <Link to='/user/continuation' className="sub-items">
							<img src="./renewal_menu.svg" className="menu-icon" />
							<span>會籍續訂</span></Link>
                        <Link to='/user/payment' className="sub-items">
							<img src="./payment_menu.svg" className="menu-icon" />
							<span>我的付款</span></Link>
                        <Link to='/user/learning' className="sub-items">
							<img src="./event_menu.svg" className="menu-icon" />
							<span>進修活動</span></Link>
                    </div>
                    <div className="side-menu-bottom">
                        <div className='logout-btn' onClick={logout}>登出</div>
                        <div className='side-bar-change-password'>更改密碼</div>
                    </div>
                </div>
                {<div className={`content-wrapper ${sideBarHidden ? 'full-width' : ''}`} >
                    <Outlet />
                </div>}
                <div className='right-menu-wrapper' hidden={location?.pathname !== '/user'} >
                    <div className='right-menu-title'>會員專區</div>
                    <div className='right-menu-item'>會員列表</div>
                    <div className='right-menu-item'>入會資格</div>
                    <div className='right-menu-item'>會費</div>
                    <div className='right-menu-item'>入會面試規則</div>
                    <div className='right-menu-item'>常用資料及網站</div>
                </div>
            </div>
        </>
    );
};

export default UserLayout;