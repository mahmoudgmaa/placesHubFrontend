import React, { useState, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Input from "../../places/components/input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../places/utils/validators";
import { useForm } from "../../shared/components/form-hook";
import { AuthContext } from "../../context/auth-context";
import * as reactBootstrap from "react-bootstrap";
import ErrorModal from "../components/ErrorModal";

const GlobalStyling = createGlobalStyle`
html{
  height:100%;
}
body{
  font-family:Arial, Helvetica, sans-serif;
  /* background: linear-gradient(to bottom, #ee9ca7, #ffdde1); */
  margin:0;
  height:100vh;
  color:#555;
}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 20px;
`;

export const Button = styled.button`
  background: ${({ disabled }) => (disabled ? "#d3d3d3" : "#ee9ca7")};
  color: ${({ disabled }) => (disabled ? "#fff" : "#000")};
  font-weight: 600;
  border: 1px solid ${({ disabled }) => (disabled ? "#d3d3d3" : "#ee9ca7")};
  transition: 0.2s ease-in-out;
  margin-left: 5px;
  padding: 8px 16px;
  &:hover {
    background: ${({ disabled }) => (disabled ? "#d3d3d3" : "#fff")};
    transition: 0.2s ease-in-out;
  }
`;

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const SubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:4000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const responseData=await response.json();
        if(!response.ok){
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        auth.logIn();
      } catch (error) {
        setIsError(true);
        setError(error.message || "something went wrong, please try again");
        console.log(error);
        setIsLoading(false);
      }
    } else {
      try {
        const response = await fetch("http://localhost:4000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        setIsLoading(false);
        auth.logIn();
      } catch (error) {
        setIsError(true);
        setError(error.message || "something went wrong, please try again");
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  const swichHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prev) => !prev);
  };

  const auth = useContext(AuthContext);

  const errorHandler = () => {
    setIsError(false);
    setError(null);
  };

  return (
    <>
      {isError && (
        <ErrorModal
          showModal={isError}
          setShowModal={setIsError}
          header={"something went wrong"}
          body={error}
          buttonText={"cancel"}
          oncancel={errorHandler}
        />
      )}
      <GlobalStyling />
      <FormWrapper>
        <Form onSubmit={SubmitForm}>
          <h2>Login Required</h2>
          <hr />
          {!isLoginMode ? (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="please enter a valid name"
              onInput={inputHandler}
            />
          ) : null}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="please enter a valid email"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="please enter a valid password(at least 6 charachters)"
            onInput={inputHandler}
          />
          {isLoading && <reactBootstrap.Spinner animation="grow" />}
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "Log In" : "Sign Up"}
          </Button>
        </Form>
        <Button style={{ marginTop: "20px" }} onClick={swichHandler}>
          {isLoginMode ? "Sign Up" : "Log In"}
        </Button>
      </FormWrapper>
    </>
  );
};

export default Auth;
