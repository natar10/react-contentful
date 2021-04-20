import React from "react";
import { useAppContext } from "../context/AppContext";
import { Asset } from "contentful";
import { Col, Row, Image, Spinner, Container } from "react-bootstrap";

const Catalog = () => {
  const data = useAppContext();
  console.log(data);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          {data.status === "LOADED" ? (
            <>
              {data.value.products.map((product) => {
                return (
                  <div className="py-4" key={product.sys.id}>
                    <h2 className="pb-4">{product.fields.name}</h2>
                    <Row>
                      <Col className="text-center" md={7}>
                        {product.fields.avatar && (
                          <Image
                            src={product.fields.avatar.fields.file.url}
                            width="70%"
                            thumbnail
                          />
                        )}
                        <span className="d-block">
                          <strong>Favorite Artist: </strong>
                          {product.fields.favoriteArtist}
                        </span>
                        <span className="d-block">
                          <strong>Favorite Movie: </strong>
                          {product.fields.favoriteMovie}
                        </span>
                        <span className="d-block">
                          <strong>Favorite Sport: </strong>
                          {product.fields.favoriteSport}
                        </span>
                        <span className="d-block">
                          <strong>Favorite TV Series: </strong>
                          {product.fields.favoriteTvSeries}
                        </span>
                      </Col>
                      <Col md={5}>
                        <div className="text-justify pt-4">
                          <div className="d-block">
                            <strong>I LEARNED IN PANDEMY: </strong>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </>
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Catalog;
