import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const AboutPage = () => {
    return (
        <div className='wrapper'>
            <Header>
                <Navigation />
            </Header>
            <main className="main">
                <div className="conteiner main__conteiner">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptas? Velit nisi aut quasi, doloremque commodi distinctio dolore laboriosam rerum quod sint culpa ad voluptates? Possimus praesentium ullam inventore aliquid.</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage;
