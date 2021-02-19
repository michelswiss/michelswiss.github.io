import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from "@material-ui/icons/LinkedCamera";
import GalleryIcon from "@material-ui/icons/Image";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import SendFileIcon from "@material-ui/icons/Description";
import TextField from "@material-ui/core/TextField";
import EmojiIcon from "@material-ui/icons/Mood";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    chatAreaFooterForm: {
        display: 'flex',
        borderTop: '2px solid #eef2f4',
        width: '100%',
        padding: '10px 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        position: 'sticky',
        bottom: 0,
        left: 0,
        '& .chat-footer-content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            '& .chat-footer-item': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '10px'
            },
            '& .chat-emoji': {
                marginLeft: '20px'
            }
        },
        '& .chat-footer-input': {
            width: '80%',
        }
    },
    chatInput: {
        width: '100%',
        marginLeft: '10px'
    }
});

function ChatAreaFooterForm({classes}) {
    return (
        <div className={classes.chatAreaFooterForm}>
            <div className={'chat-footer-content'}>
                <div className={'chat-footer-item'}>
                    <IconButton size={'small'}>
                        <CameraIcon/>
                    </IconButton>
                </div>
                <div className={'chat-footer-item'}>
                    <IconButton size={'small'}>
                        <GalleryIcon/>
                    </IconButton>
                </div>
                <div className={'chat-footer-item'}>
                    <IconButton size={'small'}>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
                <div className={'chat-footer-item'}>
                    <IconButton size={'small'}>
                        <SendFileIcon/>
                    </IconButton>
                </div>
            </div>
            <div className={'chat-footer-input'}>
                <TextField
                    label={'send message here'}
                    className={classes.chatInput}
                    margin={'dense'}
                    variant={'outlined'}
                    multiline
                />
            </div>
            <div className={'chat-footer-content'}>
                <div className={'chat-footer-item chat-emoji'}>
                    <IconButton size={'small'}>
                        <EmojiIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(ChatAreaFooterForm);