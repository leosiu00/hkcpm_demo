import React from 'react';
import './coursePaymentSuccess.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
import { Link, useNavigate } from 'react-router-dom';

const CoursePaymentSuccess: React.FC = () => {
	const navigate = useNavigate();
	let data;
    if (sessionService.get('user') === 'user') {
        data = dataService.get().userData[sessionService.get('memberProfile')];
        console.log(data);
    }
	
    return (
        <div className='payment-info-wrapper'>
            
            <div className='left-div'>
                <h1>你已成功付款。</h1>
                <div className='payment-entry'>
                    <p className='entry-title'>名稱</p>
                    <p className='entry-detail'>Professional Mediation Specialist Certification Training Course – Property and Building Management Mediation Specialist</p>
                </div>
                <div className='payment-entry'>
                    <p className='entry-title'>金額 (HKD)</p>
                    <div style={{paddingTop: '16px'}}>{data.role==='member'?'免費':'$3000'}</div>
                </div>
                <div className='payment-entry'>
                    <p className='entry-title'>參考編號</p>
                    <p className='entry-detail'>COUR24071901</p>
                </div>
                <Link to='/user' className='return-home-btn'>返回主頁</Link>
            </div>
            <div className='right-div'>
                <img src="./hkcpmlogo.png" width="312" height="252" alt="" />
            </div>
        </div>
    );
};

export default CoursePaymentSuccess;