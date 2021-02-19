import React, { Component } from 'react';
import ChatAreaListPanel from './ChatAreaListPanel';
import ChatAreaFooterForm from './ChatAreaFooterForm';
import ChatAreaMain from './ChatAreaMain';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    headerStatus: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 2,
        padding: '1px',
        border: '2px solid #fff',
        background: theme.palette.background.paper,
        '& .status-text': {
            width: '50%',
            textAlign: 'left',
            margin: '5px',
            borderLeft: '2.5px solid #00b533',
            height: '35px',
            paddingLeft: '15px',
            overflow: 'auto'
        },
        '& .status-bar': {
            width: '50%',
            display: 'flex',
            flexShrink: 0,
            marginRight: '10px'
        }
    },
    statusBar: {
        marginLeft: 'auto',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: 500,
        height: '35px',
        width: '35px',
        backgroundColor: 'yellow'
    },
    chatAreaMainContainer: {
        flexGrow: 1
    },
});

class MentorPageChatArea extends Component{
    render() {
        const { classes, listArea, chatMain } = this.props;
        return (
            <div className={'chat-area-container'}>
                <div className={'chat-area-header'}>
                    <div className={'chat-area-header-status'}>
                        <div className={'header-status-title'}>
                            {listArea && <ChatAreaListPanel/>}
                        </div>
                        <div
                            className={`header-status-rating ${classes.headerStatus}`}
                        >
                            <h6 className={'status-text'}>
                                Create Auto Completed Word Input, and
                                write style and you know, pretty stransition
                                for each of Completed words.
                            </h6>
                            <div className={'status-bar'}>
                                <Typography className={classes.statusBar}>
                                    15%
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.chatAreaMainContainer}>
                    { chatMain && <ChatAreaMain/>}
                </div>
                { chatMain && (
                    <ChatAreaFooterForm
                        classes={classes}
                    />
                )}
            </div>
        )
    }
}
export default withStyles(styles)(MentorPageChatArea);