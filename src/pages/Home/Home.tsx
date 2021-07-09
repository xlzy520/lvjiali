// @ts-nocheck

import React, { useState, useEffect, useCallback } from 'react';

import ReactBnbGallery from 'react-bnb-gallery-lodash-es';

import ParticleEffectButton from 'react-particle-effect-button'

// import AV from 'leancloud-storage'

const AV = window.AV

import { useHistory } from 'react-router-dom';

// import { OSSClient } from "../../utils/getOSS";

import {
  Button,
  Container,
  Spacing,
  Text,
  Title,
  PhotoGrid,
} from '../../components';

// import PHOTOS from '../../photos.js';


const buttonCustomStyle = {
  marginTop: '16px',
  marginBottom: '24px',
};

const Home = () => {
  const [galleryStatus, setGalleryStatus] = useState({
    isOpen: false,
    currentPhoto: null,
  });

  const [photos, setPhotos] = useState([]);
  const [number, setNumber] = useState(0);
  const [ButtonState, setButtonState] = useState({
    hidden: false,
    animating: false
  });


  useEffect(() => {
    const query = new AV.Query('Photos');
    // query.equalTo('lastName', 'Smith');
    query.find().then((items) => {
      let _items = items.map(v=> ({
        src: v.attributes.url+'?x-oss-process=style/normal',
        photo: v.attributes.url+'?x-oss-process=style/webp',
        caption: "4班",
        subcaption: "吕佳丽拍摄",
        thumbnail: v.attributes.url+'?x-oss-process=style/thum',
        // width: v.attributes.width,
        // height: v.attributes.height
      }))
      // const _photos = photos.concat(_items)
      //
      //
      // const newPhotos = _photos.map(v=> ({
      //   src: v.photo,
      //   photo: v?.photo+'?x-oss-process=style/normal',
      //   caption: "4班",
      //   subcaption: "吕佳丽拍摄",
      //   thumbnail: v?.photo+'?x-oss-process=style/normal',
      //   width: v.width,
      //   height: v.height
      // }))
      // _items = _items.concat(_items).concat(_items)
      setPhotos(_items)
      // const _items = items.map(v=> v.attributes)

      // students 是包含满足条件的 Student 对象的数组
    });
    // OSSClient.list().then(res => {
    //   console.log(res);
    // })

  }, [])

  const onPhotoPress = useCallback((url) => {
    console.log(photos, url);
    let number = photos.findIndex(v=> v.src === url)
    if (number < 0) {
      number = 0
    }
    setNumber(number)
    setGalleryStatus({
      isOpen: true,
      currentPhoto: url,
    });
  }, [photos]);

  const onGalleryClose = useCallback(() => {
    setGalleryStatus({
      isOpen: false,
      currentPhoto: null,
    });
  }, []);


  const onCommentClick = useCallback(() => {
    setButtonState({
      hidden: !ButtonState.hidden,
    });
  }, []);


  const onAnimationComplete = useCallback(() => {
    history.push('talk')
  }, []);





  const isOpen = galleryStatus.isOpen;

  // setPhotos()

  const phrases = {
    showPhotoList: '显示照片列表',
    hidePhotoList: '隐藏照片列表'
  }

  const history = useHistory()
  const goUploadPage = () => {
    history.push('upload')
  }


  const PhotoGridData = photos.map(v=> ({
    src: v.photo,
    width: 400,
    height: 600,
  }))

  const buttonOptions = {
    type: 'triangle',
    easing: 'easeOutQuart',
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2
  }

  console.log(photos);

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
              className="mt-4 mb-6"
              primary
              large
            >
              查看照片墙
              </Button>
          </Spacing>
          <Spacing left={2}>
            <Button
              className="mt-4 mb-6"
              onPress={goUploadPage}
              secondary
              outline
              large
            >
              上传我们的照片
              </Button>
          </Spacing>
          <Spacing left={2}>
            <ParticleEffectButton
              hidden={ButtonState.hidden}
              color='#fa709a'
              duration="500"
              onComplete={onAnimationComplete}
              {...buttonOptions}
            >
              <button
                className="particle-effect-button mt-4 mb-6
                button button__default button__large button__primary button__comment"
                onClick={onCommentClick}
              >
                留言
              </button>
            </ParticleEffectButton>
          </Spacing>
        </Container>
      </Container>
      {/*<PhotoGrid onPhotoPress={onPhotoPress} photos={photos} />*/}
      {/*<ReactBnbGallery*/}
      {/*  show={isOpen}*/}
      {/*  photos={photos}*/}
      {/*  onClose={onGalleryClose}*/}
      {/*  phrases={phrases}*/}
      {/*  activePhotoIndex={number}*/}
      {/*  wrap={false}*/}
      {/*  backgroundColor='#000000'*/}
      {/*/>*/}
    </>
  );
};

export default Home;
