import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
});

function MentorPanelChild(props) {
    const {
        classes,
        id, 
        name,
        phoneNumber,
        profile,
        tasks,
        history,
        submitCloseDrawer,
        notification,
        pathLocation
     } = props;
    const handlePushTasksPage = () => {
        history.push(`/dashboard/mentor/${pathLocation === "hometask" ? "hometask" : "chat"}/${id}`);
        return submitCloseDrawer("close");
    }
    const sliceStringLength = (string) => {
        return string.length > 70
            ? string.slice(0, 70) + '...' 
            : string;
    }
    const findLastMessage = (eachOfTasks) => {
        const messagesList = eachOfTasks[eachOfTasks.length - 1].messages;
        return sliceStringLength(messagesList[messagesList.length - 1].text);
    }
    const lastMessage = findLastMessage(tasks);
    return (
        <ListItem
            button
            key={id}
            className={
                `${classes.listUserItem}`
            }
            // ${3 === 3 && classes.listUserItemActive}
            onClick={() => handlePushTasksPage()}
        >
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={profile}
                />
            </ListItemAvatar>
            <ListItemText
                className={classes.userlistText}
                /* shuld uppercase: userListText */
                primary={name}
                secondary={
                    <React.Fragment>
                        <Badge
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            style={{display: `${notification > 0 ? 'block' : 'none'}`}}
                            color={'secondary'}
                            badgeContent={notification}
                            className={classes.userBadge}
                        >
                            {lastMessage}
                        </Badge>
                        {notification <= 0 && lastMessage}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}
export default  withStyles(styles)(MentorPanelChild);