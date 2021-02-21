const styles = them => ({
    detailArea: {
        marginLeft: 'auto',
        padding: '30px 30px 0 30px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
    },
    detailHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    detailProfile: {
        width: 60,
        height: 60,
        marginBottom: 15
    },
    detailTitle: {
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '10px'
    },
    detailSubtitle: {

    },
    detailButtons: {
        marginTop: '20px',
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    buttonGroup: {
        width: '50%',
        '& button': {
            display: 'flex',
            margin: 'auto'
        },
        '& p': {
            fontSize: '13.5px',
            textAlign: 'center'
        }
    },
    detailStatus: {
        '& .rating-details': {
            marginTop: 15,
            marginBottom: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    statusRating: {
        width: '70%'
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 'auto'
    },
    statusButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },
    ratingButtonStatus: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toButton: {
        width: '100%',
        '&:hover': {
            boxShadow: 'none'
        },
        margin: 5,
        padding: 5,
        boxShadow: 'none',
        '& svg': {
            color: '#fff'
        }
    },
    success: {
        backgroundColor: '#52b54b !important'
    },
    warning: {
        backgroundColor: 'red !important'
    },
    detailHometask: {
        marginTop: 15,
    },
    hometaskTitle: {
        fontWeight: 600,
        fontSize: '14px',
        marginLeft: 3,
        marginBottom: 2
    },
    hometask: {
        padding: 5,
        borderLeft: '3px solid #52b54b',
        overflow: 'auto',
        height: '80px'
    },
    detailFiles: {
        marginTop: 5
    },
    detailFileTitle: {
        fontWeight: 600,
        fontSize: '14px',
        marginLeft: 3,
        marginBottom: 2
    },
    detailFilesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridColumnGap: '6px',
        gridRowGap: '6px',
        gridTemplateRows: 'repeat(3, 60px)'
    },
    files: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 5,
        objectPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a5a5a5',
        color: '#fff',
        cursor: 'pointer'
    },
    showStatus: {
        display: 'none'
    }
});
export default styles;