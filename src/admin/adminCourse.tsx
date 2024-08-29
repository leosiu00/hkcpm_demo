import React from 'react';
import './adminCourse.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface AdminCourseProps {
    // Define the props for the UserPayment component here
}

const AdminCourse: React.FC<AdminCourseProps> = () => {
    // Implement the UserPayment component logic here
	let courses: any;
	courses = sessionService.get('courseData');
	
	const [filteredCourses, setFilteredCourses] = React.useState(courses);

	const handleFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = courses;
	  if(value  !== ""){		
		filtered = courses.filter((c:any) => c.name.toString().includes(value));
	  }
	  setFilteredCourses(filtered);
	};
	
	
	
    return (
        <div className='wrapper'>
            <div className='title'>
                所有進修活動
            </div>
            <div className='search-bar'>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        活動／課程名稱:
                    </div>
                    <input type="text" onChange={handleFilter}  />
                </div>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        日期:
                    </div>
                    <input type="date" /> - <input type="date" />
                </div>
                <div className='search-row'>
                    <div className='search-btn'>搜索</div>
                    <div className='search-btn reset'>重置</div>
                </div>
            </div>
            <div className='search-item-wrapper'>
                <div >
						<table className='table'>
							<thead>
								<tr>
									<th>活動／課程編號</th>
									<th>活動／課程名稱</th>
									<th>參加人數</th>
									<th>參加名單</th>
									<th>修改</th>

								</tr>
							</thead>
							<tbody className="course-content">
								{filteredCourses.map((course: any) => (
									<tr>
										<td>{course.code}</td>
										<td>{course.name}</td>
										<td>{course.attendance}</td>										
										<td><a href="#/admin/courseAttendence">按此查看</a></td>
										<td><a href="#/admin/courseEdit">按此修改</a></td>
									</tr>
								))}
							</tbody>
						</table>
                </div>
            </div>
        </div>
    );
};

export default AdminCourse;