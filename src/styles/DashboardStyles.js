import drawerWidth from './drawerWidth';
const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden'
    },
    sectionAppBar: {
        marginTop: '64px',
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    },
    overflow: {
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    resize: {
        display: 'flex',
        alignItems: '',
        justifyContent: 'center',
        padding: '5px',
        '& svg': {
            fontSize: '1.9em'
        }
    },
    resizeContainer: {
        marginTop: '5px',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    }
});
export default styles;