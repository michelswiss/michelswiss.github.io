import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from "@material-ui/icons/LinkedCamera";
import GalleryIcon from "@material-ui/icons/Image";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import SendFileIcon from "@material-ui/icons/Description";
import TextField from "@material-ui/core/TextField";
import EmojiIcon from "@material-ui/icons/Mood";
import dataEmoji from 'emoji-mart/data/facebook.json';
import { Picker } from 'emoji-mart';
import { withStyles } from '@material-ui/core/styles';
import 'emoji-mart/css/emoji-mart.css';
import styles from './styles/ChatAreaFooterFormStyles';

function ChatAreaFooterForm({classes}) {
    const [emojiDialog, openEmojiDialog] = useState(true);
    const toggleDialog = () => {
        openEmojiDialog(!emojiDialog);
    }
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
                    <IconButton 
                        size={'small'}
                        onClick={() => toggleDialog()}
                    >
                        <EmojiIcon/>
                    </IconButton>
                </div>
            </div>
            <div 
                className={classes.charAreaEmojiDialog}
                style={{display: emojiDialog ? 'none' : 'block'}}
            >
                <Picker
                    onSelect={(emoji) => {console.log(emoji)}}
                    title={'PDP Emoji'}
                    set={'facebook'}
                    data={dataEmoji}
                />
            </div>
        </div>
    )
}
export default withStyles(styles)(ChatAreaFooterForm);