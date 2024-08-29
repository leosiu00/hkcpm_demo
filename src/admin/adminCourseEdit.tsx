import React, { useEffect } from 'react';
import './adminCourseEdit.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
// import {data as rawData} from '../importData/importData';
import { Link } from 'react-router-dom';

interface AdminCourseEditProps {
    
}

const AdminCourseEdit: React.FC<AdminCourseEditProps> = () => {


	const [selectedFile, setSelectedFile] = React.useState<File | null>(null);


    return (
        <div className='userinfo-wrapper'>
            <div className='title'>
				<h2 className='no-border'>修改活動</h2>
            </div>

            <div className='input-field'>
                活動／課程編號 <input type="text" value="HKCPM/01/22"/>
            </div>            
			<div className='input-field'>
                活動／課程名稱(中文) <input type="text" value="認別長者住戶正常老化"/>
            </div>			
			<div className='input-field'>
                活動／課程名稱(英文) <input type="text" value="Identifying normal aging in elderly residents"/>
            </div>			
			<div className='input-field'>
                活動／課程名稱(簡體) <input type="text" value="认别长者住户正常老化"/>
            </div>
			<div className='input-field'>
                内容範疇 
				<select>
					<option>非核心</option>
					<option>核心</option>
				</select>
            </div>
			<div className='input-field'>
                内容範疇分類 
				<select>
					<option>類別一</option>
					<option>類別二</option>
					<option>類別三</option>
					<option>類別四</option>
					<option>類別五</option>
					<option>類別六</option>
				</select>
            </div>
			<div className='input-field'>
                學習模式 
				<select>
					<option>正式</option>
					<option>非正式</option>
				</select>
            </div>
			<div className='input-field'>
                學習模式分類 
				 <select>
					<option>講座／會議／研討會／工作坊</option>
					<option>課程（包括全日制、兼讀制、遙距及網上課程）</option>
				</select>
			</div>
			<div className='input-field'>
               實體或網上 
			   <select>
					<option>實體</option>
					<option>網上</option>
				</select>
            </div>
			<div className='input-field'>
                日期 <input type="date" value="2024-03-21"/>
            </div>
			<div className='input-field'>
                開始時間 <input type="time" value="19:00"/>
            </div>
			<div className='input-field'>
                結束時間 <input type="time" value="21:00"/>
            </div>
			<div className='input-field'>
                舉辦地點(中文) <input type="text" value="香港鴨脷洲利東邨東昌樓地下101-107室"/>
            </div>			
			<div className='input-field'>
                舉辦地點(英文) <input type="text" value="Room 101-107, G/F, Tung Cheong House, Lei Tung Estate, Ap Lei Chau, Hong Kong"/>
            </div>			
			<div className='input-field'>
                舉辦地點 (簡體)<input type="text" value="香港鸭脷洲利东村东昌楼地下101-107室"/>
            </div>
			<div className='input-field'>
                實際時數 <input type="number" value="2"/>
            </div>
			<div className='input-field'>
                「計劃」認可時數 <input type="number" value="2"/>
            </div>
			<div className='input-field'>
                費用(HKD) <input type="number" value="3000"/>
            </div>			
			<div className='input-field'>
                可報名 
				<select>
					<option>是</option>
					<option>否</option>
				</select>
            </div>
          
			<div>
				<h2></h2>
				<div className="submit-group">
				 <Link to='/admin/course' className='b-white'>取消</Link>
				 <Link to='/admin/course' className='b-black'>儲存</Link>			
				</div>
			</div>
        </div>
    );
};

export default AdminCourseEdit;