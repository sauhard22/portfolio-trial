import React from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const v1 = "{web.is}"
const v2 = "{web.is}"
const v3 = "{web.work}"
const v4 = "{web.about}"


const Header = () => {
    return (
        <Container>
            <Wrapper>
                <li>{v1}</li>
                <div>
                    <li className="li-padding">{v2}</li>
                    <li className="li-padding">{v3}</li>
                    <li className="li-padding">{v4}</li>
                    <li className="li-padding"><img src={linkedin} alt="linkedin"/></li>
                    <li className="li-padding-github"><img src={github} alt = "github" /></li>
                </div>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    font-size:20px;
    padding-left:19% ;
    padding-right:19%;
    padding-top:36px;
    padding-bottom:0;
`
const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin:0;

    li{
        list-style-type: none;
    }

    div{
        display:flex;
        width: 40%px;

        img{
            vertical-align: middle;
        }

        .li-padding{
            padding: 0 15px;
        }

        .li-padding-github{
            padding-left: 15px;
            padding-top:0;
            padding-bottom:0;
            padding-right:0;
        }

        @media(max-width: 1100px){
            display: none;
        }
    }
`

export default Header
