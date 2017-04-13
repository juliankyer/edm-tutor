import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import Splash from '../data/Splash';

export default class Video extends Component {
  
  static urlMap = new Map(Splash);
  
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

