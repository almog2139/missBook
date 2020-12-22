
import { BookApp } from './pages/book-app.jsx';
import { About } from './pages/about.jsx';
import { Home } from './pages/home.jsx';
import { BookDetails } from './cmps/book-app/book-details.jsx';
import { BookAdd } from './cmps/book-app/BookAdd.jsx';
import { AppHeader } from './cmps/book-app/app-header.jsx';
import { UserMsg } from './cmps/UserMsg.jsx';
const { Link } = ReactRouterDOM;


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class App extends React.Component {


    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
         <UserMsg />
                  <Switch> 
                        <Route path="/book/:bookId" component={BookDetails} />
                        <Route path="/book" component={BookApp} /> 
                        <Route path="/bookAdd" component={BookAdd} /> 
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                     </Switch> 

                </section>
            </Router>
        );
    }
}



