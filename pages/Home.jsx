const { NavLink } = ReactRouterDOM



export function Home() {

    var scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <section className="home-page">
            <img className="hero-img" src="assets/img/hero.jpg" />
            <h1 className="hero-txt"> <span>Connect.</span><span> Collaborate.</span><span> Create.</span></h1>
            <div className="home-info-container">
                <h1 className="home-info-txt">Loved by over 2 million users at 250,000 businesses around the world</h1>
                <img className="home-info-img book-bundle" src="assets/img/mockup/book-bundle.png" />
                <img className="home-info-img mail-bundle" src="assets/img/mockup/mail-bundle.png" />
                <img className="home-info-img keep-bundle" src="assets/img/mockup/keep-bundle.png" />
                <NavLink onClick={scrollUp} to="/book">Try Books Now</NavLink>
                <NavLink onClick={scrollUp} to="/mail">Try Mail Now</NavLink>
                <NavLink onClick={scrollUp} to="/keep">Try Keep Now</NavLink>
            </div>
            <img src="assets/img/mail-mockup.jpg" />
            <div className="home-info-container">
                <h1 className="home-info-txt">Security Meets Modern Design</h1>
                <p>Our next-generation services is designed to help you work faster by being easy to use.</p>
                <p>The encryption we use to ensure user privacy is completely invisible.</p>
                <img className="home-info-img page-bundle" src="assets/img/mockup/page-bundle.png" />
            </div>
            <img src="assets/img/keep-mockup.jpg" />
            <img src="assets/img/book-mockup.jpg" />
        </section>
    )
}

