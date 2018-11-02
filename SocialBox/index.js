/**
*
* SocialBox
*
*/

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from './Paper';

class SocialBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      social: [],
      width: 0,
      height: 0,
      mobile: false,
      tablet: false,
      desk: false,
    };
    this.getApproved = this.getApproved.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.getApproved();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getApproved(), 10000);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 768) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false, tablet: false, desk: true });
    }
  }

  // Gets approved posts, with the hashtag 'beoceanwise' from the OW UGC admin app
  getApproved() {
    axios.post('https://ugc-admin-board.herokuapp.com/external/getApproved', { tag: this.props.tag })
      .then((res) => {
        this.setState({ social: res.data.data });
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line
      });
  }

  // Returns an array of social items to render
  getItems() {
    const { social, mobile, tablet, desk } = this.state;

    const out = social.map((post, i) => { // eslint-disable-line
      let item;
      if (post.posttype === 'instagram') {
        if (mobile) {
          if (i === length - 1) {
            item = (
              <div id="socialItem" className="last" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '300px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
              </div>
            );
          } else {
            item = (
              <div id="socialItem" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '300px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
                <Divider id="socialDivider" key={(i + 10).toString()} inset />
              </div>
            );
          }
          return item; // eslint-disable-line
        } else if (tablet) {
          if (i === length - 1) {
            item = (
              <div id="socialItem" className="last" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '375px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
              </div>
            );
          } else {
            item = (
              <div id="socialItem" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '375px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
                <Divider id="socialDivider" key={(i + 10).toString()} inset />
              </div>
            );
          }
          return item; // eslint-disable-line
        } else { // eslint-disable-line
          if (i === length - 1) {
            item = (
              <div id="socialItem" className="last" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '375px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
              </div>
            );
          } else {
            item = (
              <div id="socialItem" key={i.toString()}>
                <b>{post.author}</b><br />
                <img id="socialImg" style={{ width: '375px' }} src={post.contenturl} alt="" />
                <div id="socialText">{post.textcontent}</div>
                <Divider id="socialDivider" key={(i + 10).toString()} inset />
              </div>
            );
          }
          return item; // eslint-disable-line
        }
      } else { // eslint-disable-line
        if (mobile) { // eslint-disable-line
          if (i === length - 1) {
            item = (
              <div id="socialItem" className="last" key={i.toString()}>
                <b>{post.author}</b><br />
                <div id="socialText">{post.textcontent}</div>
              </div>
            );
          } else {
            item = (
              <div id="socialItem" key={i.toString()}>
                <b>{post.author}</b><br />
                <div id="socialText">{post.textcontent}</div>
                <Divider id="socialDivider" key={(i + 10).toString()} inset />
              </div>
            );
          }
          return item; // eslint-disable-line
        } else { // eslint-disable-line
          if (i === length - 1) {
            item = (
              <div id="socialItem" className="last" key={i.toString()}>
                <b>{post.author}</b><br />
                <div id="socialText">{post.textcontent}</div>
              </div>
            );
          } else {
            item = (
              <div id="socialItem" key={i.toString()}>
                <b>{post.author}</b><br />
                <div id="socialText">{post.textcontent}</div>
                <Divider id="socialDivider" key={(i + 10).toString()} inset />
              </div>
            );
          }
          return item; // eslint-disable-line
        }
      }
    });
    return out;
  }

  render() {
    const { mobile, tablet, desk } = this.state;

    const socialItems = this.getItems();
    let socialBoxRender;
    if (mobile) {
      socialBoxRender = (
        <MuiThemeProvider>
          <Paper zDepth={5} mobile globalStyle={this.props.globalStyle} lgMax={this.props.lgMax} xsMax={this.props.xsMax}>
            <List>
              <Subheader>Recent Shares</Subheader>
              {socialItems.length === 0 ? 'Loading...' : socialItems}
            </List>
          </Paper>
        </MuiThemeProvider>
      );
    } else {
      socialBoxRender = (
        <MuiThemeProvider>
          <Paper zDepth={5} globalStyle={this.props.globalStyle} lgMax={this.props.lgMax} xsMax={this.props.xsMax}>
            <List>
              <Subheader>Recent Shares</Subheader>
              {socialItems.length === 0 ? 'Loading...' : socialItems}
            </List>
          </Paper>
        </MuiThemeProvider>
      );
    }
    return socialBoxRender;
  }
}

SocialBox.propTypes = {
  globalStyle: PropTypes.string,
  lgMax: PropTypes.string,
  xsMax: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default SocialBox;
