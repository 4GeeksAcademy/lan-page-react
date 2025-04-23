import Navegation from './components/Navegation.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'


const Home = () => {
    return (
        <>
        <Navegation />
        
        <Section title={"A Warm Welcome!"} prrfo={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum ex libero, fugiat quam at aspernatur ab iure officiis necessitatibus facere molestias incidunt modi pariatur quo repellendus assumenda voluptate ratione."} btnjb={{text: 'Example'}} />
        
        <Footer foot={"Copyright@ 2025"}/>
        </>
        
    )

}
export default Home;