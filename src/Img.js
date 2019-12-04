import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return <div>
          <h3>Hi there</h3>
          <img src={this.props.src} alt="dfd"/>
       </div>;
    }
  }
  export default Image;