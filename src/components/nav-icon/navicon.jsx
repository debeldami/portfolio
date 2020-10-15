import React from 'react';
import './navicon.scss';

class NavIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classname } = this.props;

    return (
      <a className='nav-li' href='#d'>
        <i className={classname} aria-hidden='true'></i>
      </a>
    );
  }
}

export default NavIcon;
