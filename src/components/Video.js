import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';

export default class Video extends Component {
  
  getId(vid) {
    const urlArray = vid.split('/');
    const idString = urlArray[urlArray.length - 1];
    const queryParams = qs.extract(vid);
    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }
  
  render() {
    const { service, video, ...htmlTags } = this.props;
    const src = `https://youtube.com/embed/${this.getId(video)}?autoplay=1&controls=0&showinfo=0&autohide=1`;
    return(
      <div>
        <iframe src={ src } 
                frameBorder='0'
                allowFullScreen
                {...htmlTags}
        />
      </div>
    );
  }

  static propTypes = {
    service: PropTypes.oneOf(['youtube']).isRequired,
    video: PropTypes.string.isRequired
  };
}

