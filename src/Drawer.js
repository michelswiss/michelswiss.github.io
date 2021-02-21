import React, { PureComponent } from 'react';
import classNames from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PdpLogo from './assets/pdp-logo';
import PdpMiniLogo from './assets/pdp-mini-logo';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CoursesIcon from '@material-ui/icons/ViewCarousel';
import ChatIcon from '@material-ui/icons/Sms';
import DevicesIcon from '@material-ui/icons/Devices';
import VideocamIcon from '@material-ui/icons/Videocam';
import SettingsIcon from '@material-ui/icons/Settings';
import PushHomePageIcon from '@material-ui/icons/ExitToApp';
import LogoutPlatformIcon from '@material-ui/icons/PowerSettingsNew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { drawerWidth } from './styles/drawerWidth';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DrawerStyles';

class DrawerCore extends PureComponent {
    static defaultProps = {
        defaultDuration: 986.6,
        closeDuration: 1165
    }
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
        this.handleSubmitDrawerStatus = this.handleSubmitDrawerStatus.bind(this);
        this.changeDrawerStatusWithMouseEvent = this.changeDrawerStatusWithMouseEvent.bind(this);
        this.closeDrawerWithMouseLeave = this.closeDrawerWithMouseLeave.bind(this);
    }
    handleSubmitDrawerStatus() {
        this.props.handleChangeDrawerStatus(
            this.props.status === "open" ? "close" : "open"
        );
    }
    changeDrawerStatusWithMouseEvent(mouseEvent) {
        setTimeout(() => {
            this.props.handleChangeDrawerStatus("open");
        }, this.props.defaultDuration);
    }
    closeDrawerWithMouseLeave(leaveEvent) {
        setTimeout(() => {
            this.props.handleChangeDrawerStatus("close");
        }, this.props.closeDuration);
    }
    pushTextStatus = (event, sec) => {
        // setTimeout(() => {
        //     this.setState({showText: event});
        // }, sec);
    }
    componentDidUpdate() {
        if(this.props.status === "open") {
            this.pushTextStatus(true, 500);
        } else {
            this.pushTextStatus(false, 0);
        }
    }
    render() {
        const { classes, status, history} = this.props;
        const { showText } = this.state;
        const drawer = status === "open";
        return (
            <Drawer
                variant={'permanent'}
                className={classNames(classes.drawer, {
                    [classes.drawerPaper]: drawer,
                    [classes.drawerStatus]: !drawer,
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerPaper]: drawer,
                        [classes.drawerStatus]: !drawer,
                    }),
                }}
                anchor={'left'}
                position={'static'}
            >
                <div className={
                    `${classes.toolbar}
                    ${classes.drawerContent}`
                }
                >
                    { drawer
                        ? <PdpLogo/>
                        : <PdpMiniLogo/>
                    }
                </div>
                <Divider/>
                <List 
                    className={classes.drawerList}
                    // onMouseOver={this.changeDrawerStatusWithMouseEvent}
                    // onMouseLeave={this.closeDrawerWithMouseLeave}Z
                >
                    <ListItem
                        button
                        className={classes.drawerListItem}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'Dashboard'}/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.drawerListItem}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <CoursesIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'All Courses'}/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.drawerListItem}
                        onClick={() => history.push('/dashboard/mentor')}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'Mentors Page'}/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.drawerListItem}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <DevicesIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'Devices'}/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.drawerListItem}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <VideocamIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'Zoom'}/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.drawerListItem}
                    >
                        <ListItemIcon className={classes.drawerListIcon}>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={showText && 'Settings'}/>
                    </ListItem>
                    <Grid
                        item
                        className={classes.listMenu}
                    >
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <PushHomePageIcon/>
                            </ListItemIcon>
                            <ListItemText primary={showText && 'Go Home Page'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <LogoutPlatformIcon/>
                            </ListItemIcon>
                            <ListItemText primary={showText && 'Logout'}/>
                        </ListItem>
                    </Grid>
                </List>
                <div className={classes.drawerControlDivider}>
                    <Grid
                        item
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                        className={classes.drawerControl}
                    >
                        <Tooltip
                            title={!drawer ?'open' : 'close'}
                            placement={'top'}
                        >
                            <IconButton
                                onClick={this.handleSubmitDrawerStatus}
                            >
                                { !drawer
                                    ? <ChevronRightIcon/>
                                    : <ChevronLeftIcon/>
                                }
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </div>
            </Drawer>
        )
    }
}
export default withStyles(styles)(DrawerCore);