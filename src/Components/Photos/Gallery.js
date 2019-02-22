import React, { Component } from 'react';
import Images from './Images';
import './Gallery.css'

export default class Gallery extends Component {

    constructor() {
      super();
      this.state = {
        images: []
      }
    }

    componentWillMount() {
      this.setState({images: [
        {
          src:   'http://68.media.tumblr.com/0c18790951ac28350919fb2a25dc0f02/tumblr_ncu893T0xo1r684oso1_1280.jpg',
          title: 'MK1 Golf GTi',
          tags:  ['cars']
        }, {
          src:   'https://c1.staticflickr.com/5/4427/36636251432_0a528792be_h.jpg',
          title: 'Rebel!',
          tags:  ['urbex', 'b&w']
        }, {
          src:   'https://c1.staticflickr.com/5/4419/35997571793_7a0aaceeda_b.jpg',
          title: 'Take a seat',
          tags:  ['street']
        }, {
          src:    'https://c1.staticflickr.com/5/4363/36409793400_7ce5ca382c_h.jpg',
          title:  'MS DOS VERSION 3.21 Floppy',
          tags:   ['urbex', 'technology']
        }, {
          src:    'https://c1.staticflickr.com/5/4317/36055283155_c661eab307_h.jpg',
          title:  'HM Coastguard on Snowdon - Wales, UK',
          tags:   ['outdoors','landscape']
        }, {
          src:    'https://c1.staticflickr.com/5/4293/35883630832_cf8d85d9de_h.jpg',
          title:  'Welsh Seaside',
          tags:   ['wales', 'beach']
        }, {
          src:    'https://c1.staticflickr.com/5/4375/35997569783_146e2fa802_h.jpg',
          title:  'MRI',
          tags:   ['urbex', 'b&w', 'medical ']
        }, {
          src:    'https://c1.staticflickr.com/5/4318/35665409840_d04d389240_h.jpg',
          title:  'Snowdon',
          tags:   ['outdoors', 'landscape']
        }, {
          src:    'http://78.media.tumblr.com/0d65124a2ef03964f5c6277dda2f10c3/tumblr_n5mckjOly71r684oso1_1280.jpg',
          title:  'BOSS Drift Team - BDC 2016'
        }
      ]
    });
  }

    render(props) {
        return(
          <section className="Photography Dark">
              <Images images={this.state.images} title="Photography" />
          </section>
        )
  }
}
