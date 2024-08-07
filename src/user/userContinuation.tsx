import React from 'react';
import './userContinuation.scss';
import { Link } from 'react-router-dom';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface UserContinuationProps {
    // Add any props you need for the component here
}

const UserContinuation: React.FC<UserContinuationProps> = (props) => {
    // Add your component logic here
    let data;
	
    if (sessionService.get('user') === 'user') {
        data = dataService.get().userData[sessionService.get('memberProfile')];
    }
	
    return (
        <div className='wrapper' style={{ padding: '50px' }}>
            <div className='title'>
                會員的年度續訂
            </div>
            <div className='field'>
                <div className='field-title'>
                    名稱:
                </div>
                <div>
					{data?.surName_en+ ' '+data?.givenName_en } 
				</div>
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員編號:
                </div>
                <div>
					{data?.membershipNo} 
				</div>
            </div>
			<div className='field'>
                <div className='field-title'>
                    會員類別:
                </div>
                <div>
					{data?.membershipType} 
				</div>
            </div>
			<div className='field'>
                <div className='field-title'>
                    到期日:
                </div>
                <div>
					{data?.membershipExpiryDate } 
				</div>
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員年費:
                </div>
                 <div>
					{data?.membershipFee } 
				</div>
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員狀態:
                </div>
				<div>
					{data?.membershipExpiry } 
				</div>
				<a className='greyDownloadDiv' href='#/user/continuation'>
					<div>
						<img src='./download_button.svg' height="20" alt="" /> 
					</div>
					<div><span>下載收據</span></div>
				</a>
            </div>
            <div className='field'>
                <div className='field-title'>
                    續訂會員的年度申請表:
                </div>
				<div>
					{data?.membershipForm } 
				</div>
                <a className='greyDownloadDiv' href='#/user/continuation' style={{width: '200px'}}>
					<div>
						<img src='./download_button.svg' height="20" alt="" /> 
					</div>
					<div><span>下載完整的年度申報表</span></div>
				</a>
            </div>
            <Link to='payment' className='payment-btn'>
                付款續會
            </Link>
            <div className='more-info'>
            <a href='https://www.hkcpm.org.hk/Member%20fee.html' target='_blank'>單擊以獲取有關年度更新事宜的更多信息</a>
            </div>
        </div>
    );
};

export default UserContinuation;