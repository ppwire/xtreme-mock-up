import styled from 'styled-components'

const Question = styled.h3`
font-size: 1.25rem;
font-weight: 600;
`

const Answer = styled.p`
font-weight: 400;
margin-top:0.25rem;
color: #404040;
`

const Wrapper = styled.div`
margin-top:1rem;
`
const FaqItem = function ({ question, answer }) {

 
   return (
      <Wrapper>
         <Question>{question}</Question>
         <Answer>{answer}</Answer>
      </Wrapper>
   )
}

export default FaqItem