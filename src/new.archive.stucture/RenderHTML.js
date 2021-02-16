import React, { Component, createRef } from 'react';
import TabPanel from './TabPanel';
import classNames from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
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
import FilterIcon from '@material-ui/icons/FilterList';
import PdpLogo from '../assets/pdp-logo';
import PdpMiniLogo from '../assets/pdp-mini-logo';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Grade';
import ListSlider from './ListSlider';
import './slider.css';
import './skeleton.css';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240 //70;
const styles = theme => ({
    containerWrapper: {
        overflow: 'hidden'
    },
    drawer: {
        overflow: 'hidden'
    },
    drawerAppBar: {
        boxShadow: 'none',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerAppBarShift: {
        boxShadow: 'none !important',
        width: `calc(100% - 70px)`,
        marginLeft: '70px !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    drawerPaper: {
        overflowX: 'hidden',
        width: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerStatus: {
        width: '70px !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerContent: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin:'4px 2px 4px',
        padding: '10px 10px'
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
        padding: '10px'
    },
    authorName: {
        flexGrow: 1
    },
    mainApp: {
        width: '100vw'
    },
    main: {
        marginLeft: drawerWidth,
        overflow: 'hidden',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '& .row': {
            width: '100vw',
            '& .tab-section-control': {
                marginLeft: '10px',
                maxWidth: '100% !important',
                [theme.breakpoints.up('md')]: {
                    maxWidth: '30% !important'
                },
                borderRight: '2px solid #f8f8f8'
            },
            '& .col-md-5': {
                // backgroundColor: 'green !important',
                '& .chat-area-container': {
                    overflow: 'hidden'
                }
            },
            '& .col-md-3': {
                // backgroundColor: 'yellow !important'
            }
        },
    },
    mainShift: {
        marginLeft: '70px',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    tabPanelControl: {
        marginTop: 5
    },
    tabPanel: {
        width: '100%',
    },
    tabPanelAppBar: {
        boxShadow: 'none'
    },
    tabPanelItem: {
        '& .MuiTabs-flexContainer': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-around',
            '& button': {
                width: '50%'
            }
        },
        '& .MuiTabs-indicator': {
            backgroundColor: '#00b533'
        }
    },
    panelItem: {
        color: '#5f5f5f',
        transition: '.2 all ease-in-out',
        '& span:hover': {
            color: '#000'
        }
    },
    panelActiveItem: {
        color: '#000 !important',
        backgroundColor: '#f3f3f3'
    },
    userSearch: {
        margin: 5,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evently',
        marginLeft: '0rem',
        position: 'relative'
    },
    userSearchInput: {
        margin: '0 15px',
        width: '80%',
        '& input': {
            //if your finger robot add here green border for input
        }
    },
    userSearchIcon: {
        margin: '5px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    filterPaper: {
        zIndex: 100,
        position: 'absolute',
        top: '0',
        right: '60px'
    },
    userListContainer: {
        background: '#fff'
    },
    listUser: {
        height: '66vh',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    listUserItem: {
        background: '#fff',
    },
    listUserItemActive: {
        borderLeft: '10px solid #019a2c',
        backgroundColor: '#00b533',
        color: '#fff',
        fontWeight: 700,
        transition: '.1s all ease',
        '& p': {
            color: '#fff'
        },
        '& .MuiBadge-badge': {
            backgroundColor: '#fff',
            color: '#019a2c'
        },
        '&:hover': {
            backgroundColor: '#02ac32',
        }
    },
    userListText: {
        fontWeight: '700 !important',
        '& .MuiListItemText-primary': {
            fontWeight: '700'
        }
    },
    userBadge: {
        width: '100%',
        '& .MuiBadge-badge': {
            [theme.breakpoints.up('md')]: {
                right: '15px'
            },
            right: '30px',
            bottom: '10px',
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            fontSize: '1em'
        }
    },
    // slider
    cardListArea: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        transition: 'transform ease-out 0.3s',
        //overflowX: 'hidden',
        //overflowY: 'hidden',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #f8f8f8'
    },
    listCard: {
        width: '6rem !important',
        height: '120px !important',
        boxShadow: 'none',
        borderRight: '2px solid #f8f8f8',
        textAlign: 'center',
        padding: 0,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    },
    cardMedia: {
        textAlign: 'center',
        '& h6': {
            marginTop: '5px'
        }
    },
    cardContent: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& svg': {
            color: '#FFB42D'
        },
        '& h6': {
            marginBottom: '0',
            fontSize: '1.1em'
        }
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a5a5a5'
    },
    gridListStepper: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spacebetween',
        width: '100%',
        background: '#fff',
        borderRadius: '2px solid #f8f8f8',
        '& svg': {
            margin: 'auto'
        }
    },
    stepperStart: {
        width: '100px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    stepperEnd: {
        width: '100px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    gridListStepperIcon: {
        margin: 'auto'
    },
    gridListStepperButton: {
        border: '2px solid #f8f8f8'
    }
});

