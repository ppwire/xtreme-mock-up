import FaqItem from "./FaqItem"
import { Title, Container } from "./style/global"
import styled from 'styled-components'

const Heading = styled(Title)`
text-align: center;
`

const Faq = function () {


   return (
      <Container marginTop="4rem">
         <Heading>FAQ</Heading>
         <FaqItem question="What is your favorite song ?" answer="The pretender - Foo Figher"></FaqItem>
         <FaqItem question="What is your favorite games ?" answer="I don't have any favorite games"></FaqItem>
         <FaqItem question="Write something..." answer="lorem askdjlkjqwld aslkdj "></FaqItem>
      </Container>
   )
}

export default Faq