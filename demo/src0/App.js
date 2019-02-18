// // // import React, { Component } from 'react';
// // // import { Link } from 'react-router-dom';

// // // export default class App extends Component {
// // //     render () {
// // //         return (
// // //             <div>123</div>
// // //         )
// // //     }
// // // }



// // import React from "react";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // const Index = () => <h1>Home</h1>;
// // const About = () => <h1>About</h1>;
// // const Users = () => <h1>Users</h1>;

// // const AppRouter = () => (
// //     <Router>
// //         <div>
// //             <nav>
// //                 <ul>
// //                     <li>
// //                         <Link to="/">Home</Link>
// //                     </li>
// //                     <li>
// //                         <Link to="/about/">About</Link>
// //                     </li>
// //                     <li>
// //                         <Link to="/users/">Users</Link>
// //                     </li>
// //                 </ul>
// //             </nav>

// //             <Route path="/" exact component={Index} />
// //             <Route path="/about/" component={About} />
// //             <Route path="/users/" component={Users} />
// //         </div>
// //     </Router>
// // );

// // export default AppRouter;

// // nested routing
// import React from "react";
// import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

// const App = () => (
//     <Router>
//         <div>
//             <Header />
//             {/* <Switch> */}
//                 <Route exact path="/" component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/topics" component={Topics} />
//             {/* </Switch> */}
//         </div>
//     </Router>
// );

// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>

//         <Route path={`${match.path}/:id`} component={Topic} />
//         <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
// const Header = () => (
//     <ul>
//         <li>
//             <Link to="/" replace>Home</Link>
//         </li>
//         <li>
//             <Link to="/about">About</Link>
//         </li>
//         <li>
//             <Link to="/topics">Topics</Link>
//         </li>
//     </ul>
// );

// export default App;





import React from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
    return (
        <BrowserRouter>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </BrowserRouter>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
        </button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

function Public() {
    return <h3>Public</h3>;
}

function Protected() {
    return <h3>Protected</h3>;
}

class Login extends React.Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        console.log('from', from)
        console.log('redirectToReferrer', redirectToReferrer)

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default AuthExample;