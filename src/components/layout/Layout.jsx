import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import Header from './Header';

function Layout() {
    return (
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="sidenav">
            <SideNav />
          </div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      </div>
    );
}

export default Layout;
