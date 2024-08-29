import React from 'react';
import './adminPayment.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface AdminPaymentProps {
    // Define the props for the UserPayment component here
}

const AdminPayment: React.FC<AdminPaymentProps> = () => {
    // Implement the UserPayment component logic here
	let payment: any;
	payment = sessionService.get('paymentData');
	
	const [filteredCourses, setFilteredCourses] = React.useState(payment);

	const handleFilter = (event : any) => {
	  const value = event.target.value;
	  let  filtered = payment;
	  if(value  !== ""){		
		filtered = payment.filter((c:any) => c.cate.toString() === value);
	  }
	  setFilteredCourses(filtered);
	};
	
	
	
    return (
        <div className='wrapper'>
            <div className='title'>
                所有付款
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
								<th>參考編號</th>
								<th>類別</th>
								<th>付款/退款日期</th>
								<th>付款狀態</th>
								<th>付款方式</th>
								<th>金額(HKD)</th>
								<th>退款原因</th>
								<th>查看</th>
							</tr>
						</thead>
						<tbody>
							{filteredCourses.map((payment: any) => (
								<tr>
									<td>{payment.code}</td>
									<td>{payment.cate}</td>
									<td>{payment.date}</td>
									<td>{payment.status}</td>
									<td>{payment.payment}</td>
									<td>{payment.price}</td>
									<td>{payment.reason}</td>
									<td><a href="#/admin/paymentDetail">查看明細</a></td>
								</tr>
							))}
						</tbody>

					</table>
                </div>
            </div>
        </div>
    );
};

export default AdminPayment;