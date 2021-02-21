import {drawerWidth} from "./drawerWidth";

const styles = theme => ({
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
    box: {
        marginLeft: 'auto'
    },
    authorAvatar: {
        padding: '10px'
    },
    authorName: {
        flexGrow: 1
    },
});
export default styles;