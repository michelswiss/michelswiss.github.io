const styles = theme => ({
    main: {
        marginLeft: 240, //drawerWidth
        overflow: 'hidden',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '& .row': {
            width: '100vw',
            display: 'block',
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            },
            '& .tab-section-control': {
                marginLeft: '10px',
                maxWidth: '90% !important',
                [theme.breakpoints.up('md')]: {
                    maxWidth: '25% !important'
                },
                borderRight: '2px solid #f8f8f8'
            },
            '& .col-md-5': {
                // backgroundColor: 'green !important',
                maxWidth: '100% !important',
                [theme.breakpoints.up('md')]: {
                    width: '41% !important',
                },
                '& .chat-area-container': {
                    overflow: 'hidden'
                }
            },
            '& .col-md-3': {
                // backgroundColor: 'yellow !important'
                backgroundColor: '#fff',
                border: '2px solid #f8f8f8'
            },
            '& .col-md-4': {
                backgroundColor: '#fff',
                border: '2px solid #f8f8f8'
            }
        },
    },
    mainShift: {
        marginLeft: '70px',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
});
export default styles;