import React from 'react';
import './adminMember.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface AdminMemberProps {
    // Define the props for the UserPayment component here
}

const AdminMember: React.FC<AdminMemberProps> = () => {
    // Implement the UserPayment component logic here
	let member: any;
	member = dataService.get().userData;
	console.log(member);
	
	
	const [filteredCourses, setFilteredCourses] = React.useState(member);

	const handleFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = member;
	  if(value  !== ""){		
		filtered = member.filter((c:any) => c.name.toString().includes(value));
	  }
	  setFilteredCourses(filtered);
	};
	
	
	
    return (
        <div className='wrapper'>
            <div className='title'>
                所有會員
            </div>
            <div className='search-bar'>
                <div className='date-field'>
                    <div style={{ marginRight: '20px' }}>
                        會員類別:
                    </div>
                    <input type="text" onChange={handleFilter}  />
					</div>
				 <div className='date-field'>
					<div style={{ marginRight: '20px' }}>
                        續約狀態:
                    </div>
                    <input type="text" onChange={handleFilter}  />
                </div>
                <div className='search-row'>
                    <div className='search-btn'>搜索</div>
                    <div className='search-btn reset'>重置</div>
                </div>
            </div>
            <div className='search-item-wrapper'>
                <div >
					<div className='search-row'>
						<div className='search-btn'>匯出會員資料</div>
					</div>

						<table className='table'>
							<thead>
								<tr>
									<th>會員編號</th>
									<th>會員名稱</th>
									<th>會員類別</th>
									<th>到期日</th>
									<th>續約狀態</th>
									<th>續訂會員的年度申請表</th>

								</tr>
							</thead>
							<tbody className="course-content">
								{filteredCourses.map((member: any) => (
									<tr>
										<td>{member.membershipNo}</td>
										<td>{member.surName_zh+member.givenName_zh+' '+member.surName_en+' '+member.givenName_en}</td>
										<td>{member.membershipType}</td>										
										<td>{member.membershipExpiryDate}</td>										
										<td>{member.membershipExpiry}</td>										
										<td><a href="#/admin/memberDetail">按此查看</a></td>									
									</tr>
								))}
							</tbody>
						</table>
                </div>
            </div>
        </div>
    );
};

export default AdminMember;