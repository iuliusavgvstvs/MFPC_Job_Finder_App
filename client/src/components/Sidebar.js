import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import React from 'react';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <header>
            <Logo className="width:100px" />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id } = link;

              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  key={id}
                >
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
