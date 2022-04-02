import styled from 'styled-components'

const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding:1rem;
text-align:center;
flex-grow: 1;
`
const Title = styled.h2`
font-size: 24px;
font-weight: 700;
`
const Price = styled.h3`
font-size:24px;
font-weight: 400;
`
const Text = styled.p`
font-size: 16px;
`

const Description = styled.div`
color:#404040;
margin-top:0.5rem;
`

const Button = styled.button`
   font-size: 16px;
   width:100%;
   padding:0.75rem;
   background-color: #56A3BB;
   color:white;
   margin-top: 0.5rem;
`

const Card = function ({ title, price, persons, sports }) {

   return (
      <Container >
         <Title>{title}</Title>
         <Price>{price}$</Price>
         <Text>/month</Text>
         <Description>
            <Text>{persons} person</Text>
            <Text>{sports} Different sports</Text>
            <Text>Free online assignments</Text>
            <Text>24/7 Online customer support</Text>
         </Description>
         <Button>Enroll</Button>
      </Container>
   )
}
export default Card