import React from 'react';
import './userLearning.scss';
import courseService from '../util/courseData.service';
import sessionService from '../util/storage.service';

const UserLearning = () => {
    // Your code here
	let courses:any;
	courses = sessionService.get('courseData');
	let a = 0;
	let b = 1;
	const [filteredCourses, setFilteredCourses] = React.useState(courses);

	const handleFieldFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = courses;
	  if(value  !== ""){		
		filtered = courses.filter((c:any) => c.field.toString()===value);
	  }
	  setFilteredCourses(filtered);
	};
	const handleCateFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = courses;
	  if(value  !== ""){		
		filtered = courses.filter((c:any) => c.cate.toString()===value);
	  }
	  setFilteredCourses(filtered);
	};

    return (
        <div className='wrapper'>
            <div className='title'>
                電子專業進修活動
            </div>
            <div className='search-bar'>
                <div className='search-field'>
                    <div className='date-field'>
                        <div style={{ marginRight: '20px' }}>
                            内容範疇:
                        </div>
						<select onChange={handleFieldFilter} >
							<option value="">所有</option>
							<option value="非核心">非核心</option>
							<option value="核心">核心</option>
						</select>                        
                    </div>
					<div className='date-field'>
                        <div style={{ marginRight: '20px' }}>
                            内容範疇分類:
                        </div>
                        <select onChange={handleCateFilter} >
							<option value="">所有</option>
							<option value="其他活動／課程">其他活動／課程</option>
							<option value="專業實務">專業實務</option>
						</select>  
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
						<thead>
							<tr>
								<th>活動／課程編號</th>
								<th>活動／課程名稱</th>
								<th>内容範疇</th>
								<th>内容範疇分類</th>
								<th>學習模式</th>
								<th>學習模式分類</th>
								<th>實體或網上</th>
								<th>日期及時間</th>
								<th>舉辦地點</th>
								<th>實際時數</th>
								<th>「計劃」認可時數</th>
								<th>費用(HKD)</th>
							</tr>
						</thead>
						<tbody className="course-content">
							{filteredCourses.map((course: any) => (
								<tr>
									<td>{course.code}</td>
									<td>{course.name}</td>
									<td>{course.field}</td>
									<td >{course.cate}</td>
									<td>{course.type}</td>
									<td>{course.learningCate}</td>
									<td>{course.online}</td>
									<td>{course.date +' '+ course.time}</td>
									<td>{course.location}</td>
									<td>{course.aHour}</td>
									<td>{course.pHour}</td>
									<td>{a===b?'':'免費'}</td>
								</tr>
							))}
						</tbody>
					</table>
                </div>
            </div>
        </div>
    );
};

export default UserLearning;