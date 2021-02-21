const styles = theme => ({
    chatMessageArea: {
        height: '44vh',
        overflow: 'auto',
        '& .chat-area-container': {
            padding: 2,
            margin: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
        }
    },
    chatMessageAreaNext: {
        height: '66.5vh'
    },
    chatMessage: {
        display: 'flex',
        padding: '0 20px 45px'
    },
    chatMessageProfile: {
        flexShrink: 0,
        marginTop: 'auto',
        marginBottom: '-20px',
        position: 'relative',
        /** profile helpers style*/
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    chatMessageContent: {
        marginLeft: '12px',
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    chatMessageText: {
        backgroundColor: '#f1f2f6',
        padding: '15px',
        borderRadius: '20px 20px 20px 0',
        lineHeight: '1.5',
        fontSize: '14px',
        fontWeight: 500,
        fontFamily: `'Manrope', sans-serif`,
        marginTop: 10
    },
    chatMessageDate: {
        positoin: 'absolute',
        left: 'calc(100% - 12px)',
        bottom: 0,
        fontSize: '12px',
        fontWeight: 600,
        color: '#c0c7d2',
        whiteSpace: 'nowrap'
    },
    chatMessageOwner: {
        flexDirection: 'row-reverse',
        '& .message-owner': {
            borderRadius: '20px 20px 0 20px'
        }
    },
    chatMessageFile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fileArea: {
        backgroundColor: '#898989',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: '50%',
        cursor: 'pointer'
    },
    fileText: {
        padding: '0 10px'
    },
});
export default styles;