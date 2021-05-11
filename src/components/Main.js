import React from 'react'
import styled from 'styled-components'


const Main = () => {

    const v1 = "{sauhard.is}"
    const v2 = "{tools}"
    const v3 = "{main.skills}"

    return (
        <Container>
            <Wrapper>
                <p className="head">{v1}</p>
                <br />
                <p className="mid">Sauhard Srivastava</p>
                <br />
                <p className="desc">Creative web developer, <br /> designer, editor, and a motion artist</p>
            
                <p className="head">{v2}</p>
                <br />
                <p></p>
                <br />
                <div>
                <Tools>JavaScript<br/>HTML </Tools>
                <Tools>React.js<br/> CSS</Tools>
                <Tools>Node.js</Tools>
                <Tools>Adobe Illustrator <br/>Figma</Tools>
                <Tools>Adobe Photoshop<br/> Adobe After Effects</Tools>
                <Tools>Adobe Premiere Pro<br/></Tools>
                </div>
                <p className="head">{v3}</p>
                <br />
                <p></p>
                <br />
                <div>
                <Skills className="main-skills">UI/UX<br/>Web Development</Skills>
                <Skills className="main-skills">Graphics Design, Motion Design, <br/>
                Video Editing</Skills>
                <Skills className="main-skills">Photograpgy, Filmmaking, <br/>
                Storytelling</Skills>
                </div>
            </Wrapper>
        </Container>
    )
}

const Tools = styled.div`
    float:left;
    font-family: Berlin Sans FB;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 27px;
    line-height: 50px;
    padding-right: 50px;
    display:flex;
`

const Skills = styled.div`
    float:left;
    font-family: Berlin Sans FB;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 27px;
    line-height: 50px;
    padding-right: 120px;
`


const Container = styled.div`
    
    padding: 90px 19%;
    
    p{
        margin:0;

       

    }
 .mid-tools{
        margin-top: 50px;
    }

    .head{
        font-family: Roboto;
        font-style: normal;
        font-size:  40px;
        font-weight:normal;
        line-height: 59px;
        text-align: left;
        margin-top:50px;
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
    display:flex;
    flex-direction: column;
    .main-skills{
        float: left;
    }

    .bottom-value{
        margin-bottom: 0px;
    }

    .dsp-itms{
        display: flex;
        line-height: 50px;
    }
    div{
        display: flex; 
    }

    p{
        list-style-type: none;
        font-family: Berlin Sans FB;
        font-size: 25px;
        
    }

    .li-padding{
        padding-right:50px


    }
    span{
        padding-right: 55px
    }

`

export default Main
