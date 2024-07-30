import React from 'react';
import './userPayment.scss';

interface UserPaymentProps {
    // Define the props for the UserPayment component here
}

const UserPayment: React.FC<UserPaymentProps> = () => {
    // Implement the UserPayment component logic here

    return (
        <div className='wrapper'>
            <div className='title'>
                我的付款
            </div>
            <div className='search-bar'>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        類別:
                    </div>
                    <input type="text" />
                </div>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        日期:
                    </div>
                    <input type="date" /> - <input type="date" />
                </div>
                <div className='search-row'>
                    <div className='search-btn'>搜索</div>
                    <div className='search-btn reset'>重置</div>
                </div>
            </div>
            <div className='search-item-wrapper'>
                <div className='search-item-titles'>
                <div>類別</div>
                <div>確認/退款日期</div>
                <div>參考編號</div>
                <div>付款/退款明細</div>
                <div>退款方式</div>
                <div>金額(HKD)</div>
                <div>退款原因</div>
                <div>下載</div>
                </div>
            </div>
        </div>
    );
};

export default UserPayment;