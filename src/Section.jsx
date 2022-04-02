import { Container, Title, Paragraph } from './style/global'
import styled from 'styled-components'


const Description = styled(Paragraph)`
width: calc(100%/2);
display: inline-block;
color: #404040;
font-weight: 500;
`

const Section = function ({ title, description }) {

   return (
      <Container textAlign="center" marginTop="4rem">
         <Title >{title}</Title>
         <Description fontWeight="200">{description}</Description>
      </Container>
   )
}

export default Section