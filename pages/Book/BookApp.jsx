const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { AppHeader } from '../cmps/AppHeader.jsx'
import { AddBook } from '../Book/AddBook.jsx'
import { BookDetails } from '../Book/BookDetails.jsx'
import { BookGallery } from '../Book/BookGallery.jsx'


export function BookApp() {
    return (
        <Router className="app">
            <Switch>
                <Route component={AddBook} path="/add-book" />
                <Route component={BookDetails} path="/book/:bookId" />
                <Route component={BookGallery} path="/book" />
            </Switch>
        </Router>)
}










