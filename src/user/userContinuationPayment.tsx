import React from 'react';
import './userContinuationPayment.scss';
import { Link, useNavigate } from 'react-router-dom';

interface UserContinuationPaymentProps {
    // Define the props for your component here
}

const UserContinuationPayment: React.FC<UserContinuationPaymentProps> = (props) => {
    const navigate = useNavigate();
    return (
        // JSX code for your component's UI goes here
        <div className='payment-wrapper'>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>返回</div>
            <div className='title'>結帳</div>
            <div className='payment-detail'>
                <div className='left-div'>
                    <div className='payment-entry'>
                        <div>
                            課程名稱
                        </div>
                        <div>$3000</div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '30px' }}>
                            總結
                        </div>
                        <div className='payment-total'>
                            <div>
                                總共
                            </div>
                            <div>$3000</div>
                        </div>
                    </div>
                    <Link to='/user/payment/success' className='payment-btn'>付款</Link>
                    <div className='payment-terms'>Payment are secured and encrypted</div>
                </div>
                <div className='right-div'>
                    <div className='payment-info-title'>
                        顧客資料
                    </div>
                    <div>
                        姓: <input type="text" />
                    </div>
                    <div>
                        名: <input type="text" />
                    </div>
                    <div>
                        公司名稱: <input type="text" />
                    </div>
                    <div>
                        國家/地區: <input type="text" />
                    </div>
                    <div>
                        城市: <input type="text" />
                    </div>
                    <div>
                        街道: <input type="text" />
                    </div>
                    <div className='payment-info-title'>聯絡資料</div>
                    <div>
                        電郵: <input type="text" />
                    </div>
                    <div>
                        電話: <input type="text" />
                    </div>
                    <div>
                        <div className='payment-info-title'>付款方式</div>
                        <div className='radio-option'>
                            <input className='input-radio' type="radio" name="paymentMethod" value="credit" />
                            <label>
                                信用卡
                            </label>
                        </div>
                        <div>
                            <input className='input-radio' type="radio" name="paymentMethod" value="debit" />
                            <label>
                                借記卡
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContinuationPayment;