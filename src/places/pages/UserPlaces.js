import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/placesList";
import Modal from "../components/ModalMap";
import { useHttpCleint } from "../../shared/components/http-hook";
import ErrorModal from "../../users/components/ErrorModal";
import * as reactBootstrap from "react-bootstrap";

const MyPlaces = () => {
  const { isError, isLoading, error, errorHandler, sendRequset, setIsError } =
    useHttpCleint();
  const [showModal, setShowModal] = useState({
    visible: false,
    address: null,
    coordinates: null,
  });
  const [loadedPlaces, setLoadedPlaces] = useState();
  const userid = useParams().userid;

  const fetchPlaces = async () => {
    try {
      const responseData = await sendRequset(
        `http://localhost:4000/api/places/user/${userid}`
      );
      setLoadedPlaces(responseData.places);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPlaces();
  }, [sendRequset]);

  const handlCustomEvent = (e) => {
    console.log(e);
  };

  const onDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces((prev) =>
      prev.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      {!isLoading && isError && (
        <ErrorModal
          showModal={isError}
          setShowModal={setIsError}
          header={"something went wrong"}
          body={error}
          buttonText={"cancel"}
          oncancel={errorHandler}
        />
      )}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      {isLoading && <reactBootstrap.Spinner animation="grow" />}
      <PlacesList
        items={loadedPlaces}
        onCustomEvent={handlCustomEvent}
        setShowModal={setShowModal}
        showModal={showModal}
        onDeletePlace={onDeleteHandler}
      />
    </>
  );
};

export default MyPlaces;
