// @ts-nocheck

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { getHeightWithProportion } from './utils';

const propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  columnSize: PropTypes.number,
};

const defaultProps = {
  src: null,
  onPress: () => {},
};

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.onLoad = this.onLoad.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      src,
      onPress,
    } = this.props;

    onPress(src);
  }

  onLoad() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const {
      src,
     'data-src': dataSrc
    } = this.props;

    const {
      loading,
    } = this.state;

    return (
      <img
        alt=''
        src={src}
        data-src={dataSrc}
        loading="lazy"
        onLoad={this.onLoad}
        onClick={this.onClick}
      />
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
