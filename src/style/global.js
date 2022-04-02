import styled from 'styled-components'

export const Container = styled.div`
   max-width: 1200px;
   margin-left: auto;
   margin-right: auto;
   margin-top:${props => props.marginTop || 0};
   padding: 0 1rem;
   text-align: ${props => props.textAlign || 'left'};
`
export const Main = styled.main`
   width: 100%;
   position: relative;
`

export const Title = styled.h2`
   margin-top:0.5rem;
   font-size:1.5rem;
`

export const Paragraph = styled.p`
   margin-top:0.5rem;
   font-size:1rem;
   font-weight:${props => props.fontWeight || 'normal'};
`

export const Logo = styled.h1`
   font-size:1.5rem;
   font-weight:800;
   cursor: pointer;
`