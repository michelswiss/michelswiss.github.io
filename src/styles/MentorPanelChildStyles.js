const styles = theme => ({
    listUserItem: {
        background: '#fff',
    },
    listUserItemActive: {
        borderLeft: '10px solid #019a2c',
        backgroundColor: '#00b533',
        color: '#fff',
        fontWeight: 700,
        transition: '.1s all ease',
        '& p': {
            color: '#fff'
        },
        '& .MuiBadge-badge': {
            backgroundColor: '#fff',
            color: '#019a2c'
        },
        '&:hover': {
            backgroundColor: '#02ac32',
        }
    },
    userListText: {
        fontWeight: '700 !important',
        '& .MuiListItemText-primary': {
            fontWeight: '700'
        }
    },
    userBadge: {
        width: '100%',
        '& .MuiBadge-badge': {
            [theme.breakpoints.up('md')]: {
                right: '15px'
            },
            right: '30px',
            bottom: '10px',
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            fontSize: '1em'
        }
    },
});
export default styles;