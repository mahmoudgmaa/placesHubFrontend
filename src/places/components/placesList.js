import React from "react";
import Place from "../components/PlacesItem";
import { PlacesListContainer } from "./placesListElments";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  margin-top: 20px;
  background: #ee9ca7;
  justify-content: center;
  color: #000;
  font-size: 15px;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #ee9ca7;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  font-weight: 700;

  &:hover {
    background: #fff;
    color: #000;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 10;
  height: 320px;
  width: 450px;
  border-radius: 10px;
  flex-direction: column;
`;

const placesList = (props) => {
  if (!props.items) {
    return (
      <div
        style={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "80vh",
        }}>
        <Wrapper>
          <h3>You didn't share any place</h3>
          <Button disabled={false} to="/places/new">
            Share place
          </Button>
        </Wrapper>
      </div>
    );
  }
  return (
    <PlacesListContainer>
      {props.items.map((place) => {
        return (
          <Place
            key={place.id}
            id={place.id}
            img={place.img}
            headline={place.headline}
            description={place.description}
            address={place.address}
            creatorid={place.creatorid}
            coordinates={place.coordinates}
            onCustomEvent={props.onCustomEvent}
            setShowModal={props.setShowModal}
            showModal={props.showModal}
            onDelete={props.onDeletePlace}
          />
        );
      })}
    </PlacesListContainer>
  );
};

export default placesList;
