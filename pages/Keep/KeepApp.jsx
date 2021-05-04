const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM





export function KeepApp() {
    return (
        <Router className="keep-app">
           <main>
                <h1>keep</h1>
            </main>
           
            {/* <Switch>
                <Route component={AddBook} path="/add-book" />
                <Route component={BookDetails} path="/book/:bookId" />
                <Route component={BookGallery} path="/book" />
            </Switch> */}
        </Router>)
}