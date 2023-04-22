import React from 'react';
import '../CSS/Dashboard.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person2Icon from '@mui/icons-material/Person2';
import GroupsIcon from '@mui/icons-material/Groups';
import DoneIcon from '@mui/icons-material/Done';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="boxes">
        <LocationOnIcon />
        <div className="boxItem">
            <span>4<span>+</span></span>
            <h3>Service Points</h3>
        </div>
      </div>
      <div className="boxes">
        <Person2Icon />
        <div className="boxItem">
            <span>25<span>+</span></span>
            <h3>Engineer & Workers</h3>
        </div>
      </div>
      <div className="boxes">
        <GroupsIcon />
        <div className="boxItem">
            <span>500<span>+</span></span>
            <h3>Happy Clients</h3>
        </div>
      </div>
      <div className="boxes">
        <DoneIcon />
        <div className="boxItem">
            <span>100<span>+</span></span>
            <h3>Projects Completed</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;