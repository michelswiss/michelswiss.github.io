import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import FilterIcon from "@material-ui/icons/FilterList";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Skeleton from "@material-ui/lab/Skeleton";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
            justifyContent: 'center',
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
        width: '100%',
        height: '66vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        /* width: '55vw',
        [theme.breakpoints.up('md')]: {
            width: '75vw'
        } */
    },
});

function MentorPanelControl(props) {
    const {classes, history, submitCloseDrawer, match, users} = props;
    const [filter, changeFilter] = useState(false);
    const [panel, pushPanel] = useState(0);
    const [filterType, setFilterType] = useState('hometask');
    const [pathLocation, pushPathLocation ] = useState('hometask');
    const [searchValue, changeSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [focusId, pushFocus] = useState("");
    const handleToggleFilter = () => {
        console.log(filter);
        changeFilter(!filter);
    }
    const handleChange = (value, nextValue) => {
        pushPanel(nextValue);
        setFilterType(nextValue === 0 ? false : true);
        pushPathLocation(nextValue === 0 ? 'hometask' : 'chat');
        history.push(`/dashboard/mentor/${nextValue === 0 ? 'hometask' : 'chat'}`);
    }
    const inputListener = (evt) => {
        changeSearchValue(evt.target.value);
    }
    useEffect(() => {
        console.log('TABPANEL CHANGES')
        if(history.location.pathname.includes("hometask")) {
            pushPanel(0);
            setFilterType("hometask");
        } else if (history.location.pathname.includes("chat")){
            pushPanel(1);
            setFilterType("chat");
        }
        match.params.userId && pushFocus(match.params.userId);
    }, [history.location.pathname]);
    useEffect(() => {
        /**@listen works for eachof user */
        const result = users.filter(user => 
            user.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        /**@return set default all users || search result here */
        setSearchResult(result);
    }, [searchValue]);
    return (
        <div className={'users-list-area'}>
            {/** @update create new component for this tabPanel for optimzing this section */}
            <div className={classes.tabPanelControl}>
                <div className={classes.tabPanel}>
                    <AppBar
                        color={'inherit'}
                        position={'static'}
                        className={classes.tabPanelAppBar}
                    >
                        <Tabs
                            value={panel}
                            onChange={handleChange}
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
                </div>
                <div className={classes.userSearch}>
                    <IconButton
                        className={classes.userSearchIcon}
                    >
                        <SearchIcon/>
                    </IconButton>
                    <TextField
                        value={searchValue}
                        onChange={inputListener}
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
                                <MenuItem onClick={() => changeFilter(false)}>
                                    Completed
                                </MenuItem>
                                <MenuItem onClick={() => changeFilter(false)}>
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
                            onClick={handleToggleFilter}
                        >
                            <FilterIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Grid
                container
                className={classes.userListContainer}
            >
                <List className={classes.listUser}>
                    <UsersList
                        focus={focusId}
                        userStatus={searchResult}
                        type={filterType}
                        localization={pathLocation}
                        history={history}
                        submitCloseDrawer={submitCloseDrawer}
                    />
                    {Array(3).fill(null).map(() => (
                        <ListItem button>
                            <ListItemAvatar>
                                <Skeleton
                                    variant={'circle'}
                                    width={50}
                                    height={50}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Skeleton variant={'text'} />
                                }
                                secondary={
                                    <React.Fragment>
                                        <Skeleton variant={'text'} />
                                        <Skeleton width={'60%'} />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </div>
    )
}
export default withStyles(styles)(MentorPanelControl);