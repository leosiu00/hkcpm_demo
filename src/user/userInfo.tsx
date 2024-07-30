import React from 'react';
import './userInfo.scss';

interface UserInfoProps {
}

const UserInfo: React.FC<UserInfoProps> = () => {
    return (
        <div className='wrapper'>
            <div className='title'>
                <div>個人資料</div>
            </div>
            <div className='input-field'>
                <div style={{ marginRight: '20px' }}>
                    名稱:
                </div>
                <input type="text" />
            </div>
            <div className='input-field'>
                標題: <input type="text" />
            </div>
            <div className='input-field'>
                會員編號: <input type="text" />
            </div>
            <div className='input-field'>
                工作地點: <input type="text" />
            </div>
            <div className='input-field'>
                雇主名稱: <input type="text" />
            </div>
            <div className='input-field'>
                職位: <input type="text" />
            </div>
            <div>
                <h2>聯繫方式</h2>
            </div>
            <div className='input-field'>
                通信地址: <input type="text" />
            </div>
            <div>
                居住地址
            </div>
            <div className='input-field'>
                國家: <input type="text" />
            </div>
            <div className='input-field'>
                地址: <input type="text" />
            </div>
            <div className='input-field'>
                工作地址: <input type="text" />
            </div>
            <div className='input-field'>
                地址: <input type="text" />
            </div>
            <div>
                電子郵件
            </div>
            <div>
                手提電話
            </div>
            {/* <div>接受有關物業管理學會的通訊</div>
            <div>接受短訊</div>
            <div>其他專業認可機構的現任成員</div>
            <div>目前的就業狀況</div>
            <div>工作狀態</div>
            <div>雇主類型</div>
            <div>雇員規模</div>
            <div>堂前就業細節</div>
            <div>最高學歷</div>
            <div style={{ display: 'flex' }}>
                <div>取消</div>
                <div>儲存</div>
            </div> */}

        </div>
    );
};

export default UserInfo;