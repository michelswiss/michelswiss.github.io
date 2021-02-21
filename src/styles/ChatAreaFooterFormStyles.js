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
            '& input': {
                width: '100%'
            }
        }
    },
    chatInput: {
        width: '320px',
        marginLeft: '10px'
    },
    charAreaEmojiDialog: {
        position: 'absolute',
        bottom: '80px',
        left: '200px'
    }
});
export default styles;