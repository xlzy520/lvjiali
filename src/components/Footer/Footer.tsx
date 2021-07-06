import React from 'react';

import Container from '../Container';
import Text from '../Text';

const Footer = () => (
  <footer className="footer">
    <Container className="footer__container">
      <Text inherit>Copyright © <a href="https://github.com/jiali0126" target="_blank" rel="noopener noreferrer">吕佳丽</a>, 2021. MIT Licensed.</Text>
      {/*<Text className="links" inherit>*/}
      {/*  <a href="https://github.com/peterpalau/react-bnb-gallery" target="_blank" rel="noopener noreferrer">View project</a>*/}
      {/*  <a href="https://github.com/peterpalau/react-bnb-gallery/example" target="_blank" rel="noopener noreferrer">View source</a>*/}
      {/*</Text>*/}
    </Container>
  </footer>
);

export default Footer;
