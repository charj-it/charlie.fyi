import React, { Component } from 'react';

export default class Image extends Component {
    render(props) {
        return(
              <figure onClick={this.handleClick.bind(this)}>
                <img src={this.props.image.src} alt={this.props.image.title} />
                <figcaption>{this.props.image.title}</figcaption>
              </figure>
            )
    }

    handleClick() {
      console.log(this.props.image)
      return(
        <div>
        </div>
      )
    }
}
