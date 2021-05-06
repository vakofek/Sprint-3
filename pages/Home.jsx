const { Link } = ReactRouterDOM

export function Home(){
    return (
        <section className="home-page">
            <h1 className="hero-txt">Manage everything in <span>one</span> workspace.</h1>
            {/* <Link to="/book" ><button className="hero-btn">Start Here</button></Link> */}
            <img src="assets/img/hero.jpg"/>
        </section>
    )
}