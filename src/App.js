import React, {Component} from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import MentorsPageParent from './MentorsPageParent';
import AlertEmptySection from './AlertEmtySection';
import HomeworkChildGridForm from './HomeworkChildGridForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerStatus: window.localStorage.getItem("drawerStatus") || "open",
        }
        this.changeDrawerStatus = this.changeDrawerStatus.bind(this);
        this.asyncChangeStorage = this.asyncChangeStorage.bind(this);
    }
    componentDidMount() {
        console.log('started App Route');
        // your must put here focus use data
    }
    changeDrawerStatus(status) {
        /** @optimize App State */
        this.state.drawerStatus !== status
        && this.setState({drawerStatus: status}, () => {
            this.asyncChangeStorage();
        });
    }
    asyncChangeStorage() {
        const { drawerStatus } = this.state;
        /** @async drawerStatus to browser local */
        window.localStorage.setItem("drawerStatus", drawerStatus);
    }
    render() {
        const { drawerStatus } = this.state;
        return (
            <Route
                render={({ location }) => (
                    <Switch location={location}>
                        <Route
                            path={"/dashboard/mentor"}
                            render={routeProps => (
                                <Dashboard
                                    {...routeProps}
                                    drawerStatus={drawerStatus}
                                    handleChangeDrawerStatus={this.changeDrawerStatus}
                                >
                                    <MentorsPageParent
                                        {...routeProps}
                                        changeDrawerStatus={this.changeDrawerStatus}
                                    >
                                        <Switch location={location}>
                                            <Route
                                                exact
                                                path={'/'}
                                                render={() => <Main/>}
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/chat'}
                                                render={() => <AlertEmptySection/>}
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/homework'}
                                                render={() => <AlertEmptySection/>}
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/chat/:userId'}
                                                render={() => <Main/>}
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/homework/:userId'}
                                                render={routeProps =>
                                                    <HomeworkChildGridForm
                                                        {...routeProps}
                                                    />
                                                }
                                            />
                                            <Route
                                                exact
                 z                               path={'/dashboard/mentor/homework/:userId/:exerciseId'}
                                                render={routeProps => 
                                                    <HomeworkChildGridForm
                                                        {...routeProps}
                                                    />
                                                }
                                            />
                                        </Switch>
                                    </MentorsPageParent>
                                </Dashboard>
                            )}
                        />
                        <Route
                            exact
                            path={'/dashboard'}
                            render={routeProps =>
                                <Dashboard
                                    {...routeProps}
                                >
                                    <div>
                                        <h1>Go to Mentors Page</h1>
                                        <Link to={'/dashboard/mentor'}>Mentors</Link>
                                    </div>
                                </Dashboard>
                            }
                        />
                        <Route
                            exact
                            path={'/'}
                            render={routeProps =>
                                <HomePage
                                    {...routeProps}
                                />
                            }
                        />
                        <Redirect exact from={"*"} to={"/"} />
                    </Switch>
                )}
            />
        );
    }
}

const Main = (props) => {
    return (
        <div>
            <h1>Main for /mentors path</h1>
        </div>
    );
}


export default App;