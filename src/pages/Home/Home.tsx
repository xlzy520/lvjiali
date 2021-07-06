import React, { useState, useCallback } from 'react';

import ReactBnbGallery from 'react-bnb-gallery';

import {
  Button,
  Container,
  Spacing,
  Text,
  Title,
  PhotoGrid,
} from '../../components';

import PHOTOS from '../../photos.js';

const buttonCustomStyle = {
  marginTop: '16px',
  marginBottom: '24px',
};

const Home = () => {
  const [galleryStatus, setGalleryStatus] = useState({
    isOpen: false,
    currentPhoto: null,
  });

  const onPhotoPress = useCallback((url) => {
    setGalleryStatus({
      isOpen: true,
      currentPhoto: url,
    });
  }, []);

  const onGalleryClose = useCallback(() => {
    setGalleryStatus({
      isOpen: false,
      currentPhoto: null,
    });
  }, []);

  const isOpen = galleryStatus.isOpen;

  const photosToShow = galleryStatus.currentPhoto || PHOTOS;

  const phrases = {
    showPhotoList: '显示照片列表',
    hidePhotoList: '隐藏照片列表'
  }

  return (
    <>
      <Container id="start" className="container intro">
        <Title level={1}>4班同学照片墙</Title>
        <Text inherit>我们的4班.</Text>
        <Container className="actions">
          <Spacing right={2}>
            <Button
              onPress={() => setGalleryStatus({
                isOpen: true,
                currentPhoto: null,
              })}
              customStyle={buttonCustomStyle}
              primary
              large
            >
              查看照片墙
              </Button>
          </Spacing>
          <Spacing left={2}>
            <Button
              customStyle={buttonCustomStyle}
              url="/#/upload"
              secondary
              outline
              large
            >
              上传我们的照片
              </Button>
          </Spacing>
        </Container>
      </Container>
      <PhotoGrid onPhotoPress={onPhotoPress} />
      <ReactBnbGallery
        show={isOpen}
        photos={photosToShow}
        onClose={onGalleryClose}
        phrases={phrases}
        wrap={false}
        backgroundColor='#000000'
      />
    </>
  );
};

export default Home;
