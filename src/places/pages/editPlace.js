import React, { useEffect, useState } from "react";
import img from "../../assests/download.jpg";
import img1 from "../../assests/download1.jpg";
import img2 from "../../assests/download2.jpg";
import { useParams } from "react-router-dom";
import Input from "../components/input";
import { Form, FormWrapper, Button } from "./NewPlace";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../utils/validators";
import { useForm } from "../../shared/components/form-hook";

const items = [
  {
    id: "p1",
    img: img,
    headline: "mosque",
    address: "Istanbul, Turkey",
    description:
      "is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates: {
      lat: 41.0054096,
      lng: 28.9746251,
    },
    creatorid: "u1",
  },

  {
    id: "p2",
    img: img1,
    headline: "bridge",
    address: "Istanbul, Turkey",
    description:
      "is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates: {
      lat: 41.0054096,
      lng: 28.9746251,
    },
    creatorid: "u2",
  },

  {
    id: "p3",
    img: img2,
    headline: "mountain",
    address: "Istanbul, Turkey",
    description:
      "is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates: {
      lat: 41.0054096,
      lng: 28.9746251,
    },
    creatorid: "u3",
  },
];

const EditPlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeid = useParams().placeid;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identicalPlace = items.find((p) => p.id === placeid);

  useEffect(() => {
    if (identicalPlace) {
      setFormData(
        {
          title: {
            value: identicalPlace.headline,
            isValid: true,
          },
          description: {
            value: identicalPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identicalPlace]);

  if (!identicalPlace) {
    return (
      <div>
        <h3>no place found!</h3>
      </div>
    );
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
        }}>
        <h2 style={{ color: "black" }}>loading...</h2>
      </div>
    );
  }

  return (
    <FormWrapper>
      <Form onSubmit={submitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          errorText="please enter valid Title"
          validators={[VALIDATOR_REQUIRE()]}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          errorText="please enter valid description(at least 5 characters)"
          validators={[VALIDATOR_MINLENGTH(5)]}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.isValid}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Update place
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default EditPlace;
