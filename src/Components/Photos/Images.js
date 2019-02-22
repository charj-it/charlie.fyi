import React, { Component } from 'react';
import Image from './Image'

export default class Images extends Component {
    render(props) {
      let imageItems;

      if(this.props.images) {
        imageItems = this.props.images.map(image => {
          return (
            <Image key={image.title} image={image} />
          )
        })
      }

        return(
          <div className="Container Text-Center">
            <h1>{this.props.title}</h1>
            <div className="Image-gallery">
              {imageItems}
            </div>
          </div>
        );
    }
}
