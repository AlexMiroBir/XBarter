/**
 *
 *
 * SWiper for React
 *
 * https://swiperjs.com/react
 *
 *
 * DEMO on JS:
 * https://swiperjs.com/demos
 *
 *
 * */


import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectCube, Keyboard, Navigation, Pagination, Scrollbar} from 'swiper/core';
import {Box} from "@material-ui/core";


// Import Swiper styles
import 'swiper/swiper-bundle.css';
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
        swiper: {
            width: "505px",

        },
        goodInfo: {
            backgroundColor: "white",
            fontSize: '1.1rem',
        },
        picturesBox: {
            display: 'flex',
            flexFlow: 'row nowrap',
            // margin:"0 150px",
        },
        verticalPicturesBox: {
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-between',
            '&>:nth-child(1)': {
                marginBottom: '5px',
            }, '&>:nth-child(2)': {
                marginBottom: '5px',
            }, '&>:nth-child(3)': {
                marginBottom: '5px',
            }, '&>:nth-child(4)': {
                marginBottom: '0px',
            },

        },
        mainPic: {
            width: '400px',
            marginRight: '5px'
        },
        smallPic: {
            width: '100px',
            cursor:'pointer',

        },

    }))
;


const MySwiper = () => {


    SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCube, Keyboard]);

    const [state, setState] = useState(
        {
            offers: [
                {
                    id: Date.now(),
                    user: 'Bob Dilan',
                    rating: '5',
                    city: 'Boston',
                    country: 'USA',
                    name: 'Long Board',
                    pic1: "https://picsum.photos/id/1/500/300",
                    pic2: "https://picsum.photos/id/2/500/300",
                    pic3: "https://picsum.photos/id/3/500/300",
                    pic4: "https://picsum.photos/id/4/500/300",
                    pic5: "https://picsum.photos/id/5/500/300",

                }, {
                    id: Date.now() + 1,
                    user: 'Dil Boban',
                    rating: '4',
                    city: 'Huston',
                    country: 'USA',
                    name: 'Bong Loard',
                    pic1: "https://picsum.photos/id/1/500/300",
                    pic2: "https://picsum.photos/id/2/500/300",
                    pic3: "https://picsum.photos/id/3/500/300",
                    pic4: "https://picsum.photos/id/4/500/300",
                    pic5: "https://picsum.photos/id/5/500/300",
                }, {
                    id: Date.now() + 2,
                    user: 'Mic Jager',
                    rating: '2',
                    city: 'NY',
                    country: 'USA',
                    name: 'Bong',
                    pic1: "https://picsum.photos/id/1/500/300",
                    pic2: "https://picsum.photos/id/2/500/300",
                    pic3: "https://picsum.photos/id/3/500/300",
                    pic4: "https://picsum.photos/id/4/500/300",
                    pic5: "https://picsum.photos/id/5/500/300",
                },


            ]
        }
    )


    const swapPictures = (offerId, picUrl, clickedPicNumber) => {
        const offerIndex = state.offers.findIndex(offer => offer.id === offerId)
        let currentMainPictureUrl = state.offers[offerIndex].pic1;
        let offer = state.offers[offerIndex]
        offer.clickedPicNumber = currentMainPictureUrl
        offer.pic1 = picUrl
        setState({
            offers: [...state.offers.slice(0, offerIndex), offer, ...state.offers.slice(offerIndex + 1)]
        })

    }

    const classes = useStyles()

    return (
        <Swiper
            className={classes.swiper}
            loop={true}
            keyboard={true}
            effect="cube"
            spaceBetween={5}
            slidesPerView={1}
            // navigation
            pagination={{clickable: true}}
            // scrollbar={{ draggable: true }}

        >
            {state.offers.map((offer, i) =>
                <SwiperSlide key={i}>
                    <Box className={classes.goodInfo}>
                        <Box className={classes.picturesBox}>
                            <img className={classes.mainPic} src={offer.pic1}/>
                            <Box className={classes.verticalPicturesBox}>
                                <img onClick={() => swapPictures(offer.id, offer.pic2, "pic2")}
                                     className={classes.smallPic} src={offer.pic2}/>
                                <img onClick={() => swapPictures(offer.id, offer.pic3, "pic3")}
                                     className={classes.smallPic} src={offer.pic3}/>
                                <img onClick={() => swapPictures(offer.id, offer.pic4, "pic4")}
                                     className={classes.smallPic} src={offer.pic4}/>
                                <img onClick={() => swapPictures(offer.id, offer.pic5, "pic5")}
                                     className={classes.smallPic} src={offer.pic5}/>

                            </Box></Box>

                        <Box>Title: <span style={{fontWeight: '900'}}>{offer.name}</span></Box>
                        <Box>User: <span style={{fontWeight: '900'}}>{offer.user}</span></Box>
                        <Box>Rating: <span style={{fontWeight: '900'}}>{offer.rating}</span></Box>
                        <Box>Country: <span style={{fontWeight: '900'}}>{offer.country}</span></Box>
                        <Box>City: <span style={{fontWeight: '900'}}>{offer.city}</span></Box>


                    </Box>


                </SwiperSlide>
            )}


        </Swiper>
    );
};
export default MySwiper