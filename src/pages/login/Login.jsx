import React from "react";
import {
  LoginContainer,
  FormContainer,
  StyledImg,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="logo" />
        <Header>{"BOSS"} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Enter Your Name" />
          <StyledInput type="password" placeholder="Enter Password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
