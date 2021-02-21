import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Skeleton from "@material-ui/lab/Skeleton";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MentorPanelControlStyles';

function MentorPanelControl(props) {
    const {
        classes,
        users, 
        panel, 
        history,
        match,
        pathLocation,
        filterType,
        submitCloseDrawer,
        changeMentorPanelControl
    } = props;
    const [filter, changeFilter] = useState(false);
    const [searchValue, changeSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const handleToggleFilter = () => {
        changeFilter(!filter);
    }
    const inputListener = (evt) => {
        changeSearchValue(evt.target.value);
    }
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
                            onChange={changeMentorPanelControl}
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
                        match={match}
                        userStatus={searchResult}
                        type={filterType}
                        localization={pathLocation}
                        history={history}
                        submitCloseDrawer={submitCloseDrawer}
                    />
                    {Array(3).fill(null).map((inx, key) => (
                        <ListItem button key={key + 1}>
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