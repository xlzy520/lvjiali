// @ts-nocheck

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withSize } from 'react-sizeme'

import Image from './Image.tsx';

import Masonry from "react-masonry-css";

// import photos from './photos';

const propTypes = {
  photosPerColumn: PropTypes.number,
  onPhotoPress: PropTypes.func,
};

const defaultProps = {
  photosPerColumn: 3,
  onPhotoPress: () => {},
};

class PhotoGrid extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    breakpointColumnsObj: {
      default: 8,
      1100: 3,
      700: 2,
      500: 1
    }
  }

  renderPhoto(photo) {
    const {
      onPhotoPress,
    } = this.props;

    return (
      <Image
        {...photo}
        key={photo.src}
        src={photo.src}
        onPress={onPhotoPress}
      />
    );
  }

  render() {
    const { photos, } = this.props;
    // const columns = this.renderColumns();

    return (
      <Masonry
        breakpointCols={this.state.breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        columnAttrs={{ className: 'should be overridden', 'data-test': '', style: { '--test': 'test' }}}
      >
        {photos.map(v=> this.renderPhoto(v))}
      </Masonry>
    );
  }
}

PhotoGrid.propTypes = propTypes;
PhotoGrid.defaultProps = defaultProps;

export default withSize()(PhotoGrid);
