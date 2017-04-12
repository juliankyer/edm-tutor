import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';

export default class Video extends Component {
  static propTypes = {
    service: PropTypes.oneOf(['youtube']).isRequired,
    video: PropTypes.string.isRequired
  };
  
  static urlMap = new Map([['youtube', 'http://youtube.com/embed/']]);
  
  getIdFromVideoString(vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);
    
    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }
  
  render() {
    const { service, video, ...htmlTags } = this.props;
    const src = `${Video.urlMap.get(service)}${this.getIdFromVideoString(video)}`;
    return(
      <div>
        <h1>Video</h1>
        <iframe src={ src } 
                frameBorder='0'
                allowFullScreen
                {...htmlTags}
        />
      </div>
    );
  }
}