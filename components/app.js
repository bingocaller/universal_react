import React from 'react';
import Navigation from './navigation';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to my App</h2>
        <Navigation></Navigation>
        { this.props.children }
      </div>
    );
  }
}
