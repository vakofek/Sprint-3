const { NavLink } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        currPage: {
            pageName: 'App Sus',
            logoUrl: 'assets/img/logo.png',
        }
    }


    render() {
        const { pageName, logoUrl } = this.state.currPage

        return <header>
            <NavLink exact to="/"><div className="header-full-logo">
                <img src={logoUrl} />
                <h1>{pageName}</h1>
            </div></NavLink>
            <nav>
                <ul className="navbar">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/book">Books</NavLink></li>
                    <li><NavLink to="/mail">Mail</NavLink></li>
                    <li><NavLink to="/keep">Keep</NavLink></li>
                </ul>
            </nav>
        </header>
    }
}