import React from "react";
import {
  PlaceContainer,
  ImgWrapper,
  Heading,
  Adress,
  Button,
  BodyWrapper,
  Des,
  ButtonWrapper,
} from "./placesitemsElments";

import ModalCancel from "../components/ModalCancel";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const PlacesItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    props.onCustomEvent(e);
    props.setShowModal((prev) => ({
      visible: !prev.visible,
      address: props.address,
      coordinates: props.coordinates,
    }));
  };

  const auth = useContext(AuthContext);

  return (
    <>
      <ModalCancel
        onDelete={props.onDelete}
        placeid={props.id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <PlaceContainer>
        <ImgWrapper>
          <img src={props.img} alt="place_img" />
        </ImgWrapper>
        <BodyWrapper>
          <Heading>{props.headline}</Heading>
          <Adress>{props.address}</Adress>
          <Des>{props.description}</Des>
        </BodyWrapper>
        <ButtonWrapper>
          <Button onClick={(e) => handleClick(e)}>VIEW ON MAP</Button>
          {auth.userId === props.creatorid && (
            <>
              <Button to={"/places/" + props.id}>EDIT</Button>
              <Button onClick={() => setShowModal(true)}>DELETE</Button>
            </>
          )}
        </ButtonWrapper>
      </PlaceContainer>
    </>
  );
};

export default PlacesItem;
