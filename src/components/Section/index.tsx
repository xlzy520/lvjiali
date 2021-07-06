import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container/index.js';
import Rule from '../Rule/index.js';
import Title from '../Title/index.js';

import './component.scss';

const propTypes = {
  section: PropTypes.object.isRequired,
};

const defaultProps = {
  section: null,
};

const Section = ({
  section,
  children,
}) => (
  <Fragment>
    <section id={section.id} className="section">
      <Container className="container">
        {section.title && <Title>{section.title}</Title>}
      </Container>
      {children}
    </section>
    <Rule />
  </Fragment>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