class RenderHTML extends Component {
    static defaultProps = {
        messages: [
            {
                id: 1,
                primary: 'Brunch this week?',
                secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
                person: '/static/images/avatar/5.jpg',
            },
            {
                id: 2,
                primary: 'Birthday Gift',
                secondary: `Do you have a suggestion for a good present for John on his work
                  anniversary. I am really confused & would love your thoughts on it.`,
                person: '/static/images/avatar/1.jpg',
            },
            {
                id: 3,
                primary: 'Recipe to try',
                secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
                person: '/static/images/avatar/2.jpg',
            },
            {
                id: 4,
                primary: 'Yes!',
                secondary: 'I have the tickets to the ReactConf for this year.',
                person: '/static/images/avatar/3.jpg',
            },
            {
                id: 5,
                primary: "Doctor's Appointment",
                secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
                person: '/static/images/avatar/4.jpg',
            },
            {
                id: 6,
                primary: 'Discussion',
                secondary: `Menus that are generated by the bottom app bar (such as a bottom
                  navigation drawer or overflow menu) open as bottom sheets at a higher elevation
                  than the bar.`,
                person: '/static/images/avatar/5.jpg',
            },
            {
                id: 7,
                primary: 'Summer BBQ',
                secondary: `Who wants to have a cookout this weekend? I just got some furniture
                  for my backyard and would love to fire up the grill.`,
                person: '/static/images/avatar/1.jpg',
            }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            panel: 0,
            drawer: true,
            filter: false,
        }
        this.gridRef = createRef(null);
    }
    handleChange = (event, newValue) => {
        this.setState({panel: newValue});
    }
    handleToggleFilter = () => {
        this.setState({filter: !this.state.filter});
    }
    render() {
        const { classes, messages } = this.props;
        const { panel, drawer, filter} = this.state;
        return (
            <div className={`container-wrapper ${classes.containerWrapper}`}>
                <Drawer
                    className={classes.drawer}
                    variant={'permanent'}
                    className={classNames({
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
                        {/* { drawer
                            ? <PdpLogo/>
                            : <PdpMiniLogo/>
                        } */}
                    </div>
                    <Divider/>
                    <List className={classes.drawerList}>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'Dashboard'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <CoursesIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'All Courses'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <ChatIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'Mentors Page'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <DevicesIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'Devices'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <VideocamIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'Zoom'}/>
                        </ListItem>
                        <ListItem
                            button
                            className={classes.drawerListItem}
                        >
                            <ListItemIcon className={classes.drawerListIcon}>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary={drawer && 'Settings'}/>
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
                                <ListItemText primary={drawer && 'Go Home Page'}/>
                            </ListItem>
                            <ListItem
                                button
                                className={classes.drawerListItem}
                            >
                                <ListItemIcon className={classes.drawerListIcon}>
                                    <LogoutPlatformIcon/>
                                </ListItemIcon>
                                <ListItemText primary={drawer && 'Logout'}/>
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
                                    onClick={() => this.setState({drawer: !drawer})}
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
                <CssBaseline/>
                <div className={classes.mainApp}>
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
                        <div
                            className={
                                classNames( `app-container ${classes.main}`, {
                                    [classes.mainShift]: !drawer
                                })
                            }
                        >
                            <div className={'row'}>
                                <div className={'p-0 tab-section-control'}>
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
                                                        <Tooltip title={'homework communication section for checking users activity'}>
                                                            <Tab
                                                                label={'Homework'}
                                                                className={
                                                                    `${classes.panelItem} 
                                                                    ${panel === 0 && classes.panelActiveItem}`
                                                                }
                                                            />
                                                        </Tooltip>
                                                        <Tooltip title={'chat section, for helping users cummunication for online platform education'}>
                                                            <Tab
                                                                label={'Chat'}
                                                                className={
                                                                    `${classes.panelItem},
                                                                    ${panel === 1 && classes.panelActiveItem}`
                                                                }
                                                            />
                                                        </Tooltip>
                                                    </Tabs>
                                                </AppBar>
                                                { /* <div className={'tab-panel-item'}>
                                                    Homework
                                                </div>
                                                <div className={'tab-panel-item'}>
                                                    Chat
                                                </div> */ }
                                            </div>
                                            <div className={classes.userSearch}>
                                                <IconButton
                                                    className={classes.userSearchIcon}
                                                >
                                                    <SearchIcon/>
                                                </IconButton>
                                                <TextField
                                                    placeholder={'search users here'}
                                                    className={classes.userSearchInput}
                                                />
                                                { filter && (
                                                    <Paper
                                                        elevation={2}
                                                        className={classes.filterPaper}
                                                        style={{transformOrigin: 'bottom'}}
                                                    >
                                                        <MenuList>
                                                            <MenuItem onClick={this.handleToggleFilter}>
                                                                Completed
                                                            </MenuItem>
                                                            <MenuItem onClick={this.handleToggleFilter}>
                                                                Not Completed
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Paper>
                                                )}
                                                <Tooltip
                                                    title={'filter'}
                                                    placement={'bottom'}
                                                >
                                                    <IconButton
                                                        className={classes.userSearchIcon}
                                                        onClick={this.handleToggleFilter}
                                                    >
                                                        <FilterIcon/>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                        </div>
                                        {/* <div className={'message message-active online'}>
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
                                        </div> */}
                                        <Grid
                                            container
                                            className={classes.userListContainer}
                                        >
                                            <div/>
                                            <List className={classes.listUser}>
                                                {messages.map(({id, primary, secondary, person}, i) => (
                                                    <React.Fragment key={i}>
                                                        {i === 0 && <Divider/>}
                                                        <ListItem
                                                            button
                                                            key={id}
                                                            className={
                                                                `${classes.listUserItem} ${i === 3 && classes.listUserItemActive}`
                                                            }
                                                        >
                                                            <ListItemAvatar>
                                                                <Avatar
                                                                    alt={primary}
                                                                    src={person}
                                                                />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                className={classes.userlistText}
                                                                primary={primary}
                                                                secondary={
                                                                    <Badge
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'right'
                                                                        }}
                                                                        color={'secondary'}
                                                                        badgeContent={12}
                                                                        className={classes.userBadge}
                                                                    >
                                                                        {secondary}
                                                                    </Badge>
                                                                }
                                                            />
                                                        </ListItem>
                                                        <Divider/>
                                                    </React.Fragment>
                                                ))}
                                                <div className={'demo'}></div>
                                            </List>
                                        </Grid>
                                    </div>
                                </div>
                                <div className={'p-0 col-md-5'}>
                                    <div className={'chat-area-container'}>
                                        <ListSlider
                                            classes={classes}
                                        />
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