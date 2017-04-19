import React from 'react';
import { shallow } from 'enzyme';

import Video from '../../components/Video';

describe('Video component', () => {
  it('should turn youtube url into embeded url', () => {
    const wrapper = shallow(<Video video='https://www.youtube.com/watch?v=9oj1FTuscnY&list=PL71067954340BBA04&index=4'
                                   service='youtube'
 />);
    expect(wrapper.find('iframe').props().src).toEqual('https://youtube.com/embed/9oj1FTuscnY?autoplay=0&controls=0&showinfo=0&autohide=1');
  });
});

