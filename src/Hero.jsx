import styled from 'styled-components'
import { Title, Container, Logo } from './style/global'

const Section = styled.section`
background-image: url('/image/hero_img.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
width: 100%;
min-height: 100%;
position: relative;
`
const Wrapper = styled(Container)`
padding-top: 16rem;
padding-bottom: 16rem;
`

const Nav = styled(Container)`
 padding-top:1rem;
 padding-bottom: 1rem;
`

const Heading = styled.h1`
font-weight:600;
font-size:2.5rem;
`

const CtaButton = styled(Title)`
font-weight: 400;
text-decoration: underline;
cursor: pointer;
`

const Hero = function () {

   return (
      <Section>
         <Nav>
            <Logo>Xtreme</Logo>
         </Nav>
         <Wrapper>
            <Heading>Learn extreme sport
               online course anywhere</Heading>
            <CtaButton onClick={() => { console.log('Please buy me') }}>Enroll now</CtaButton>
         </Wrapper>
      </Section>
   )
}
export default Hero