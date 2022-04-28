import React from "react";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { data, images } from "../constants";

import { HeadingContent, ImageBr } from "../_components";

const Gallery = () => {
    const slides = data.gallerySlides.map(({ image, alt, link }, i) => (
        <SwiperSlide className="gallery__slide" key={alt + i}>
            <a href={link} className="gallery__link">
                <img src={images.socialIcons.instagramIcon} alt="Instagram Link" />
            </a>
            <div className="gallery__image-ibg">
                <img src={image} alt={alt} />
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="gallery">
            <div className="gallery__top">
                <HeadingContent
                    className="gallery__heading"
                    subtitle="Instagram"
                    title="Photo Gallery"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mu."
                    button="View More"
                    buttonLink="#viewMore"
                />
                <div data-da=".gallery__heading, 767.98, 3" className="gallery__slider">
                    <Swiper
                        modules={[Autoplay]}
                        className="gallery__swiper"
                        autoplay
                        grabCursor
                        loop
                        speed={1000}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            650.98: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                            991.98: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                            },
                            1300: {
                                slidesPerView: 5,
                                spaceBetween: 32,
                            },
                        }}>
                        {slides}
                    </Swiper>
                </div>
            </div>
            <div className="gallery__body body-gallery">
                <div className="body-gallery__container">
                    <div className="body-gallery__content">
                        <HeadingContent className="body-gallery__heading" subtitle="Contact" title="Find Us" />
                        <div className="body-gallery__text">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</div>
                        <ul className="body-gallery__opening">
                            <div className="body-gallery__label">Opening Hours</div>
                            <li className="body-gallery__hours">Mon - Fri: 10:00 am - 02:00 am</li>
                            <li className="body-gallery__hours">Sat - Sun: 10:00 am - 03:00 am</li>
                        </ul>
                        <a href="#visitUs" className="body-gallery__button button">
                            Visit Us
                        </a>
                    </div>
                    <ImageBr
                        dataDa=".body-gallery__content, 767.98, 2"
                        className="body-gallery__image-wrap"
                        src={images.defaultImages.find}
                        alt="Cocktail"
                    />
                </div>
            </div>
            <div className="gallery__bg-ibg">
                <img src={images.defaultImages.bg} alt="Background" />
            </div>
        </section>
    );
};

export default Gallery;
