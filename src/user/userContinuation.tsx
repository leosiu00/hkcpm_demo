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
	
	const filledFormElement=  <a className='greyDownloadDiv' href='#/user/continuation' style={{width: '200px'}}><div><img src='./download_button.svg' height='20' alt='' /> </div><div><span>下載完整的年度申報表</span></div></a>;
	const redirectToUserInfo = <Link to='/user/info' className='greyDownloadDiv'>按此填妥會員申請表</Link>;
	const paymentFeeLink = <a className='greyDownloadDiv' target='_blank' href='https://www.hkcpm.org.hk/Member%20fee.html' >按此查看會費</a>;
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
					{data.membershipFee !==''?data.membershipFee:paymentFeeLink} 
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員狀態:
                </div>
				
				<div>
					{data?.membershipExpiry } 
				</div>
				<div  hidden={data.membershipExpiry !== ''}>
					未付款
				</div>
				<a className='greyDownloadDiv' href='#/user/continuation' hidden={data.membershipExpiry === ''}>
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
				{data.membershipForm !== ''?filledFormElement:redirectToUserInfo}
            </div>
            <Link to='payment' className='payment-btn'>
				{data.role==='member'?'付款續會':'付款並成為會員'}
            </Link>
            <div className='more-info'>
            <a href='https://www.hkcpm.org.hk/Member%20fee.html' target='_blank'>單擊以獲取有關年度更新事宜的更多信息</a>
            </div>
        </div>
    );
};

export default UserContinuation;