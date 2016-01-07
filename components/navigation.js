import React from 'react';
import { Link } from 'react-router';

// const ACTIVE = { fontWeight: 'bold' };

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
      </div>
    );
  }
}
