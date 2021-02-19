import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import  { withStyles } from '@material-ui/core/styles';
import DocumentIcon from '@material-ui/icons/Description';
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/GetApp';

const styles = theme => ({
    messageDoc: {
        display: 'flex',
        alignItems: 'center',
        padding: '30px 0',
        flexShrink: '0',
        justifyContent: 'space-between'
    },
    messageDocWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    docWrapperIcon: {
        marginRight: '15px',
        backgroundColor: '#eaeefc',
        color: '#4d76fd',
        width: '50px',
        padding: '9px',
        borderRadius: '4px',
        fontSize: '3rem'
    },
    messageDocDetail: {
        outline: 'none',
        boxSizing: 'border-box'
    },
    docName: {
        color: '#4d76fd',
        fontWeight: '600',
        fontSize: '15px',
        marginBottom: '3px'
    },
    docDate: {
        fontsSize: '13px'
    },
    docGrid: {
        marginRight: '10px'
    }
});

function ChildGridAreaHeader({classes, id, name, profile, messages}) {
    const formatMessageDate = (messageDate) => {
        // const year = messageDate.getFullYear();
        // const month = messageDate.getMonth();
        // const date = messageDate.getDate();
        // const hours = messageDate.getHours();
        // const minutes = messageDate.getMinutes();
        // return `${date}-${month}-${year} \n T: ${hours}:${minutes}`;
        return messageDate;
    }
    return (
        <React.Fragment key={id}>
            { messages.map((message) => (  
                <div
                    className={`chat-msg ${id !== message.id && 'owner'}`}
                >
                    <div className={'chat-msg-profile'}>
                        <IconButton
                            className={'chat-msg-img'}
                        >
                            <Avatar
                                src={`${id === message.id && profile}`}
                                alt={`${id === message.id ? name : "Admin"}`}
                            />
                        </IconButton>
                        <div className={'chat-msg-date'}>
                            { formatMessageDate(message.date) }
                        </div>
                    </div>
                    <div className={'chat-msg-content'}>
                        <div className={'chat-msg-text'}>
                            { message.file && (
                                <div className={classes.messageDoc}>
                                    <div className={classes.messageDocWrapper}>
                                        <DocumentIcon
                                            className={classes.docWrapperIcon}
                                        />
                                    <div class={classes.messageDocDetail}>
                                        <div className={classes.docName}>
                                            Article.docx
                                        </div>
                                        <div className={classes.docDate}>
                                            {/* { formatMessageDate(message.date) } */}
                                        </div>
                                    </div>
                                    </div>
                                    <div className={classes.docGrid}>
                                        <IconButton>
                                            <DeleteIcon
                                                color={'secondary'}
                                            />
                                        </IconButton>
                                        <IconButton>
                                            <DownloadIcon
                                                color={'primary'}
                                            />
                                        </IconButton>
                                    </div>
                                </div>
                            )}
                            { message.text }
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>    
    );
}
export default withStyles(styles)(ChildGridAreaHeader);