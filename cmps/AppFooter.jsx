const { Link } = ReactRouterDOM

export class AppFooter extends React.Component {

    state = {
        currPage: {
            pageName: 'App Sus',
            logoUrl: 'assets/img/logo.png',
        }
    }

    scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        const { pageName, logoUrl } = this.state.currPage

        return <footer onClick={this.scrollUp} className="app-footer">
           <a href='https://www.linkedin.com/in/ofek-vaknin-397ab3210/'><h2>ofekVaknin</h2></a> 
            <div className="footer-full-logo">
                <img src={logoUrl} />
                <h1>{pageName}</h1>
            </div>
            <a href='https://www.linkedin.com/in/eli-moyal-26856449/'><h2>eliMoyal</h2></a>
        </footer>
    }
}