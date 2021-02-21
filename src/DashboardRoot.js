import React, { PureComponent } from 'react';
import DrawerNavBar from "./DrawerNavBar";
import DrawerCore from './Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles/DashboardRootStyles';

class DashboardRoot extends PureComponent{
    render() {
        const { 
            classes,
            children,
            changeDrawerStatus,
            drawerStatus,
        } = this.props;
        const drawer = true;
        return (
            <div
                className={`container-wrapper ${classes.containerWrapper}`}
            >
                <DrawerCore
                    history={this.props.history}
                    status={drawerStatus}
                    handleChangeDrawerStatus={changeDrawerStatus}
                />
                <CssBaseline/>
                <div className={classes.mainApp}>
                    <DrawerNavBar
                        status={drawerStatus}
                    />
                    {children}
                </div>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(DashboardRoot);