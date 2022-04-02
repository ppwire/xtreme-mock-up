import { Logo, Container } from './style/global'
import styled from 'styled-components'

const Wrapper = styled(Container)`
   position: absolute;
   padding: 1rem 1rem ;
   z-index: 2;
`

const Nav = function () {

   return (
      <Wrapper>
         <Logo>Xtreme</Logo>
      </Wrapper>
   )

}

export default Nav