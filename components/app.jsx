import React from 'react';
import Intro from './intro.jsx';
import Navigation from './navigation.jsx';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <Navigation></Navigation>
        <div className="main-content">
          <Intro></Intro>
          { this.props.children }
        </div>
      </div>
    );
  }
}
