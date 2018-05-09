import React from 'react';
import styled from 'styled-components';
import ewLogo from './../ewLogo.png'
import GoogleButton from './GoogleButton'

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



class SplashBody extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title src = {ewLogo} />
                <GoogleButton />
            </Wrapper>
        )
    }
}

export default SplashBody;