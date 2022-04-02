import { Container } from './style/global'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled(Container)`
display:flex;
gap:1rem;
flex-wrap: wrap;
`
const CardSet = function () {

   const mockData = [{
      title: 'Bronze', price: '4.99', persons: '1', sports: '1'
   },
   {
      title: 'Silver ', price: '9.99', persons: '3', sports: '5'
   },
   {
      title: 'Gold', price: '14.99', persons: '10', sports: '10'
   }

   ]
   return (
      <Wrapper marginTop="4rem">
         {mockData.map((el, index) => {
            return <Card {...el} key={index}></Card>
         })}
      </Wrapper>
   )
}
export default CardSet