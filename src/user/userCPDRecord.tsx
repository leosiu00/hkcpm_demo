import React from 'react';
import './userCPDRecord.scss';
import { Barplot } from '../util/Barplot';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';

interface UserCPDRecordProps {
    // Define the props for the component here
}

const UserCPDRecord: React.FC<UserCPDRecordProps> = (props) => {
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
            <div className='title'>CPD Policy</div>
            <div className='chart-wrapper'>
                <div className='left-div'>
                    <p>
                        In order to comply with RICS policy, you must complete at least 10.0 hours of formal CPD, and 20.0 total hours of CPD each calendar year.
                    </p>
                    <p>
                        All members must complete 20.0 hours of CPD activities by 31 December and you have until 31 January to record your completed activities online. CPD activities recorded online after the 31 January will not count towards your CPD recording requirements.
                    </p>
                </div>
                <div className='right-div'>
                    <Barplot data={data} width={width} height={height} />
                </div>
            </div>
            <div className="btn_group">
                <button className="sign-in-btn btn">Upload CPD</button>
                <button className="sign-in-btn btn">Export CPD to Excel</button>
                <button className="sign-in-btn btn">Add new</button>
            </div>
        </div>
    );
};

export default UserCPDRecord;