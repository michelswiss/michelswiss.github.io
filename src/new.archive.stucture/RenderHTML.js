import React, { Component } from 'react';
import TabPanel from './TabPanel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import NotificationIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import Slides from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import './new.original.css';
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
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const styles = theme => ({
    drawerAppBar: {
        boxShadow: 'none',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: 240
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerList: {
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '5px 5px 2px',
        paddingBottom: '4rem'
    },
    drawerListIcon: {
        padding: '5px'
    },
    listMenu: {
        marginTop: '5rem'
    },
    drawerControlDivider: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        border: '1px solid #f8f8f8'
    },
    drawerControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbar: theme.mixins.toolbar,
    box: {
        marginLeft: 'auto'
    },
    authorAvatar: {
        padding: '5px'
    },
    authorName: {
        flexGrow: 1
    },
    mainApp: {
        width: '100vw'
    },
    main: {
        marginLeft: drawerWidth,
        '& .row': {
            width: '100vw',
            '& .col-md-4': {
                backgroundColor: 'red !important'
            },
            '& .col-md-5': {
                backgroundColor: 'green !important'
            },
            '& .col-md-3': {
                backgroundColor: 'yellow !important'
            }
        },
    },
    tabPanelControl: {

    },
    tabPanel: {
        width: '100%',
    },
    tabPanelAppBar: {
        boxShadow: 'none'
    },
    tabPanelItem: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evently'
    },
    panelItem: {
        
    },
    panelActiveItem: {

    }
});

class RenderHTML extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panel: 0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({panel: newValue});
    }
    render() {
        const { classes } = this.props;
        const { panel } = this.state;
        return (
            <div className={'container-wrapper'}>
                { /* <div className={'drawer'}>
                    drawer here
                </div> */ }
                <Drawer
                    className={classes.drawer}
                    variant={'permanent'}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    anchor={'left'}
                    position={'static'}
                >
                    <div className={classes.toolbar}/>
                    <Divider/>
                    <List className={classes.drawerList}>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <CoursesIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'All Courses'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <ChatIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Mentors Page'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <DevicesIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Devices'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <VideocamIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Zoom'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Settings'}/>
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
                                <ListItemText primary={'Go Home Page'}/>
                            </ListItem>
                            <ListItem
                                button
                                className={classes.drawerListItem}
                            >
                                <ListItemIcon className={classes.drawerListIcon}>
                                    <LogoutPlatformIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Logout'}/>
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
                                title={'close'}
                                placement={'top'}
                            >
                                <IconButton>
                                    <ChevronLeftIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </div>
                </Drawer>
                <CssBaseline/>
                <div className={classes.mainApp}>
                    <AppBar
                        color={'inherit'}
                        position={'static'}
                        className={classes.drawerAppBar}
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
                                    <Avatar
                                        src={''}
                                        alt={'Michel'}
                                    />
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
                    { /* <div className={'header'}>
                        <div className={'author-name'}>
                            Alex
                        </div>
                        <div className={'author-settings'}>
                            <div className={'avatar'}>
                                <IconButton>

                                </IconButton>
                            </div>
                            <div className={'author-notification'}>
                                89
                            </div>
                        </div>
                    </div> */ }
                    <Grid>
                    <div className={'app-container ' + classes.main}>
                            <div className={'row'}>
                                <div className={'col-md-4 p-0'}>
                                    <div className={'users-list-area'}>
                                        <div className={classes.tabPanelControl}>
                                            <div className={classes.tabPanel}>
                                                <AppBar
                                                    color={'inherit'}
                                                    position={'static'}
                                                    className={classes.tabPanelAppBar}
                                                >
                                                    <Tabs
                                                        value={panel}
                                                        onChange={this.handleChange}
                                                        indicatorColor={'primary'}
                                                        textColor={'primary'}
                                                        className={classes.tabPanelItem}
                                                    >
                                                        <Tab
                                                            label={'Homework'}
                                                            className={classes.panelItem}
                                                        />
                                                        <Tab
                                                            label={'Chat'}
                                                            className={classes.panelItem, classes.panelActiveItem}
                                                        />
                                                    </Tabs>
                                                </AppBar>
                                                { /* <div className={'tab-panel-item'}>
                                                    Homework
                                                </div>
                                                <div className={'tab-panel-item'}>
                                                    Chat
                                                </div> */ }
                                            </div>
                                            <div className={'users-search'}>
                                                <IconButton>
                                                    <SearchIcon/>
                                                </IconButton>
                                                <TextField
                                                    placeholder={'search users here'}
                                                />
                                            </div>
                                        </div>
                                        <div className={'message message-active online'}>
                                            <div className={'message-profile'}>

                                            </div>
                                            <div className={'message-detail'}>
                                                <div className={'message-name'}>
                                                    Elex
                                                </div>
                                                <div className={'message-content'}>
                                                    <span className={'message-message'}>Hi</span>
                                                    <span className={'message-date'}>12:12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-5'}>
                                    <div className={'chat-area-container'}>
                                        <div className={'chat-area-header'}>
                                            <div className={'chat-area-header-status'}>
                                                <div className={'header-status-title'}>
                                                    create carousel with bootstap and JQuery
                                                </div>
                                                <div className={'header-status-rating'}>
                                                    <h6 className={'status-text'}>
                                                        user rating
                                                    </h6>
                                                    <div className={'status-bar'}>
                                                        15%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'chat-area-header-slider'}>
                                                slider here
                                            </div>
                                        </div>
                                        <div className={'chat-area-main-container'}>
                                            <div className={'chat-message'}>
                                                <div className={'chat-message-profile'}>
                                                    <div className={'chat-message-image'}>
                                                        Alex
                                                    </div>
                                                    <div className={'chat-message-date'}>
                                                        Message seen 12:12
                                                    </div>
                                                </div>
                                                <div className={'chat-message-content'}>
                                                    <div className={'chat-message-text'}>
                                                        lorem lorem lorem
                                                    </div>
                                                    <div className={'chat-message-text'}>
                                                        lorem lorem lorem
                                                    </div>
                                                    <div className={'chat-message-text'}>
                                                        lorem lorem lorem
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'chat-area-footer-input'}>
                                            <div className={'chat-footer-content'}>
                                                <div className={'chat-footer-item'}>
                                                    camera
                                                </div>
                                                <div className={'chat-footer-item'}>
                                                    images
                                                </div>
                                                <div className={'chat-footer-item'}>
                                                    someone
                                                </div>
                                                <div className={'chat-footer-item'}>
                                                    send file
                                                </div>
                                            </div>
                                            <div className={'chat-footer-input'}>
                                                <input/>
                                            </div>
                                            <div className={'chat-footer-content'}>
                                                <div className={'chat-footer-item'}>
                                                    emoji
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-3'}>
                                    <div className={'user-detail-area'}>
                                        <div className={'user-detail-area-header'}>
                                            <div className={'user-detail-profile'}>
                                                image
                                            </div>
                                            <div className={'detail-header-title'}>
                                                title
                                            </div>
                                            <div className={'detail-header-subtitle'}>
                                                subtitle
                                            </div>
                                            <div className={'detail-header-buttons'}>

                                            </div>
                                        </div>
                                        <div className={'user-detail-changes'}>
                                            <div className={'detail-changes'}>
                                                details change
                                            </div>
                                            <div className={'detail-changes'}>
                                                details change
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(RenderHTML);