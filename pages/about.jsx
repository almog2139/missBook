const { Route, Switch, Link } = ReactRouterDOM;


export class About extends React.Component {



    interval
    componentDidMount ()  {
        this.intreval = setInterval(() => {
            console.log('stam interval');
        }, 2000)

    }

    componentWillUnmount () {
        clearInterval(this.intreval)
    }
    render() {
        return(
        <section className="about-page">
            <h1>About Our Book Shop</h1>
            <img  className="book-img" src="/assets/img/book-store.jpg" />
            {/* <pre >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis minus, odit, sit aliquid a, dicta et excepturi quibusdam eum optio neque ipsum!
                Molestiae odit ipsum molestias libero.
                Possimus, facilis omnis.
                Lorem ipsum dolor sit amet consecte
            </pre> */}
              
               <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Officiis minus, odit, sit aliquid a, dicta et excepturi quibusdam eum optio neque ipsum!</p>
               <p> Molestiae odit ipsum molestias libero.</p>
               <p> Possimus, facilis omnis.</p>
               <p> Lorem ipsum dolor sit amet consecte</p>
          
            {/* <Link to="/about/secret">Secret content</Link> |
            <Link to="/about/stam">Not a secret</Link> |
            <Switch>
                <Route component={AboutSecret} path="/about/secret" />
                <Route component={NotSoSecret} path="/about/stam" />
            </Switch> */}
        </section>
        );

    }



}

// function AboutSecret() {
//     return <h1>TOP-SECRET</h1>;
// }

// function NotSoSecret() {
//     return <h1>Stam od Route</h1>;
// }