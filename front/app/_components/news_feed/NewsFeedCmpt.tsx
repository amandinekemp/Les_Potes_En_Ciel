import React from 'react';
import { Row, Col } from 'react-bootstrap';

/** NewsFeedCmpt displays the latest news and integrates a Facebook page feed **/

const NewsFeedCmpt = () => {
  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={10} md={8}>
          <h2>Actualités</h2>
          <p>Restez informé(e) des dernières nouvelles et événements des Potes en Ciel !</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={8} className="d-flex justify-content-center">
          {/* Insert here the visual of the Facebook page */}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLesPotesEnCiel&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            allowTransparency="true"
            allow="encrypted-media"
            title="Page Facebook Les Potes en Ciel"
          ></iframe>
        </Col>
      </Row>
    </>
  );
};

export default NewsFeedCmpt;
