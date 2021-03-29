import React from "react";
import { useAppContext } from "../context/AppContext";
import { Asset } from "contentful";
import { Col, Row, Image, Spinner } from "react-bootstrap";

const Catalog = () => {
  const data = useAppContext();
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          {data.status === "LOADED" ? (
            <div>
              {data.value.products.map((product) => {
                return (
                  <div className="py-4" key={product.sys.id}>
                    <h2 className="pb-4">{product.fields.productName}</h2>
                    <Row>
                      <Col className="text-center" md={7}>
                        {product.fields.image.map((img: Asset) => {
                          return (
                            <Image
                              key={img.sys.id}
                              src={img.fields.file.url}
                              width="70%"
                              thumbnail
                            />
                          );
                        })}
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
                            <img
                              width="80"
                              src={
                                product.fields.brand.fields.logo.fields.file.url
                              }
                            />
                            <br />
                            {product.fields.brand.fields.companyName}
                          </div>
                          <div className="mt-4">
                            <strong>Categories:</strong>{" "}
                            {product.fields.categories.map((category) => (
                              <span key={category.sys.id}>
                                {category.fields.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </div>
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
