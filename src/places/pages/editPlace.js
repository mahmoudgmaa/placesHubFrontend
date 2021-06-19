import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../components/input";
import { Form, FormWrapper, Button } from "./NewPlace";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../utils/validators";
import { useForm } from "../../shared/components/form-hook";
import { useHttpCleint } from "../../shared/components/http-hook";
import ErrorModal from "../../users/components/ErrorModal";
import * as reactBootstrap from "react-bootstrap";
import { AuthContext } from "../../context/auth-context";

const EditPlace = () => {
  const { isError, isLoading, error, errorHandler, sendRequset, setIsError } =
    useHttpCleint();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeid = useParams().placeid;
  const history = useHistory();
  const auth = useContext(AuthContext);

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

  const fetchPlace = async () => {
    try {
      const responseDate = await sendRequset(
        `http://localhost:4000/api/places/${placeid}`
      );
      setLoadedPlace(responseDate.place);
      setFormData(
        {
          title: {
            value: responseDate.place.headline,
            isValid: true,
          },
          description: {
            value: responseDate.place.description,
            isValid: true,
          },
        },
        true
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetchPlace();
  }, [sendRequset, placeid, setFormData]);
  if (isLoading) {
    return <reactBootstrap.Spinner animation="grow" />;
  }
  if (!loadedPlace && !isError) {
    return (
      <div>
        <h3>no place found!</h3>
      </div>
    );
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await sendRequset(
        `http://localhost:4000/api/places/${placeid}`,
        "PATCH",
        JSON.stringify({
          headline: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/"+auth.userId+"/places")
    } catch (error) {}
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
      {!isLoading && loadedPlace && (
        <FormWrapper>
          <Form onSubmit={submitHandler}>
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              errorText="please enter valid Title"
              validators={[VALIDATOR_REQUIRE()]}
              value={loadedPlace.headline}
              valid={true}
              onInput={inputHandler}
            />
            <Input
              id="description"
              element="textarea"
              label="Description"
              errorText="please enter valid description(at least 5 characters)"
              validators={[VALIDATOR_MINLENGTH(5)]}
              value={loadedPlace.description}
              valid={true}
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              Update place
            </Button>
          </Form>
        </FormWrapper>
      )}
    </>
  );
};

export default EditPlace;
