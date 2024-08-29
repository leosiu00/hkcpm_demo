import React, { useEffect } from 'react';
import './adminPaymentDetail.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
// import {data as rawData} from '../importData/importData';
import { Link } from 'react-router-dom';

interface adminPaymentDetailProps {
    
}

const AdminPaymentDetail: React.FC<adminPaymentDetailProps> = () => {

	let courses: any;
	courses = sessionService.get('courseData');

	const [selectedFile, setSelectedFile] = React.useState<File | null>(null);


      return (
        <div className='userinfo-wrapper'>
            <div className='title'>
				<h2 className='no-border'>付款明細</h2>
            </div>

            <div className='input-field'>
                參考編號 <input type="text" value="004" disabled/>
            </div>               
			<div className='input-field'>
                會員編號<input type="text" value="000001" disabled/>
            </div>            
            <div className='input-field'>
                類別 <input type="text" value="課堂" disabled/>
            </div>            
            <div className='input-field'>
                付款狀態 <input type="text" value="等待退款中" disabled/>
            </div>            
            <div className='input-field'>
                付款日期 <input type="date" value="2024-02-02" disabled/>
            </div>              
			<div className='input-field'>
                退款日期 <input type="date" value="2024-02-03" disabled/>
            </div>            
            <div className='input-field'>
                金額(HKD) <input type="text" value="2200" disabled/>
            </div>            
            <div className='input-field'>
                退款原因 <input type="text" value="撞時間" disabled/>
            </div>                    
			
          
			<div>
				<h2></h2>
				<div className="submit-group">
				 <Link to='/admin/payment' className='b-white'>返回</Link>
				 <Link to='/admin/payment' className='b-green'>批准退款</Link>			
				 <Link to='/admin/payment' className='b-red'>拒絕退款</Link>			
				</div>
			</div>
        </div>
    );
};

export default AdminPaymentDetail;