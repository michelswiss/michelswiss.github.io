import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Grade';
import Slider from "react-slick";
import './slider.css';


class Slides extends Component {
    static defaultProps = {
        slides: [
            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            },

            // 			 CARD 2

            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            },

            // 			 CARD 3

            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            },

            // 			 CARD 4

            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            },

            // 			 CARD 5

            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            },

            // 			 CARD 6

            {
                image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                imageAlt: "Lloyd Sibson's Website Banner",
                imageTitle: "Lloyd Sibson's Logo",
                imageSocial:
                    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                imageSocialAlt: "Lloyd Sibson's Social Icon",
                imageSocialTitle: "Social Icon",
                link: "https://lloydsibson.com/",
                title: "Lloyd Sibson",
                subTitle: "Front-End Developer",
                text:
                    "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
            }
        ],
        settings: {
            dots: false,
            infinite: false,
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    };
    constructor(props) {
        super(props);
    }
    render() {
        const { settings } = this.props;
        const Sliders = this.props.slides.map((slide, key) => {
            const {
                image,
                imageAlt,
                imageTitle,
                imageSocial,
                imageSocialAlt,
                imageSocialTitle,
                title,
                subTitle,
                text,
                link
            } = slide;
            return (
                <div key={key}>
                    <div className={'rating'}>
                        <h5>1</h5>
                        <div className={'rating-star'}>
                            <IconButton button>
                                <StarIcon/>
                            </IconButton>
                            <span>4</span>
                        </div>
                        <h6>easy</h6>
                    </div>
                </div>
            )
        })
        return (
            <div className={'carousel'}>
                <Slider {...settings}>
                    {Sliders}
                </Slider>
            </div>
        )
    }
}
export default Slides;

/*

                                        <div className={'rating'}>
                                            <h5>1</h5>
                                            <div className={'rating-star'}>
                                                <IconButton button>
                                                    <StarIcon/>
                                                </IconButton>
                                                <span>4</span>
                                            </div>
                                            <h6>easy</h6>
                                        </div>
                                        <div className={'rating'}>
                                            <h5>1</h5>
                                            <div className={'rating-star'}>
                                                <IconButton button>
                                                    <StarIcon/>
                                                </IconButton>
                                                <span>4</span>
                                            </div>
                                            <h6>easy</h6>
                                        </div>
                                        <div className={'rating'}>
                                            <h5>1</h5>
                                            <div className={'rating-star'}>
                                                <IconButton button>
                                                    <StarIcon/>
                                                </IconButton>
                                                <span>4</span>
                                            </div>
                                            <h6>easy</h6>
                                        </div>

 */

