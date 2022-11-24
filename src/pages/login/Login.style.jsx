import styled from "styled-components";
import Flex from "../../components/GlobalStyles/Flex.styled.jsx";

export const LoginContainer = styled(Flex)`
  height: 100vh; // 100% of the viewport height
  background-image: url("https://picsum.photos/1920/1080");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //background-attachment: fixed;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background: rgba(0, 173, 181, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 3rem;
  color: #e1f1dd;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 1rem;
  border: none;
  margin: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: #e1f1dd;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.5);
  color: #e1f1dd;
  border: none;
  border-radius: 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;
