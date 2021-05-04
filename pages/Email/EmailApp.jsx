const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { EmailList } from '../../cmps/Email/EmailList.jsx'
import { EmailDetails } from '../../cmps/Email/EmailDetails.jsx'
import { EmailSideNav } from '../../cmps/Email/EmailSideNav.jsx'





export function EmailApp() {
    return (
        <Router>
            <main className="email-app">
                <EmailSideNav />
                <Switch>
                    <Route component={EmailDetails} path="/mail/:mailId" />
                    <Route component={EmailList} path="/mail" />
                </Switch>
            </main>
        </Router>)
}