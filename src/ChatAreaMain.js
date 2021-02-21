import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FileDownloadIcon from '@material-ui/icons/CloudDownload';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ChatAreaMainStyles';

function ChatAreaMain({classes, pathUser, panel, message}) {
    return (        
        <div className={`${classes.chatMessageArea} ${panel === 1 && classes.chatMessageAreaNext}`}>
            <div className={'chat-area-container'}>
                {message.map((message, id) => (
                    <div 
                        key={message.id + id}
                        className={
                            `${classes.chatMessage} 
                            ${message.id !== pathUser.id && classes.chatMessageOwner}`
                        }
                    >
                        <div className={classes.chatMessageProfile}>
                            <IconButton>
                                <Avatar
                                    src={message.id === pathUser.id ? pathUser.profile : null}
                                    alt={message.id === pathUser.id ? pathUser.name : 'Admin'}
                                />
                            </IconButton>
                            <div className={classes.chatMessageDate}>
                                Message seen 3.26
                            </div>
                        </div>
                        <div className={classes.chatMessageContent}>
                            {message.file && (
                                <div className={classes.chatMessageText}>
                                    <div className={classes.chatMessageFile}>
                                        <div className={classes.fileArea}>
                                            <FileDownloadIcon/>
                                        </div>
                                        <div className={classes.fileText}>
                                            react-content-api.zip
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className={`${classes.chatMessageText} message-owner`}>
                                {message.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default withStyles(styles)(ChatAreaMain);