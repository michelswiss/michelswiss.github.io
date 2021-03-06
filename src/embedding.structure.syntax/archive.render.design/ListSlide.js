import React, { useRef, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Grade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Badge from '@material-ui/core/Badge';

function ListSlide({classes }) {
    const defaultScroll = 100;
    const defaultScrollX = -100;
    const listRef = useRef(null);
    const [transformAnchorX, pushTransformAnchorX] = useState(0);
    const [scrollAnchorEl, pushScrollAnchorEl] = useState(400);
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
        let _scrollWidthX = ((-0) - (_scrollWidth - 280));
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
                        {
                            Array(10).fill(null).map((item, i) => (
                                <Card 
                                    key={i}
                                    className={classes.listCard}
                                >
                                    <CardActionArea>
                                        <CardMedia className={classes.cardMedia}>
                                            <Typography variant={'h6'}>
                                                {i}
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
                                                5
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className={classes.cardActions}>
                                        <Badge
                                            color={'secondary'}
                                            badgeContent={9}
                                        >
                                            <Typography>
                                                HARD
                                            </Typography>
                                        </Badge>
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
export default ListSlide;