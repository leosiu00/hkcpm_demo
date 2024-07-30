import React from 'react';
import './userLearning.scss';

const UserLearning = () => {
    // Your code here

    return (
        <div className='wrapper'>
            <div className='title'>
                電子專業進修活動
            </div>
            <div className='search-bar'>
                <div className='search-field'>
                    <div className='date-field'>
                        <div style={{ marginRight: '20px' }}>
                            類別:
                        </div>
                        <input type="text" />
                    </div>
                    <div className='date-field'>
                        <div style={{ marginRight: '20px' }}>
                            關鍵字:
                        </div>
                        <input type="text" />
                    </div>
                    <div className='date-field'>
                        <div style={{ marginRight: '20px' }}>
                            日期:
                        </div>
                        <input type="date" /> - <input type="date" />
                    </div>
                </div>
                <div className='search-row'>
                    <div className='search-btn'>搜索</div>
                    <div className='search-btn reset'>重置</div>
                </div>
            </div>
            <div className='register-btn'>註冊所選活動</div>
            <div className='search-item-wrapper'>
                <div className='search-item-titles'>
                    <div>日期</div>
                    <div>時間</div>
                    <div>課程代碼</div>
                    <div>課程名稱</div>
                    <div>語言</div>
                    <div>CPD時數</div>
                    <div>類別</div>
                    <div>能力</div>
                    <div>類型</div>
                    <div>費用(HKD)</div>
                </div>
            </div>
        </div>
    );
};

export default UserLearning;