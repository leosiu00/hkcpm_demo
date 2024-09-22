import React from 'react';
import './userCPDRecord.scss';
import { Barplot } from '../util/Barplot';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface UserCPDRecordProps {
    // Define the props for the component here
}

const UserCPDRecord: React.FC<UserCPDRecordProps> = (props) => {
	
	let courses: any;
	courses = sessionService.get('courseData');
	console.log(courses)
	
	const [filteredCourses, setFilteredCourses] = React.useState(courses);
	
    const memberProfile = dataService.get()?.userData[sessionService.get('memberProfile')];
    console.log(memberProfile)
    const data = [
        { name: "Formal CPD", value: memberProfile.formalCPDHrs },
        { name: "Informal CPD", value: memberProfile.informalCPDHrs },
        { name: "Total", value: memberProfile.formalCPDHrs + memberProfile.informalCPDHrs }
    ]
    
    const { width, height } = { width: 300, height: 300 };

    return (
        <div className='record-wrapper'>
            <div className='title'>CPD 紀錄</div>
            <div className='chart-wrapper'>
                <div className='left-div'>

                </div>
                <div className='right-div'>
                    <Barplot data={data} width={width} height={height} />
                </div>
            </div>
            <div className="btn_group">
                <button className="sign-in-btn btn">上載 CPD</button>
                <button className="sign-in-btn btn">匯出 CPD 至 Excel</button>
                <button className="sign-in-btn btn">新增CDP紀錄</button>
            </div>
			<div className='search-item-wrapper'>
                <div >
					<table className='table'>
						<thead>
							<tr>
								<th>活動／課程名稱</th>
								<th>日期</th>
								<th>學習模式</th>
								<th>時數</th>
								<th>狀態</th>
								<th>行動</th>

							</tr>
						</thead>
						<tbody>
							{filteredCourses.map((course: any) => (
								<tr>
									<td>{course.name}</td>
									<td>{course.date + ' ' + course.time}</td>
									<td>{course.type}</td>
									<td>{course.aHour}</td>
									<td>已完成</td>
									<td>
									<img src='./information-button.svg' height="20" alt="" />
									<img src='./delete-button.svg' height="20" alt="" />
									</td>
									
								</tr>
							))}
						</tbody>

					</table>
                </div>
            </div>
			<div>
				<table className='year-selection'>
					<thead>
						<tr>
							<th className='year-2023'>2023</th>
							<th className='year-2024'>2024</th>
						</tr>
					</thead>
				</table>

			</div>
        </div>
    );
};

export default UserCPDRecord;