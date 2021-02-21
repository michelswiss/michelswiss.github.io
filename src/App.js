import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
/**
 * import { TransitionGroup, CSSTransition } from 'react-transition-group';
 * for user transition each of Component Boxes
 */
import TemplatePage from './TemplatePage';
import DashboardRoot from './DashboardRoot';
import DashboardRoute from './DashboardRoute';
import users from './users-base/compressed.base';

class App extends PureComponent {
    static defaultProps = {
        users: users
    }
    constructor(props) {
        super(props);
        this.state = {
            drawerStatus: window.localStorage.getItem("drawerStatus") || "open",
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
        const _user_base_ = this.props.users;
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
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
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
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/hometask/:userId'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
                                                />
                                            }
                                        />
                                        <Route
                                            exact
                                            path={'/dashboard/mentor/hometask/:userId/:exerciseId'}
                                            render={routeProps => 
                                                <DashboardRoute
                                                    {...routeProps}
                                                    drawerStatus={drawerStatus}
                                                    chatArea
                                                    listArea
                                                    chatMain
                                                    areaCategory={"hometask"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
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
                                                    areaCategory={"chat"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
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
                                                    chatMain
                                                    areaCategory={"chat"}
                                                    changeDrawerStatus={this.changeDrawerStatus}
                                                    users={_user_base_}
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

export default App;
