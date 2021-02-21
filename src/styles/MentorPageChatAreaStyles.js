const styles = theme => ({
    headerStatus: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
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
export default styles;