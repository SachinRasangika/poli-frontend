import React from 'react';
import  './sidebar.css';

const Sidebar = () => {
    return (
      <div>
        <nav className="menu" tabIndex={0}>
          <div className="smartphone-menu-trigger" />
          <header className="avatar">
            <img src="https://i.insider.com/5f778d302400440019129c6a?auto=webp&enable=upscale&fit=crop&quality=85&width=832&height=624" />
            <h2>John D.</h2>
          </header>
          <ul>
            <li tabIndex={0} className="icon-dashboard"><span>Dashboard</span></li>
            <li tabIndex={0} className="icon-customers"><span>Customers</span></li>
            <li tabIndex={0} className="icon-users"><span>Users</span></li>
            <li tabIndex={0} className="icon-settings"><span>Settings</span></li>
          </ul>
        </nav>
      </div>
    )
}


export default Sidebar

