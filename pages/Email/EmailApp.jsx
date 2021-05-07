const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { EmailList } from '../../cmps/Email/EmailList.jsx'
import { EmailSideNav } from '../../cmps/Email/EmailSideNav.jsx'
import { AddMail } from '../../cmps/Email/AddMail.jsx'


export function EmailApp() {
    return (
        <Router>
            <main className="email-app">
                <EmailSideNav />
                <div className="email-container">
                    <Switch>
                        <Route component={AddMail} path="/mail/add-mail" />
                        <Route component={EmailList} path="/mail" />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}