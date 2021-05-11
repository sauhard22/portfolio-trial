import React from 'react'
import styled from 'styled-components'


const Main = () => {

    const v1 = "{sauhard.is}"

    return (   
            <Container>
                <Wrapper>
                    <p className="head">{v1}</p>
                    <br/>
                    <p className="mid">Sauhard Srivastava</p>
                    <br/>
                    <p className="desc">Creative web developer, <br/> designer, editor, and a motion artist</p>
                </Wrapper>
                <Wrapper>
                    <p className="head">{v1}</p>
                    <br/>
                    <p></p>
                    <br/>
                    <Description>
                        <p className="desc dsp-itms">
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <Software>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Premiere Pro</li>
                            </Software>
                        </p>
                    </Description>
                </Wrapper> 
                <Wrapper className="bottom-value">
                    <p className="head">{v1}</p>
                    <br/>
                    <p></p>
                    <br/>
                    <p className="desc">Creative web developer, <br/> designer, editor, and a mo   tion artist</p>
                </Wrapper>     
            </Container>
    )
}

const Software = styled.div`
    display: flex;
`

const Description = styled.div`

    .dsp-itms{
        display:flex;
    }

    li{
        list-style-type: none;
        font-family: Berlin Sans FB;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 27px;
        margin-right: 60px;
    }

`

const Container = styled.div`
    
    padding: 90px 19%;
    padding-bottom:0;
    
    p{
        margin:0;

    }

    .head{
        font-family: Roboto;
        font-style: normal;
        font-size:  40px;
        font-weight:normal;
        line-height: 59px;
    }
    .mid{
        font-family: Montserrat;
        font-style:normal;
        font-weight: 15px;
        font-weight:250;
        line-height: 18px
    }
    .desc{
        font-family: Berlin Sans FB;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 27px;
    }
`

const Wrapper = styled.div`
    line-height: 30px;
    margin:0;
    margin-bottom: 75px;

    .bottom-value{
        margin-bottom: 0px;
    }

`

export default Main
