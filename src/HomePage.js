import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    body: {
        padding: '15px',
        border: '1px solid lightgray',
        borderRadius: '5px'
    },
    header: {
        margin: '10px',
        padding: '5px',
        borderBottom: '1px solid lightgray'
    },
    title: {
        opacity: '.7'
    },
    h4: {
        opacity: '.9',
        '& p': {
            opacity: '1',
            color: 'lightblue'
        }
    },
    footer: {
        padding: '15px',
        width: '100%',
        backgroundColor: 'linear-gradient( 135deg, #348048, #8b98d6fc)',
        '& button': {
            padding: '10px',
            width: '20%',
            border: 'none',
            background: 'black',
            color: '#fff',
            borderRadius: '10px',
            marginLeft: '15px',
            outline: 'none',
            cursor: 'pointer'
        }
    }
});

class HomePage extends Component {
    render() {
        const { classes, history } = this.props;
        return (
            <div className={classes.body}>
                <div className={classes.header}>
                    <h3 className={classes.title}>
                        Welcome Back!
                    </h3>
                    <h4 className={classes.h4}>
                        Sorry, for this project.
                        <p> Example , and Stuff project | PDP Online Platform </p>
                    </h4>
                </div>
                <div className={classes.footer}>
                    Dashboard & Mentors Page here => Click
                    <button onClick={() => { history.push('/dashboard') }}>
                        Hmm, are you sleeping?
                    </button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);