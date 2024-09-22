import React, { createRef, Fragment, useEffect } from 'react';
import './adminLayout.scss';
import { Link, Navigate, Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
const AdminLayout = () => {
    const location = useLocation();

	
	console.log(location?.pathname);
    const sideBarHidden = (location?.pathname === '/user/continuation/payment' || location?.pathname === '/user/payment/success' ||  location?.pathname === '/user/course/payment' || location?.pathname === '/user/payment/courseSuccess');
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
					<div>
						<img src="./notification_on.svg" width='30px' />
					</div>
                    <div style={{ marginLeft: '10px', marginTop: '5px'  }}>
                       Admin
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="side-menu-wrapper" hidden={sideBarHidden}>
                    <div>
                        <Link to='/admin' className={`sub-items ${location?.pathname=='/admin'?'green':''}`}>
							<img src="./homepage_menu.svg" className="menu-icon" />
							<span>主頁</span>
						</Link>
                        <Link to='/admin/member' className={`sub-items ${location?.pathname==='/admin/member'?'green':''}`} >
							<img src="./admin_admin.svg" className="menu-icon" />
							<span>查看所有會員</span></Link>
                        <Link to='/admin/payment' className={`sub-items ${location?.pathname==='/admin/payment'?'green':''}`}>
							<img src="./payment_menu.svg" className="menu-icon" />
							<span>查看所有付費</span></Link>
                        <Link to='/admin/course' className={`sub-items ${location?.pathname==='/admin/course'?'green':''}`}>
							<img src="./event_menu.svg" className="menu-icon" />
							<span>管理進修活動</span></Link>
                        <Link to='/admin/email' className={`sub-items ${location?.pathname==='/admin/email'?'green':''}`} style={{ display: 'none'}}>
							<img src="./admin_email_management.svg" className="menu-icon" />
							<span>管理電郵範本</span>
						</Link>                        
						<Link to='/admin/form' className={`sub-items ${location?.pathname==='/admin/form'?'green':''}`} style={{ display: 'none'}}>
							<img src="./admin_form_management.svg" className="menu-icon" />
							<span>管理表格</span></Link>
                    </div>
                    <div className="side-menu-bottom">
                        <div className='logout-btn' onClick={logout}>登出</div>
                        <div className='side-bar-change-password'>更改密碼</div>
                    </div>
                </div>
                {<div className={`content-wrapper ${sideBarHidden ? 'full-width' : ''}`} >
                    <Outlet />
                </div>}
            </div>
        </>
    );
};

export default AdminLayout;