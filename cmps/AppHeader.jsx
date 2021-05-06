const { NavLink } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        currPage: {
            pageName: 'App Sus',
            logoUrl: 'assets/img/book.png',
        }
    }


    render() {
        const { pageName, logoUrl } = this.state.currPage

        return <header>
            <div className="header-full-logo">
                <img src={logoUrl} />
                <h1>{pageName}</h1>
            </div>
            <nav>
                <ul className="navbar">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/book">Books</NavLink></li>
                    <li><NavLink to="/mail">Email</NavLink></li>
                    <li><NavLink to="/keep">Keep</NavLink></li>
                </ul>
            </nav>
        </header>
    }
}