import React from 'react';
import ChatAreaListPanel from './ChatAreaListPanel';
import ChatAreaMain from './ChatAreaMain';
import ChatAreaFooterForm from './ChatAreaFooterForm';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MentorPageChatAreaStyles';

function MentorPageChatArea({ classes, user, panel, message, modules, match, history, listArea, chatMain}) {
    return (
        <div className={'chat-area-container'}>
            <div className={'chat-area-header'}>
                <div className={'chat-area-header-status'}>
                    <div className={'header-status-title'}>
                        {listArea && (
                            <ChatAreaListPanel
                                user={user}
                                modules={modules}
                                match={match}
                                history={history}
                            />
                        )}
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
                { chatMain && (
                    <ChatAreaMain
                        panel={panel}
                        pathUser={user}
                        message={message}
                    />
                )}
            </div>
            { chatMain && (
                <ChatAreaFooterForm/>
            )}
        </div>
    )
}
export default withStyles(styles)(MentorPageChatArea);