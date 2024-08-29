import React, { useEffect } from 'react';
import './adminMemberInfo.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
// import {data as rawData} from '../importData/importData';
import { Link } from 'react-router-dom';

interface AdminMemberInfoProps {
    
}

const AdminMemberInfo: React.FC<AdminMemberInfoProps> = () => {

    let data;
    
	data = dataService.get().userData[0];
	console.log(data);
    

	const [selectedFile, setSelectedFile] = React.useState<File | null>(null);


    return (
        <div className='userinfo-wrapper'>
            <div className='title'>
				<h1 className='no-border'>續訂會員的年度申請表</h1>
            </div>            
			<div className='title'>
				<h2 className='no-border'>Applicant Information  個人資料</h2>
            </div>
			<div className='input-field'>
                會員編號 <input type="text" name="membershipNo" defaultValue={data?.membershipNo} disabled/>
            </div>			
			<div className='input-field'>
                會員類別 <input type="text" name="membershipType" defaultValue={data?.membershipType} disabled/>
            </div>
            <div className='input-field'>
                <div style={{ marginRight: '20px' }}>
                   Title 尊稱 
                </div>
                <select name="title" defaultValue={data.title} disabled>
					<option value="Mr">Mr.</option>
					<option value="Mrs">Mrs.</option>
					<option value="Miss">Miss</option>
					<option value="Dr">Dr.</option>
					<option value="Other">Other</option>
				</select>
            </div>
            <div className='input-field'>
                Date of Birth 出生日期 <input type="date" name="birthDate" disabled/>
            </div>
            <div className='input-field'>
                Surname  <input type="text" name="surName_en" defaultValue={data?.surName_en} disabled/>
            </div>
			<div className='input-field'>
                姓氏 <input type="text" name="surName_zh" defaultValue={data?.surName_zh} disabled/>
            </div>
			<div className='input-field'>
                Given Name   <input type="text" name="givenName_en" defaultValue={data?.givenName_en} disabled/>
            </div>
			<div className='input-field'>
                名字 <input type="text" name="givenName_zh" defaultValue={data?.givenName_zh} disabled/>
            </div>
            <div className='input-field'>
                Marital Status 婚姻狀況 <input type="text" defaultValue={data?.martialStatus} disabled/>
            </div>
            <div className='input-field'>
                Gender 性別 
				<select name="gender" defaultValue={data?.gender} disabled>
					<option value="M">Male</option>
					<option value="F">Female</option>					
				</select>
            </div>
            <div className='input-field'>
                Telephone 電話 
            </div>
			<div className='input-field'>
                Home 住宅 <input type="text" disabled />
            </div>
			<div className='input-field'>
                Office 公司 <input type="text" disabled />
            </div>
			<div className='input-field'>
                Mobile 手機 <input type="text" disabled />
            </div>
			<div className='input-field'>
                Email 電郵 <input type="email" disabled />
            </div>
			<div className='input-field'>
                Correspondence Address 聯絡地址 <textarea rows={5} disabled />
            </div>
			<div className='input-field'>
                Nationality 國藉 <input type="text" disabled />
            </div>
			<div className='input-field'>
               Passport/HKID No. 身份證件號碼 <input type="text" disabled />
            </div>
			<div>
				How did you know about Hong Kong Institute of Certified Property Managers? 你如何知道香港物業管理師學會？
			</div>
			<div>
				<input type="checkbox" id="horns" name="horns" disabled /><label>Friend/Family 朋友/家人</label>
			</div>
			<div>
				<input type="checkbox" id="horns" name="horns" disabled /><label>Career Fair 職業展覽 </label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" disabled /><label>Internet 網站</label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" disabled /><label>News/Magazine 報張/雜誌</label>
			</div>					
			<div>
				<input type="checkbox" id="horns" name="horns" disabled /><label>Other 其他</label>
			</div>
            <div>
                <h2>Academic Information 學歷資料</h2>
            </div>
            <div className='input-field'>
                Name of School/Institute Attended 院校名稱 <input type="text" disabled />
            </div>
            <div className='input-field'>
                Highest Qualification Obtained 最高學歷  <input type="text" disabled />
            </div>
            <div className='input-field'>
                Year of Obtained 獲取年份 <input type="number" min="1900" max="2099" step="1" value="2024" disabled />
            </div>
			<div>
                <h2>Qualification Information 專業資格資料</h2>
            </div>
			<div className='input-field'>
                Name of Professional Organization 專業團體名稱 <input type="text" disabled />
            </div>
            <div className='input-field'>
                Qualification Obtained 專業資格  <input type="text" disabled />
            </div>
            <div className='input-field'>
                Year of Obtained 獲取年份 <input type="number" min="1900" max="2099" step="1" value="2024" disabled />
            </div>
			<div>
                <h2>Work Experience Information 工作經驗資料</h2>
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" disabled />
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" disabled />
            </div>
			<div className='input-field'>
                To 至  <input type="date" disabled />
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} disabled/>
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" disabled/>
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" disabled/>
            </div>
			<div className='input-field'>
                To 至  <input type="date" disabled/>
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} disabled/>
            </div>
			<div className='input-field'>
                Name of Company 公司名稱  <input type="text" disabled/>
            </div>
			<div>Date of Employment 受聘日期</div>
            <div className='input-field'>
                From 由  <input type="date" disabled/>
            </div>
			<div className='input-field'>
                To 至  <input type="date" disabled/>
            </div>
            <div className='input-field'>
                Job Title & Duty 工作職位及職責 <textarea rows={5} disabled/>
            </div>
			<div>
                <h2>Documents 文件</h2>
            </div>
			<div>
                申請人身份證或護照影印本
			</div>
			<div>
				<input type='file' disabled onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					if (!event.target.files) return
						setSelectedFile(event.target.files[0]);
					}}/>
            </div>
			<div>
                一張 2 吋 x 1.5 吋相片
			</div>
			<div>
				<input type='file' disabled onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					if (!event.target.files) return
						setSelectedFile(event.target.files[0]);
					}}/>
            </div>
			<div>
                申請人的學歷證明、專業資格及工作經驗證明副本
			</div>
			<div>
				<input type='file' disabled onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					if (!event.target.files) return
						setSelectedFile(event.target.files[0]);
					}}/>
            </div>
			<div>
				<h2></h2>
				<div className="submit-group">
				 <Link to='/admin/member' className='b-white'>返回</Link>
				 <Link to='/admin/member' className='b-green'>批準</Link>			
				 <Link to='/admin/member' className='b-red'>拒絕</Link>			
				</div>
			</div>
        </div>
    );
};

export default AdminMemberInfo;