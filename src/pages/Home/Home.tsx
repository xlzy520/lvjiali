// @ts-nocheck

import React, {useCallback, useEffect, useState} from 'react';

import ParticleEffectButton from 'react-particle-effect-button'
import {useHistory} from 'react-router-dom';

import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

import {Button, Container, PhotoGrid, Spacing, Text, Title,} from '../../components';

const AV = window.AV

const Home = () => {
  const [galleryStatus, setGalleryStatus] = useState({
    isOpen: false,
    currentPhoto: null,
  });

  const [photos, setPhotos] = useState([]);
  const [number, setNumber] = useState(0);
  const [gallery, setGallery] = useState({});
  const [ButtonState, setButtonState] = useState({
    hidden: false,
    animating: false
  });


  useEffect(() => {
    const query = new AV.Query('Photos');
    query.find().then((items) => {
      let _items = items.map(v=> ({
        src: v.attributes.url+'?x-oss-process=style/normal',
        'data-src': v.attributes.url+'?x-oss-process=style/webp',
        // thumbnail: v.attributes.url+'?x-oss-process=style/thum',
      }))
      setPhotos(_items)
      // setGallery(new Viewer(document.querySelector('.my-masonry-grid', {
      //   url: 'data-src'
      // })))
    });
  }, [])

  const onPhotoPress = useCallback((url) => {
    const allImgNodeList = document.querySelectorAll('.my-masonry-grid img')
    let targetIndex = 0
    allImgNodeList.forEach((v,index)=> {
      if (v.src === url) {
        targetIndex = index
      }
    })
    new Viewer(allImgNodeList[targetIndex], {
      url: 'data-src'
    }).show()
    setNumber(targetIndex)
  }, [photos, gallery]);

  const onCommentClick = useCallback(() => {
    setButtonState({
      hidden: !ButtonState.hidden,
    });
  }, []);


  const onAnimationComplete = useCallback(() => {
    history.push('talk')
  }, []);

  const onBrowse = useCallback(() => {
    new Viewer(document.querySelector('.my-masonry-grid', {
      url: 'data-src'
    })).show()
  }, []);

  const history = useHistory()
  const goUploadPage = () => {
    history.push('upload')
  }

  const buttonOptions = {
    type: 'triangle',
    easing: 'easeOutQuart',
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2
  }

  return (
    <>
      <Container id="start" className="container intro">
        <Title level={1}>4班同学照片墙</Title>
        <Text inherit>我们的4班.</Text>
        <Container className="actions">
          <Spacing right={2}>
            <Button
              onPress={onBrowse}
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
      <PhotoGrid onPhotoPress={onPhotoPress} photos={photos} />
    </>
  );
};

export default Home;
