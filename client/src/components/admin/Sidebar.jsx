import React from 'react';
import './Sidebar.scss';
import {
  MdLineStyle,
  MdPermIdentity,
  MdStorefront,
  MdAttachMoney,
  MdDynamicFeed,
  // MdTrendingUp,
  // MdBarChart,
  // MdMailOutline,
  // MdChatBubbleOutline,
  // MdWorkOutline,
  // MdTimeline,
  // MdReport,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Dashboard</h3>
          <ul className='sidebar__list'>
            <Link to='home' className='route-link'>
              <li className='sidebar__list-item active'>
                <MdLineStyle className='sidebar__icon' />
                Home
              </li>
            </Link>
            {/* <li className='sidebar__list-item'>
              <MdTimeline className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <MdTrendingUp className='sidebar__icon' />
              Sales
            </li> */}
          </ul>
        </div>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Quick Menu</h3>
          <ul className='sidebar__list'>
            <Link to='users' className='route-link'>
              <li className='sidebar__list-item'>
                <MdPermIdentity className='sidebar__icon' />
                Users
              </li>
            </Link>
            <Link to='products' className='route-link'>
              <li className='sidebar__list-item'>
                <MdStorefront className='sidebar__icon' />
                Products
              </li>
            </Link>
            <Link to='categories' className='route-link'>
              <li className='sidebar__list-item'>
                <MdDynamicFeed className='sidebar__icon' />
                Categories
              </li>
            </Link>
            <Link to='orders' className='route-link'>
              <li className='sidebar__list-item'>
                <MdAttachMoney className='sidebar__icon' />
                Orders
              </li>
            </Link>
            {/* <li className='sidebar__list-item'>
              <MdAttachMoney className='sidebar__icon' />
              Transactions
            </li>
            <li className='sidebar__list-item'>
              <MdBarChart className='sidebar__icon' />
              Reports
            </li> */}
          </ul>
        </div>
        {/* <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Notifications</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <MdMailOutline className='sidebar__icon' />
              Mail
            </li>
            <li className='sidebar__list-item'>
              <MdDynamicFeed className='sidebar__icon' />
              Feedback
            </li>
            <li className='sidebar__list-item'>
              <MdChatBubbleOutline className='sidebar__icon' />
              Messages
            </li>
          </ul>
        </div> 
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>staff</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <MdWorkOutline className='sidebar__icon' />
              Manage
            </li>
            <li className='sidebar__list-item'>
              <MdTimeline className='sidebar__icon' />
              Analytics
            </li>
            <li className='sidebar__list-item'>
              <MdReport className='sidebar__icon' />
              Reports
            </li>
          </ul>
        </div>*/}
      </div>
    </div>
  );
};

export default Sidebar;
