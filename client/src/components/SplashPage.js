import React from 'react';
import styled from 'styled-components';
import ewLogo from './../ewLogo.png'
import OauthButton from './OauthButton'
import GoogleLogo from './../googleLogo.png'
import EmailLogo from './../email.png';

const Wrapper = styled.section`
    height: 600px;
    background: linear-gradient(180deg, #d66948 10%, #a148d6);
`
const Title = styled.img`
    display: block;
    padding-top: 150px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 400px;
`

const Buttons = styled.div`
    display: flex;  
    width: 500px;
    margin-left: auto;
    margin-right: auto;
`



class SplashBody extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title src = {ewLogo} />
                <Buttons>
                    <OauthButton logo = {GoogleLogo} text = "Continue with Google"/>
                    <OauthButton logo = {EmailLogo} text = "Sign up with email"/>
                </Buttons>
            </Wrapper>
        )
    }
}

export default SplashBody;