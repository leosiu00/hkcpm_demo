import React, { useEffect } from 'react';
import './userLearning.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
import { useNavigate } from 'react-router-dom';

const UserLearning = () => {
	// Your code here
	const navigate = useNavigate();
	const categoryList = [{ value: 1, name: '類別一' }, { value: 2, name: '類別二' }, { value: 3, name: '類別三' }, { value: 4, name: '類別四' }, { value: 5, name: '類別五' }, { value: 6, name: '類別六' }];
	let courses: any;
	courses = sessionService.get('courseData');

	let data;
	let role: string;
	if (sessionService.get('user') === 'user') {
		data = dataService.get().userData[sessionService.get('memberProfile')];
		role = data['role'];
	}


	const [filteredCourses, setFilteredCourses] = React.useState(courses);
	const [btnStatus, setBtnStatus] = React.useState(true);
	const [isLanding, setIsLanding] = React.useState(false);
	const [selectedCategory, setSelectedCategory] = React.useState<string>('');

	const handleFieldFilter = (event: any) => {
		const value = event.target.value;
		let filtered = courses;
		if (value !== "") {
			filtered = courses.filter((c: any) => c.field.toString() === value);
		}
		setFilteredCourses(filtered);
	};

	useEffect(() => {
		let filtered = courses;
		if (selectedCategory !== "") {
			filtered = courses.filter((c: any) => c.cate.toString() === selectedCategory);
		}
		setFilteredCourses(filtered);
	}, [selectedCategory])

	const enableButton = (event: any) => {
		const elements = document.querySelectorAll('input[type=checkbox]') as NodeListOf<HTMLInputElement>;
		let checkedCount = 0;
		elements.forEach((element) => {

			if (element.checked) {
				console.log("checked");
				checkedCount++;
			}
		});
		if (checkedCount === 0) {
			setBtnStatus(true)
		} else {
			setBtnStatus(false)
		}
	};

	const redirectToPayment = (e: any) => {
		e.preventDefault();
		navigate("/user/course/payment");
	};

	return (
		<div className='wrapper'>
			<div className='title'>
				專業進修活動
			</div>
			{!isLanding && <div className='category-wrapper'>
				{categoryList.map((category) => (<div className='item-wrapper'
					onClick={() => { setIsLanding(true); setSelectedCategory(category.name) }}>
					<img src="./event_category.svg" width="104" height="84" alt="" className="default-image" />
					<img src="./event_category_white.svg" width="104" height="84" alt="" className="hover-image" />
					<div className='item-title'>
						{category.name}
					</div>
				</div>))}
			</div>}
			{isLanding && <div>
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
							<select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
								<option value="">所有</option>
								<option value="類別一">類別一</option>
								<option value="類別二">類別二</option>
								<option value="類別三">類別三</option>
								<option value="類別四">類別四</option>
								<option value="類別五">類別五</option>
								<option value="類別六">類別六</option>
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
				<button className='register-btn' disabled={btnStatus} onClick={redirectToPayment}>註冊所選活動</button>
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
									<th>參加</th>
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
										<td>{course.date + ' ' + course.time}</td>
										<td>{course.location}</td>
										<td>{course.aHour}</td>
										<td>{course.pHour}</td>
										<td>{role !== 'member' ? '$3000' : '免費'}</td>
										<td><input className='eventCheckbox' type="checkbox" onChange={enableButton} /></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>}
			
		</div>
	);
};

export default UserLearning;