import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Videos.css';

class Videos extends Component {
    render() {
        return(
          <section className="Container Intro Text-Center PadTopLarge PadBotXLarge MarTopLarge">
            <h1>Video</h1>
            <YouTube videoId="QaEaLhaF1C8" className="Container-Video" />
            <YouTube videoId="ckq_UbFCKIg" className="Container-Video" />
            <YouTube videoId="3qpKuMsy5_0" className="Container-Video" />
            <YouTube videoId="-pMs2Hbi3Ro" className="Container-Video" />
            <YouTube videoId="PmqXq74yNCc" className="Container-Video" />
            <YouTube videoId="sT8zS-o9ZkQ" className="Container-Video" />
            <YouTube videoId="t3hwue8rvac" className="Container-Video" />
          </section>
        )
    }
}

export default Videos;
