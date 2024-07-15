
import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted color='red' textAlign='center' style={{ marginTop: '20px' }}>
      <Container>
        &copy; 2024 Recipe Sharing Website. All rights reserved.
      </Container>
    </Segment>
  );
}

export default Footer;