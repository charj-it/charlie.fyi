import React, { Component } from 'react';

export default class Modal extends Component {

    render(props) {
      console.log(this.props.image);
        return(
          <div className='Modal'>
            {this.props.image}
          </div>
        );
    }
}
