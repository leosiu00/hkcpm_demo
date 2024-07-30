import React from 'react';
import './userPaymentSuccess.scss';
import { Link } from 'react-router-dom';

const UserPaymentSuccess: React.FC = () => {
    return (
        <div className='payment-info-wrapper'>
            
            <div className='left-div'>
                <h1>你已成功付款。</h1>
                <div className='payment-entry'>
                    <p className='entry-title'>課程名稱</p>
                    <p className='entry-detail'>課程名稱</p>
                </div>
                <div className='payment-entry'>
                    <p className='entry-title'>金額 (HKD)</p>
                    <p className='entry-detail'>$2200</p>
                </div>
                <div className='payment-entry'>
                    <p className='entry-title'>參考編號</p>
                    <p className='entry-detail'>COUR24071901</p>
                </div>
                <Link to='/user' className='return-home-btn'>返回主頁</Link>
            </div>
            <div className='right-div'>
                <img src="/hkcpmlogo.png" width="312" height="252" alt="" />
            </div>
        </div>
    );
};

export default UserPaymentSuccess;