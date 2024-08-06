import React from 'react';
import './userHome.scss';
import { Link } from 'react-router-dom';

interface UserHomeProps {
    // Add any props you need here
}

const UserHome: React.FC<UserHomeProps> = () => {
    // Add your component logic here

    return (
        <div style={{ padding: '50px' }}>
            <div style={{ display: 'flex' }}>
                <Link className='item-wrapper' to='info' 
					
					style={{ width: '45%', height: '200px'}}>
                    <img src="./profile_homepage.svg" width="104" height="84" alt="" className="default-image" />
                    <img src="./profile_homepage_white.svg" width="104" height="84" alt="" className="hover-image" />
                    <div className='item-title'>
                        個人檔案
                    </div>
                    <div className='item-desc'>
                        查閱/更新你的個人檔案
                    </div>
                </Link>
                < Link className='item-wrapper' to='continuation' style={{ width: '45%', height: '200px', marginLeft: '20px' }}>
                    <img src="./renewal_homepage.svg" width="104" height="84" alt="" className="default-image" />
                    <img src="./renewal_homepage_white.svg" width="104" height="84" alt="" className="hover-image" />
                    <div className='item-title'>
                        會員的年度續訂
                    </div>
                    <div className='item-desc'>
                        續訂你的會籍以參與專業進修活動
                    </div>
                </Link>
            </div>
            <div style={{ display: 'flex' }}>
                < Link className='item-wrapper' to='payment' style={{ width: '45%', height: '200px', marginTop: '20px' }}>
                    <img src="./payment_homepage.svg" width="104" height="84" alt="" className="default-image" />
                    <img src="./payment_homepage_white.svg" width="104" height="84" alt="" className="hover-image" />
                    <div className='item-title'>
                        我的付款
                    </div>
                    <div className='item-desc'>
                        查閱/更新你的付款方式及明細
                    </div>
                </Link>
                < Link className='item-wrapper' to='learning' style={{ width: '45%', height: '200px', marginLeft: '20px', marginTop: '20px' }}>
                    <img src="./event_homepage.svg" width="104" height="84" alt="" className="default-image" />
                    <img src="./event_homepage_white.svg" width="104" height="84" alt="" className="hover-image" />
                    <div className='item-title'>
                        電子專業進修活動
                    </div>
                    <div className='item-desc'>
                        瀏覽/選擇你的電子專業進修活動
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserHome;