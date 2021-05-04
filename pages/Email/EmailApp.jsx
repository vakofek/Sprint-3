const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM





export function EmailApp() {
    return (
        <Router className="email-app">
            <main>
                <h1>Email</h1>
            </main>

            {/* <Switch>
                <Route component={AddBook} path="/add-book" />
                <Route component={BookDetails} path="/book/:bookId" />
                <Route component={BookGallery} path="/book" />
            </Switch> */}
        </Router>)
}