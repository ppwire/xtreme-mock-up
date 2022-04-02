import { Container } from './style/global'
import styled from 'styled-components'

const Image = styled.div`
width: 100%;
height: 100%;
object-fit: cover;
background-image: url(${props => props.imgSrc});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`
const Image1 = styled(Image)`
grid-row-start: 1;
grid-row-end:3;
grid-column-start: 1;
grid-column-end: 2;
background-color: black;
`
const Image2 = styled(Image)`
grid-row-start: 1;
grid-row-end:2;
grid-column-start: 2;
grid-column-end: 3;
background-color: red;
`
const Image3 = styled(Image)`
grid-row-start: 2;
grid-row-end:3;
grid-column-start: 2;
grid-column-end: 3;

`

const Wrapper = styled(Container)`
height: 30rem;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 1rem;
`
const ImageSet = function () {

   return (
      <Wrapper marginTop="4rem">
         <Image1 imgSrc="/image/services_1.jpg" />
         <Image2 imgSrc="/image/services_2.jpg" />
         <Image3 imgSrc="/image/services_3.jpg" />
      </Wrapper>
   )
}

export default ImageSet