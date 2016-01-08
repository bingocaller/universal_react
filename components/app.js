import React from 'react';
import Intro from './intro';
import Navigation from './navigation';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Intro></Intro>
        <Navigation></Navigation>
        { this.props.children }
      </div>
    );
  }
}
