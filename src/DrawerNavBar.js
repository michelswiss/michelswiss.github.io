import React, { Component } from 'react';
import classNames from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import NotificationIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { drawerWidth } from './styles/drawerWidth';
import 'bootstrap/dist/css/bootstrap.css';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DrawerNavBarStyles';

class DrawerNavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, status} = this.props;
        const drawer = status === "open";
        return (
            <AppBar
                color={'inherit'}
                position={'static'}
                className={classNames(classes.drawerAppBar, {
                    [classes.drawerAppBarShift]: !drawer,
                })}
            >
                <Toolbar position={'static'}>
                    <Typography
                        variant={'h6'}
                        className={classes.authorName}
                    >
                        Michel Bernard
                    </Typography>
                    <Box className={classes.box}>
                        <IconButton className={classes.authorAvatar}>
                            <PersonOutlineIcon/>
                        </IconButton>
                        <IconButton>
                            <Badge
                                badgeContent={'6'}
                                color={'secondary'}
                            >
                                <NotificationIcon/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styles)(DrawerNavBar);