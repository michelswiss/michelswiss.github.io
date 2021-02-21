import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MentorPanelChildStyles';

function MentorPanelChild(props) {
    const {
        classes,
        id, 
        name,
        profile,
        tasks,
        history,
        submitCloseDrawer,
        notification,
        pathLocation,
        active
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
                `${classes.listUserItem}
                ${active && classes.listUserItemActive}
                `
            }
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
                    notification > 0 ? (
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
                        </React.Fragment>
                    ) : lastMessage
                }
            />
        </ListItem>
    )
}
export default  withStyles(styles)(MentorPanelChild);