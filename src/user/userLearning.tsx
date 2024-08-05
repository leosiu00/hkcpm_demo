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
                <div >
					<table className='table'>
						<tr>
							<th>日期</th>
							<th>時間</th>
							<th>課程代碼</th>
							<th>課程名稱</th>
							<th>語言</th>
							<th>CPD時數</th>
							<th>類別</th>
							<th>能力</th>
							<th>類型</th>
							<th>費用(HKD)</th>
						</tr>
					</table>
                </div>
            </div>
        </div>
    );
};

export default UserLearning;