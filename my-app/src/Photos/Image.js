import React, { Component } from 'react';

export default class Image extends Component {
    render(props) {
        return(
              <article>
                <img src={this.props.src} alt={this.props.title} />
                <h2>{this.props.title}</h2>
              </article>
            )
    }
}
