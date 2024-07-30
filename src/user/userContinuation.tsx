import React from 'react';
import './userContinuation.scss';
import { Link } from 'react-router-dom';

interface UserContinuationProps {
    // Add any props you need for the component here
}

const UserContinuation: React.FC<UserContinuationProps> = (props) => {
    // Add your component logic here

    return (
        <div className='wrapper' style={{ padding: '50px' }}>
            <div className='title'>
                會員的年度續訂
            </div>
            <div className='field'>
                <div className='field-title'>
                    名稱:
                </div>
                <input type="text" />
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員編號:
                </div>
                <input type="text" />
            </div>
            <div className='field'>
                <div className='field-title'>
                    續約狀態:
                </div>
                <input type="text" />
            </div>
            <div className='field'>
                <div className='field-title'>
                    會員年費:
                </div>
                <input type="text" />
            </div>
            <div className='field'>
                <div className='field-title'>
                    續訂會員的年度申請表:
                </div>
                <input type="text" />
            </div>
            <Link to='payment' className='payment-btn'>
                付款續會
            </Link>
            <div className='more-info'>
            <a href='https://www.hkcpm.org.hk/Member%20fee.html'>單擊以獲取有關年度更新事宜的更多信息</a>
            </div>
        </div>
    );
};

export default UserContinuation;