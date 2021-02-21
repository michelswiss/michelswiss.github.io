const styles = theme => ({
    tabPanelControl: {
        marginTop: 5
    },
    tabPanel: {
        width: '100%',
    },
    tabPanelAppBar: {
        boxShadow: 'none'
    },
    tabPanelItem: {
        '& .MuiTabs-flexContainer': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            '& button': {
                width: '50%'
            }
        },
        '& .MuiTabs-indicator': {
            backgroundColor: '#00b533'
        }
    },
    panelItem: {
        color: '#5f5f5f',
        transition: '.2 all ease-in-out',
        '& span:hover': {
            color: '#000'
        }
    },
    panelActiveItem: {
        color: '#000 !important',
        backgroundColor: '#f3f3f3'
    },
    userSearch: {
        margin: 5,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evently',
        marginLeft: '0rem',
        position: 'relative'
    },
    userSearchInput: {
        margin: '0 15px',
        width: '80%',
        '& input': {
            //if your finger robot add here green border for input
        }
    },
    userSearchIcon: {
        margin: '5px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    filterPaper: {
        zIndex: 100,
        position: 'absolute',
        top: '0',
        right: '60px'
    },
    userListContainer: {
        background: '#fff'
    },
    listUser: {
        width: '100%',
        height: '66vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        /* width: '55vw',
        [theme.breakpoints.up('md')]: {
            width: '75vw'
        } */
    },
});
export default styles;