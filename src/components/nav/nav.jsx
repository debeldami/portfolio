import React from 'react';
import './nav.scss';
import NavIcon from '../nav-icon/navicon';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navcontents: [
        {
          name: 'HOME',
          classname: 'fa fa-home nav-icon nav-icon-home',
        },
        {
          name: 'ABOUT',
          classname: 'fa fa-user nav-icon nav-icon-user',
        },
        {
          name: 'SKILL',
          classname: 'fa fa-cog nav-icon nav-icon-cog',
        },
        {
          name: 'WORK',
          classname: 'fa fa-eye nav-icon nav=icon-eye',
        },
        {
          name: 'CONTACT',
          classname: 'fa fa-envelope nav-icon nav-icon-envelope',
        },
      ],
    };
  }

  render() {
    const { navcontents } = this.state;

    return (
      <nav className='nav'>
        {navcontents.map((navcontent, index) => (
          <NavIcon classname={navcontent.classname} key={index} />
        ))}
      </nav>
    );
  }
}

export default Nav;
