import React, { useRef, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Grade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cardListArea: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        transition: 'transform ease-out 0.3s',
        //overflowX: 'hidden',
        //overflowY: 'hidden',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #f8f8f8'
    },
    listCard: {
        width: '6rem !important',
        height: '120px !important',
        boxShadow: 'none',
        borderRight: '2px solid #f8f8f8',
        textAlign: 'center',
        padding: 0,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    },
    cardMedia: {
        textAlign: 'center',
        '& h6': {
            marginTop: '5px'
        }
    },
    cardContent: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& svg': {
            color: '#FFB42D'
        },
        '& h6': {
            marginBottom: '0',
            fontSize: '1.1em'
        }
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a5a5a5'
    },
    gridListStepper: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spacebetween',
        width: '100%',
        background: '#fff',
        borderRadius: '2px solid #f8f8f8',
        '& svg': {
            margin: 'auto'
        }
    },
    stepperStart: {
        width: '100px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    stepperEnd: {
        width: '100px',
        backgroundColor: 'rgb(0 0 0 / 4%)'
    },
    gridListStepperIcon: {
        margin: 'auto'
    },
    gridListStepperButton: {
        border: '2px solid #f8f8f8'
    },
});

function ChatAreaListPanel({classes, users, match, history}) {
    const defaultScroll = 100;
    const defaultScrollX = -100;
    const listRef = useRef(null);
    const [transformAnchorX, pushTransformAnchorX] = useState(0);
    const [scrollAnchorEl, pushScrollAnchorEl] = useState(400);
    const [modules, setModules] = useState([]);
    /**
     *  const [disable, pushDisable] = useState("prev");
     *  Why we use push here?
     *  exactly for navigation buttons...
     */
    const scrollGridCard = (scrollOffset) => {
        /** @func
         * this logic { func } - created by Michel
         * github: https://github.com/michelswiss
         * tester: https://github.com/fainat
         */
        let localScroll = transformAnchorX;
        let _scrollWidth = listRef.current.scrollWidth;
        let coniformScrollX = listRef.current.style.transform;
        let disableScroll = Number(coniformScrollX.slice(11, -3));
        /**@default scrollWidth atan -280 */
        let _scrollWidthX = ((-0) - (_scrollWidth - 320));
        // modify this logic
        //console.log(scrollOffset + ' === ' + defaultScroll + ' ' + coniformScrollX);
        // if scroll offset translate = 0 && scrollOffset === 100
        console.log(_scrollWidth, coniformScrollX);
        if(scrollOffset === 0) {
            // if our disable scroll position equals or big > 0
            localScroll = 0;
        } else if ((scrollOffset === defaultScrollX) || (scrollOffset === defaultScroll)) {
            //console.log(coniformScrollX + ' === ' + `translateX(${localScroll + (scrollOffset)}px)`)
            //console.log(scrollOffset < defaultScroll);
            //console.log(coniformScrollX.includes('(0px)'));
            if(disableScroll >= 0 && scrollOffset === defaultScroll) {
                localScroll = 0;
                console.log('scrollOffsetX is => (X)')
            }
            else if (scrollOffset < defaultScroll) {
                if (!(disableScroll <= _scrollWidthX)) {
                    localScroll += (scrollOffset)
                }
            } else {
                localScroll += (scrollOffset)
            }
        } else if(scrollOffset === "end") {
            localScroll = _scrollWidthX;
        }
        pushTransformAnchorX(localScroll);
        /**
         * ref dom element HTML config
         * let _scrollAnimation = listRef.current.scrollLeft;
         * let _scrollWidth = listRef.current.scrollWidth;
         */
        //pushTransformAnchorX(scrollOffset);
        /** @template
         * Hmm, whats happen with bottom function?
         * Because this section must use, transform CSS properties.
         *  - and overflow scroll animation doesnt true for this section
         *  ( if you like this way common... clone and try it... )
         */
        /** @param let _offset = findOffset(scrollOffset); */
        /**
         * for animation
         let initialScroll = 0;
         const toScroll = setInterval(() => {
                initialScroll+=5;
                listRef.current.scrollLeft += initialScroll;
                if(initialScroll >= Math.floor(_offset)){
                    clearInterval(toScroll);
                }
            }, 100);
         */
        /* listRef.current.scrollLeft += _offset; */
    };
    const findOffset = (offset) => {
        /* create list isEven values */
        /* use this ection fot only your div has overflow ++ */
        let _eachof = [];
        Array(10).fill(null).map((_, i) => {
            _eachof.push(offset % 2 === 0
                ? i
                : 4
            );
        })
        _eachof = Math.max(..._eachof);
        let _atan = Math.atan(_eachof);
        /* find normal offset size */
        _eachof = _eachof / _atan;
        let even = (_eachof / _atan) * offset;
        /* generate normal offset */
        return even;
    }
    useEffect(() => {
        console.log('this is new state', transformAnchorX);
        listRef.current.style.transform = `translateX(${transformAnchorX}px)`;
    }, [transformAnchorX])
    useEffect(() => {
        console.log('CHAT LIST PANEL USE EFFECT LOCATION HERE');
        const user = users.find((user) => user.id === match.params.userId);
        setModules(user.tasks);
    }, [history.location.pathname]);
    const pushDocumentLocationChatMain = (exerciseId) => {
        history.push(`/dashboard/mentor/hometask/${match.params.userId}/${exerciseId}`);
    }
    return (
        <React.Fragment>
            <Box
                className={classes.cardListArea}
                ref={listRef}
                /** style={{transform: 'translateX(-230px) !important'}} */
            >
                {/* <Slides/> */}
                <Grid
                    direction={'row'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <GridList className={classes.gridList}>
                        {console.log(modules)}
                        {
                            modules.map(({number, id, rating, notification}) => (
                                <Card
                                    key={id}
                                    className={classes.listCard}
                                >
                                    <CardActionArea
                                        onClick={() => pushDocumentLocationChatMain(id)}
                                    >
                                        <CardMedia className={classes.cardMedia}>
                                            <Typography variant={'h6'}>
                                                {number}
                                            </Typography>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Box>
                                                <StarIcon/>
                                            </Box>
                                            <Typography
                                                gutterBottom
                                                variant={'subtitle2'}
                                            >
                                                {rating}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className={classes.cardActions}>
                                        {notification > 0 ? (
                                            <Badge
                                                color={'secondary'}
                                                badgeContent={notification}
                                            >
                                                <Typography>
                                                    HARD
                                                </Typography>
                                            </Badge>  
                                        ) : (
                                            <Typography>
                                                HARD
                                            </Typography>
                                        )}
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </GridList>
                </Grid>
            </Box>
            <div className={'w-100'}>
                <List className={classes.gridListStepper}>
                    <ListItem
                        button
                        onClick={() => scrollGridCard(0)}
                        className={classes.stepperStart}
                    >
                        <ListItemIcon
                            className={classes.gridListStepperIcon}
                        >
                            <ChevronLeftIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.gridListStepperButton}
                        onClick={() => scrollGridCard(defaultScroll)}
                    >
                        <ListItemIcon
                            className={classes.gridListStepperIcon}
                        >
                            <ChevronLeftIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => scrollGridCard(defaultScrollX)}
                        className={classes.gridListStepperButton}
                    >
                        <ListItemIcon
                            className={classes.gridListStepperIcon}
                        >
                            <ChevronRightIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => scrollGridCard("end")}
                        className={classes.stepperEnd}
                    >
                        <ListItemIcon
                            className={classes.gridListStepperIcon}
                        >
                            <ChevronRightIcon/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
        </React.Fragment>
    );
}
export default withStyles(styles)(ChatAreaListPanel);