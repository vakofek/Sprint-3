const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { AppHeader } from './cmps/AppHeader.jsx'
import { BookApp } from './pages/Book/BookApp.jsx'
import { EmailApp } from './pages/Email/EmailApp.jsx'
import {KeepApp } from './pages/Keep/KeepApp.jsx'
import {Home} from './pages/Home.jsx'


export function App() {
    return (
        <Router className="app">
            <AppHeader />
            <Switch>
                <Route component={BookApp} path="/book" />
                <Route component={KeepApp} path="/keep" />
                <Route component={EmailApp} path="/mail" />
                <Route component={Home} path="/" />
            </Switch>
        </Router>)
}
