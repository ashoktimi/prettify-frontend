import React, { useContext } from 'react';
import { useDispatch } from "react-redux";
import UserContext from "../auth/userContext";
import { addToCart,  } from "../cart/cartSlice";
import defaultImage from '../images/spinning image.png'
import ProductRating from './ProductRating';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductDetail = ({id, name, price, priceSign, prevPrice, description, image_link, rating, numOfRating, color }) => {
  const product = {
    id,
    name,
    price,
    priceSign,
    prevPrice,
    image_link,
    rating,
    numOfRating,
  };
  const { handleToggleOffcanvas } = useContext(UserContext);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    handleToggleOffcanvas();
  };
  const imageUrl = image_link || defaultImage;

  return (  
      <Container style={{marginTop: '5rem'}}>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <Image
              className="ProductDetail-image"
              src={imageUrl}
              alt={name}
              onError={(e) => {
                e.target.src = defaultImage;
              }}
              style={{width: '30rem', height: '30rem', backgroundColor: 'white'}}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="ProductDetail-info">
              <h5 className="ProductDetail-name">{name}</h5>
              <p className="ProductDetail-description">{description}</p>
                <small className="ProductCard-price"> {priceSign}{price} </small> 
                <small className="ms-2 text-muted priceBefore"> before {priceSign}{prevPrice} </small>
                <div className="ProductDetail-rating">
                  <small>({rating})</small>
                  <ProductRating rating={rating} />
                  <p>({numOfRating}) Reviews</p>   
                  {color && (
                    <div>
                      {color.map(c => (
                        <div
                          key={c.id}
                          style={{
                            backgroundColor: `${c.hex_value}`,
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginLeft: '5px'
                          }}
                          />
                      ))}
                    </div>
                  )}       
                </div>          
                <Button variant="warning"  onClick={() => handleAddToCart(product)} style={{marginTop:"2rem"}} >ADD To CART</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

export default ProductDetail;