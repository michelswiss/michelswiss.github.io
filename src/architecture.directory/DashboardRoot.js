import React, { Component } from 'react';
import DrawerNavBar from "./DrawerNavBar";
import DrawerCore from './Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';

const drawerWidth = 240 //70;
const styles = theme => ({
    containerWrapper: {
        overflow: 'hidden'
    },
    mainApp: {
        width: '100vw'
    }
});

class DashboardRoot extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('DASHBOARD ROOT HERE');
    }
    render() {
        const { 
            classes,
            children,
            changeDrawerStatus,
            drawerStatus
        } = this.props;
        const drawer = true;
        return (
            <div
                className={`container-wrapper ${classes.containerWrapper}`}
            >
                <DrawerCore
                    status={drawerStatus}
                    handleChangeDrawerStatus={changeDrawerStatus}
                />
                <CssBaseline/>
                <div className={classes.mainApp}>
                    <DrawerNavBar status={drawerStatus}/>
                    {children}
                </div>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(DashboardRoot);