import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserItem.css"
import styled from "styled-components";
import {Link} from "react-router-dom"

const Card = styled.div`
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white ;
  padding: 0;
  `;

const StyledUserItem = styled.li`
  margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 1rem;
    color: white;
    background: #292929;

    :hover,
    :active {
      background: #ffd900;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const Img = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BodyWrapper = styled.div`
  h2 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
    font-weight: normal;
    color: #ffd900;
    :hover,
    :active {
      color: #292929;
    }
  }
  h3 {
    margin: 0;
    :hover,
    :active {
      color: #292929;
    }
  }
`;

const UserItem=(props)=>{
    return (
      <StyledUserItem>
        <Card>
          <Link to={"/" + props.id + "/places"}>
            <ImageWrapper>
              <Img src={props.image} alt="user's image" />
            </ImageWrapper>
            <BodyWrapper>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCounter}{" "}
                {props.placeCounter === 1 ? "place" : "places"}
              </h3>
            </BodyWrapper>
          </Link>
        </Card>
      </StyledUserItem>
    );
}
export default UserItem;