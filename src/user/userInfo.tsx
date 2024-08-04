import React from 'react';
import './userInfo.scss';

interface UserInfoProps {
}

const UserInfo: React.FC<UserInfoProps> = () => {
    return (
        <div className='wrapper'>
            <div className='title'>
				<div>Applicant Information  個人資料</div>
            </div>
            <div className='input-field'>
                <div style={{ marginRight: '20px' }}>
                   Title 尊稱 
                </div>
                <select name="title">
					<option value="Mr">Mr.</option>
					<option value="Mrs">Mrs.</option>
					<option value="Miss">Miss</option>
					<option value="Dr">Dr.</option>
					<option value="Other">Other</option>
				</select>
            </div>
            <div className='input-field'>
                Date of Birth 出生日期 <input type="date" name="birthDate"/>
            </div>
            <div className='input-field'>
                Surname  <input type="text" name="surname_en"/>
            </div>
			<div className='input-field'>
                姓氏 <input type="text" name="surname_zh"/>
            </div>
			<div className='input-field'>
                Given Name   <input type="text" name="givenName_en"/>
            </div>
			<div className='input-field'>
                名字 <input type="text" name="givenName_zh"/>
            </div>
            <div className='input-field'>
                Marital Status 婚姻狀況 <input type="text" />
            </div>
            <div className='input-field'>
                Gender 性別 
				<select name="gender">
					<option value="M">Male</option>
					<option value="F">Female</option>					
				</select>
            </div>
            <div className='input-field'>
                Telephone 電話 
            </div>
			<div className='input-field'>
                Home 住宅 <input type="text" />
            </div>
			<div className='input-field'>
                Office 公司 <input type="text" />
            </div>
			<div className='input-field'>
                Mobile 手機 <input type="text" />
            </div>
			<div className='input-field'>
                Email 電郵 <input type="email" />
            </div>
			<div className='input-field'>
                Correspondence Address 聯絡地址 <textarea rows={5} />
            </div>
			<div className='input-field'>
                Nationality 國藉 <input type="text" />
            </div>
			<div className='input-field'>
               Passport/HKID No. 身份證件號碼 <input type="text" />
            </div>
			<div>
				How did you know about Hong Kong Institute of Certified Property Managers? 你如何知道香港物業管理師學會？
			</div>
			<div>
				<input type="checkbox" id="horns" name="horns" /><label>Friend/Family 朋友/家人</label>
			</div>
			<div>
				<input type="checkbox" id="horns" name="horns" /><label>Career Fair 職業展覽 </label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" /><label>Internet 網站</label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" /><label>News/Magazine 報張/雜誌</label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" /><label>Other 其他</label>
			</div>
            <div>
                <h2>Academic Information 學歷資料</h2>
            </div>
            <div className='input-field'>
                Name of School/Institute Attended 院校名稱 <input type="text" />
            </div>
            <div className='input-field'>
                Highest Qualification Obtained 最高學歷  <input type="text" />
            </div>
            <div className='input-field'>
                Year of Obtained 獲取年份 <input type="number" min="1900" max="2099" step="1" value="2024" />
            </div>
			<div>
                <h2>Qualification Information 專業資格資料</h2>
            </div>
			<div className='input-field'>
                Name of Professional Organization 專業團體名稱 <input type="text" />
            </div>
            <div className='input-field'>
                Qualification Obtained 專業資格  <input type="text" />
            </div>
            <div className='input-field'>
                Year of Obtained 獲取年份 <input type="number" min="1900" max="2099" step="1" value="2024" />
            </div>
			<div>
                <h2>Work Experience Information 工作經驗資料</h2>
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" />
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" />
            </div>
			<div className='input-field'>
                To 至  <input type="date" />
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} />
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" />
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" />
            </div>
			<div className='input-field'>
                To 至  <input type="date" />
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} />
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" />
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" />
            </div>
			<div className='input-field'>
                To 至  <input type="date" />
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} />
            </div>



        </div>
    );
};

export default UserInfo;