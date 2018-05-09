import React from 'react';
import styled from 'styled-components';
import GoogleLogo from './../googleLogo.png'


const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 3px;
  margin-top: 30px;
  background: white;
  display: flex;
  font-size: 14px;
  color: black;
  font-weight: 500;
`

const Logo = styled.img`
  height: 25px;
  position: relative;
  display: block;
  margin-top: 10px;
  transform: translateY();
  margin-right: 10px;
  margin-left: 3px;
`


const Text = styled.p`
  margin-top: 15px;
  margin-left: 6px;
  color: #5b5b5b;
`



const GoogleButton = ()=> {
    return (
        <Button>
                <Logo src = {GoogleLogo} />
                <Text>Continue wth Google</Text>
        </Button>
    )
}

export default GoogleButton;

