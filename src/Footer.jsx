import { Logo, Paragraph } from "./style/global"
import styled from 'styled-components'

const Container = styled.div`
background-color: #56A3BB;
padding-top: 1rem;
padding-bottom: 1rem;
margin-top:4rem;
display:flex;
flex-direction: column;
align-items: center;
`

const ContrastLogo = styled(Logo)`
color:white;
`
const ContrastParagraph = styled(Paragraph)`
color:white;
`

const FlexBox = styled.div`
display: flex;
gap: 0.5rem;
margin-top:0.5rem;
`

const FlexItem = styled.li`
list-style: none;
color:white;
font-weight:500;
cursor: pointer;
`
const Footer = function () {



   return (
      <Container>
         <ContrastLogo>Xtreme</ContrastLogo>
         <FlexBox>
            <FlexItem>About us</FlexItem>
            <FlexItem>Location</FlexItem>
            <FlexItem>Blog</FlexItem>
         </FlexBox>
         <FlexBox>
            <FlexItem>
               <img src="/image/Gmail_white.svg"></img>
            </FlexItem>
            <FlexItem>
               <img src="/image/Line_white.svg"></img>
            </FlexItem>
            <FlexItem>
               <img src="/image/LinkedIN_white.svg"></img>
            </FlexItem>
         </FlexBox>
         <ContrastParagraph>© Pobpoom 2022</ContrastParagraph>
      </Container>
   )
}

export default Footer