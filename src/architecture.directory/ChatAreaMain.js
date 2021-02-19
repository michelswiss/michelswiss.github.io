import React, { Component } from 'react';

class ChatAreaMain extends Component {
    render() {
        return (
            <div className={'chat-message'}>
                <div className={'chat-message-profile'}>
                    <div className={'chat-message-image'}>
                        Alex
                    </div>
                    <div className={'chat-message-date'}>
                        Message seen 12:12
                    </div>
                </div>
                <div className={'chat-message-content'}>
                    <div className={'chat-message-text'}>
                        lorem lorem lorem
                    </div>
                    <div className={'chat-message-text'}>
                        lorem lorem lorem
                    </div>
                    <div className={'chat-message-text'}>
                        lorem lorem lorem
                    </div>
                </div>
            </div>
        )
    }
}
export default ChatAreaMain;