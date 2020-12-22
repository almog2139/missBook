const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {

    // function goToMuki() {
    //     props.history.push('/pet/i102');
    // }

    return <nav className="main-nav">
        <ul>
            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/book">Book App</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/bookAdd">add book</NavLink></li>
        </ul>
        
    </nav>;
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);
