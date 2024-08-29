import React, { useEffect } from 'react';
import './adminCourseAttendence.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
// import {data as rawData} from '../importData/importData';
import { Link } from 'react-router-dom';

interface adminCourseAttendenceProps {
    
}

const AdminCourseAttendence: React.FC<adminCourseAttendenceProps> = () => {

	let courses: any;
	courses = sessionService.get('courseData');

	const [selectedFile, setSelectedFile] = React.useState<File | null>(null);


    return (
        <div className='userinfo-wrapper'>
            <div className='title'>
				<h2 className='no-border'>HKCPM/01/22</h2>
				<h2 className='no-border'>認別長者住戶正常老化</h2>
				<h2 className='no-border'>21/3/2024 19:00 至 21:00</h2>
            </div>            
			<a style={{ float: 'right' }} href='./#/admin/course'>
				返回
			</a>
			<div className='search-item-wrapper'>
				<div >
						<table className='table'>
							<thead>
								<tr>
									<th>會員編號</th>
									<th>名稱</th>
									<th>會員類別</th>
									<th>已付款</th>
									<th>已出席</th>

								</tr>
							</thead>
							<tbody className="course-content">								
								<tr>
									<td>000001</td>
									<td>Chan Tai Man 陳大文</td>
									<td>Ordinary 普通會員</td>
									<td>是</td>
									<td>是</td>
								</tr>	
								<tr>
									<td>000002</td>
									<td>Chan Siu Man 陳小文</td>
									<td>Non-member 非會員</td>
									<td>否</td>
									<td>否</td>
								</tr>								
							</tbody>
						</table>
				</div>
			</div>
		</div>
    );
};

export default AdminCourseAttendence;