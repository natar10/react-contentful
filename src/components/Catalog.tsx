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
                    <h2 className="pb-4">{product.fields.productName}</h2>
                    <Row>
                      <Col className="text-center" md={7}>
                        [Img Here]
                        <span className="d-block">
                          <strong>Quatity: </strong>
                          {product.fields.quantity}
                        </span>
                        <span className="d-block">
                          <strong>SKU: </strong>
                          {product.fields.sku}
                        </span>
                        <span className="d-block">
                          <strong>Tags: </strong>
                          {product.fields.tags.toString()}
                        </span>
                      </Col>
                      <Col md={5}>
                        <div className="text-justify pt-4">
                          {product.fields.productDescription}
                          <div className="d-block">
                            <strong>Brand: </strong>
                            [Brand Here]
                          </div>
                          <div className="mt-4">
                            <strong>Categories:</strong> [Categories Here]
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
