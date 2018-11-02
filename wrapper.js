import SocialBox from './SocialBox';
import ReactDOM from 'react-dom';
import React from 'react';

const OceanWiseUGC = (hashtag, element, globalStyle=``, lgMax=``, xsMax=``) => {
  ReactDOM.render(<SocialBox tag={hashtag} globalStyle={globalStyle} lgMax={lgMax} xsMax={xsMax} />,
    element);
};

module.exports = OceanWiseUGC;
