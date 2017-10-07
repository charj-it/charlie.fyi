import React, { Component } from 'react';
import Image from './Image';


var images = {
  1 : {
    'src':   'http://68.media.tumblr.com/0c18790951ac28350919fb2a25dc0f02/tumblr_ncu893T0xo1r684oso1_1280.jpg',
    'title': 'MK1 Golf GTi',
    'tags':  ['cars']
  }, 2 : {
    'src':   'https://c1.staticflickr.com/5/4427/36636251432_0a528792be_h.jpg',
    'title': 'Rebel!',
    'tags':  ['urbex', 'b&w']
  }, 3 : {
    'src':   'https://c1.staticflickr.com/5/4419/35997571793_7a0aaceeda_b.jpg',
    'title': 'Take a seat',
    'tags':  ['street']
  }, 4 : {
    'src':    'https://c1.staticflickr.com/5/4363/36409793400_7ce5ca382c_h.jpg',
    'title':  'MS DOS VERSION 3.21 Floppy',
    'tags':   ['urbex', 'technology']
  }, 5 : {
    'src':    'https://c1.staticflickr.com/5/4317/36055283155_c661eab307_h.jpg',
    'title':  'HM Coastguard on Snowdon - Wales, UK',
    'tags':   ['outdoors','landscape']
  }
}

export default class Gallery extends Component {
  // TODO !! Doing a for loop doesn't work here     find out how to loop through
  //                                                an object that has been passed
  //                                                in, ideally in a seperate file
  //                                                too =]
  // for(image in images) {
    render(props) {
        return(
              <Image title ="{image.title}" src="{image.src}" />
        )
    // }
  }
}
