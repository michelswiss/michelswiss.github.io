import {drawerWidth} from "./drawerWidth";

const styles = theme => ({
    drawer: {
        overflow: 'hidden'
    },
    drawerAppBar: {
        boxShadow: 'none',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerAppBarShift: {
        boxShadow: 'none !important',
        width: `calc(100% - 70px)`,
        marginLeft: '70px !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    drawerPaper: {
        overflowX: 'hidden',
        width: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerStatus: {
        width: '70px !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerContent: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin:'4px 2px 4px',
        padding: '10px 10px'
    },
    drawerList: {
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '5px 5px 2px',
        paddingBottom: '4rem'
    },
    drawerListIcon: {
        padding: '5px'
    },
    listMenu: {
        marginTop: '5rem'
    },
    drawerControlDivider: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        border: '1px solid #f8f8f8'
    },
    drawerControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbar: theme.mixins.toolbar,
});
export default styles;