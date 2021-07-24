import { Button } from '@material-ui/core';
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
      <Twitter className='sidebarTwitterIcon' />
      {/* SidebarOption */}
      <SidebarOption text='Home' Icon={Home} active />
      <SidebarOption text='Explore' Icon={Search} />
      <SidebarOption text='Notifications' Icon={NotificationsNone} />
      <SidebarOption text='Messages' Icon={MailOutline} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorder} />
      <SidebarOption text='Lists' Icon={ListAlt} />
      <SidebarOption text='Profile' Icon={PermIdentity} />
      <SidebarOption text='More' Icon={MoreHoriz} />

      {/*Button  */}
      <Button variant='outlined' className='sidebarTweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
