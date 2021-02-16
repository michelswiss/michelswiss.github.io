import React, { useRef, useState } from 'react';
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

function ListSlider({classes }) {
    const listRef = useRef(null);
    const [transformAnchorX, pushTransformAnchorX] = useState(0);
    /**
     *  const [disable, pushDisable] = useState("prev");
     *  Why we use push here?
     *  exactly for navigation buttons...
     */
    const scrollGridCard = (scrollOffset) => {
        let _scrollAnimation = listRef.current.scrollLeft;
        let _scrollWidth = listRef.current.scrollWidth;
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
                                <Card className={classes.listCard}>
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
                                        <Typography>
                                            HARD
                                        </Typography>
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
                        onClick={() => scrollGridCard(100)}
                    >
                        <ListItemIcon
                            className={classes.gridListStepperIcon}
                        >
                            <ChevronLeftIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => scrollGridCard(-100)}
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
                        //onClick={() => scrollGridCard(100)}
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
export default ListSlider;