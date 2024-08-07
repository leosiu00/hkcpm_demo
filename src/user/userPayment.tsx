import React from 'react';
import './userPayment.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface UserPaymentProps {
    // Define the props for the UserPayment component here
}

const UserPayment: React.FC<UserPaymentProps> = () => {
    // Implement the UserPayment component logic here
    let data;
    if (sessionService.get('user') === 'user') {
        data = dataService.get().userData[sessionService.get('memberProfile')];
    }
	let courses =  data['courses'];
	
	const [filteredCourses, setFilteredCourses] = React.useState(courses);

	const handleFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = courses;
	  if(value  !== ""){		
		filtered = courses.filter((c:any) => c.cate.toString() === value);
	  }
	  setFilteredCourses(filtered);
	};
	
	
	
    return (
        <div className='wrapper'>
            <div className='title'>
                我的付款
            </div>
            <div className='search-bar'>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        類別:
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
								<th>類別</th>
								<th>確認/退款日期</th>
								<th>參考編號</th>
								<th>付款/退款明細</th>
								<th>退款方式</th>
								<th>金額(HKD)</th>
								<th>退款原因</th>
								<th>下載</th>
							</tr>
						</thead>
						<tbody>
							{filteredCourses.map((course: any) => (
								<tr>
									<td>{course.cate}</td>
									<td>{course.date}</td>
									<td>{course.code}</td>
									<td className='green'>{course.status}</td>
									<td>{course.payment}</td>
									<td>{course.price}</td>
									<td>{course.reason}</td>
									<td><img src='./download_button.svg' height="20" alt="" /></td>
								</tr>
							))}
						</tbody>

					</table>
                </div>
            </div>
        </div>
    );
};

export default UserPayment;