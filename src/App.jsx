import Hero from './Hero'
import Section from './Section'
import ImageSet from './ImageSet'
import Faq from './Faq'
import Footer from './Footer'
import CardSet from './CardSet'
import { Main } from './style/global'

function App() {
  return (
    <Main>
      <Hero></Hero>
      <Section title="Our services" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Labore repellendus corporis fugiat, quas incidunt sapiente doloremque perferendis
            tempora nisi."></Section>
      <ImageSet></ImageSet>
      <Section title="Packages" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Labore repellendus corporis fugiat, quas incidunt sapiente doloremque perferendis
            tempora nisi."></Section>
      <CardSet></CardSet>
      <Faq></Faq>
      <Footer></Footer>
    </Main>
  )
}

export default App
