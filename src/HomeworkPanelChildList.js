import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    user: {
        '&:hover': {
            backgroundColor: 'lightgray'
        },
        cursor: 'pointer'
    }
});

function UserGrid({classes, name, image, id, history, tasks, profile, submitCloseDrawer}) {
    const handlePushTasksPage = () => {
        history.push(`/dashboard/mentor/homework/${id}`);
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
    return (
        <ListItem
            className="msg active"
            onClick={() => handlePushTasksPage()}
        >
            <ListItemAvatar>
                <Avatar
                    src={image}
                    alt={name}
                    className={'msg-detail'}
                />
            </ListItemAvatar>
            {/*<img className="msg-profile"*/}
            {/*     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>*/}
            <ListItemText
                className={'msg-detail'}
            >
                <div className="msg-username">
                    {name}
                </div>
                <div className="msg-content">
                    <span className="msg-message">
                        {findLastMessage(tasks)}
                    </span>
                    <span className="msg-date">20m</span>
                </div>
            </ListItemText>
        </ListItem>
        // <ListItem
        //     className={classes.user}
        //     onClick={() => handlePushTasksPage()}
        // >
        //     <ListItemAvatar>
        //         <Avatar
        //             alt={name}
        //             src={profile}
        //         />
        //     </ListItemAvatar>
        //     <ListItemText
        //         primary={name}
        //         secondary={findLastMessage(tasks)}
        //     />
        // </ListItem>
    );
}
export default withStyles(styles)(UserGrid);