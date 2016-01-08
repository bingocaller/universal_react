import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <Link className="navigation-link" activeClassName={ 'active' } to="/">Home</Link>
          <Link className="navigation-link" activeClassName={ 'active' } to="/about">About</Link>
          <Link className="navigation-link" activeClassName={ 'active' } to="/test">Test</Link>
        </nav>
      </div>
    );
  }
}
