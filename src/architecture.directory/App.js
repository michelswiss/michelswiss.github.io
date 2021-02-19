import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TemplatePage from './TemplatePage';
import DashboardRoot from './DashboardRoot';
import DashboardRoute from './DashboardRoute';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerStatus: window.localStorage.getItem("drawerStatus")
        }
        this.changeDrawerStatus = this.changeDrawerStatus.bind(this);
    }
    componentDidMount() {
        console.log('app status started');
    }
    changeDrawerStatus(status) {
        /** @optimize App State*/
        this.state.drawerStatus !== this.state
        && this.setState({ drawerStatus: status}, () => {
            this.asyncChangeStorage();
        })
    }
    asyncChangeStorage() {
        /**@async App constructor data's */
        const { drawerStatus } = this.state;
        window.localStorage.setItem("drawerStatus", drawerStatus);
    }
    render() {
        const { drawerStatus } = this.state;
            /**
             * @update
             * update after all pages routes ended
             * optimize components slide with React Transition Group
             */
        return (
            <Route
                render={({ location }) => (
                    <Switch location={location}>
                        <Route
                            path={'/dashboard/mentor'}
                            render={routeProps => (
                                /**
                                * @default page =>
                                * default empty dashboard section
                                * in-case intro page
                                */
                                <DashboardRoot
                                    {...routeProps}
                                    drawerStatus={drawerStatus}
                                    changeDrawerStatus={this.changeDrawerStatus}
                                >
                                    <Switch location={location}>
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea={false}
                                                    listArea={false}
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/hometask'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea={false}
                                                    listArea={false}
                                                    chatMain={false}
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/hometask/:exerciseId'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea
                                                    chatMain={false}
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/hometask/:exerciseId/:userId'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea
                                                    chatMain
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/chat'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea={false}
                                                    areaCategory={"chat"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/chat/:userId'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea={false}
                                                    areaCategory={"chat"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                />
                                            }
                                        />
                                    </Switch>
                                </DashboardRoot>
                            )}
                        />
                        <Route
                            exact
                            path={'/dashboard'}
                            render={routeProps => (
                                <DashboardRoot
                                    {...routeProps}
                                    drawerStatus={drawerStatus}
                                    changeDrawerStatus={this.changeDrawerStatus}
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/'}
                            render={routeProps => 
                                <TemplatePage
                                    {...routeProps}
                                />
                            }
                        />
                    </Switch>
                )}
            />
        )
    }
}

function DashboardMain(props) {
    return (
        <div>
            <h3>this is global main page works for all component</h3>
            <h3>Go to mentor page</h3>
            <Link to={'/dashboard/mentor'}>click here</Link>
            <h3>Go to homework</h3>
            <Link to={'/dashboard/mentor/hometask'}>click here</Link>
            <h3>Go to chat</h3>
            <Link to={'/dashboard/mentor/chat'}>click here</Link>
            <h3>Go to homework exercise and message </h3>
            <Link to={'/dashboard/mentor/hometask/123456789/1234567889'}>click here</Link>
            <h3>Go to chat user</h3>
            <Link to={'/dashboard/mentor/chat/123456789'}>click here</Link>
        </div>
    )
}

export default App;

                         {/* <Route
                            exact
                            path={'/dashboard/mentor'}
                            render={routeProps =>
                                <DashboardRoot
                                    {...routeProps}
                                    drawerStatus={drawerStatus}
                                    changeDrawerStatus={this.changeDrawerStatus}
                                >
                                    <DashboardRoute
                                        {...routeProps}
                                        drawerStatus={drawerStatus}
                                    >
                                        <Switch>
                                            <Route
                                                exact
                                                path={'/'}
                                                render={routeProps =>
                                                    <DashboardMain
                                                        {...routeProps}
                                                    />
                                                }
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/hometask'}
                                                render={routeProps => 
                                                    <DashboardRoute
                                                        {...routeProps}
                                                        chatArea={true}
                                                        listArea={true}
                                                        areaCategory={"hometask"}
                                                    />
                                                }
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/chat'}
                                                render={routeProps =>
                                                    <div>
                                                        chat
                                                    </div>
                                                }
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/homework/:userId'}
                                                render={routeProps =>
                                                    <div>
                                                        homework userId
                                                    </div>
                                                }
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/homework/:userId/:exerciseId'}
                                                render={routeProps =>
                                                    <div>
                                                        homework userId exerciseId
                                                    </div>
                                                }
                                            />
                                            <Route
                                                exact
                                                path={'/dashboard/mentor/chat/:userId/'}
                                                render={routeProps =>
                                                    <div>
                                                        chat userId
                                                    </div>
                                                }
                                            />
                                        </Switch>
                                    </DashboardRoute>
                                </DashboardRoot>
                            }
                         /> */}
                        {/* <Route
                            exact
                            path={'/dashboard'}
                            render={routeProps =>
                                <DashboardRoot
                                    {...routeProps}
                                    drawerStatus={drawerStatus}
                                    changeDrawerStatus={this.changeDrawerStatus}
                                />
                            }
                        />
                        <Route
                            exact
                            path={'/'}
                            render={routeProps =>
                                <TemplatePage
                                    {...routeProps}
                                />
                            }
                        />
                        <Redirect exact from={'*'} to={'/'}/> */}