import React from "react";
import { data } from "../constants";
import { HeadingContent } from "../_components";

import { Keyboard, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MainScreen = () => {
    const slides = data.mainScreenSlides.map(({ image, alt }, i) => (
        <SwiperSlide className="main-screen__slide-ibg" key={alt + i}>
            <img src={image} alt={alt} />
        </SwiperSlide>
    ));

    const params = {
        pagination: {
            el: ".main-screen__pagination",
            clickable: true,
            renderBullet: (index, className) => {
                return '<span class="' + className + '">' + (index + 1 < 10 ? `0${index + 1}` : index + 1) + "</span>";
            },
        },
    };

    return (
        <section className="main-screen">
            <div className="main-screen__container">
                <div className="main-screen__body">
                    <div className="main-screen__hashtags hashtags-main-screen">
                        <span className="hashtags-main-screen__item">#Bar</span>
                        <span className="hashtags-main-screen__item">#Gericht</span>
                    </div>

                    <HeadingContent
                        className="main-screen__content"
                        subtitle="Chase the new Flavour"
                        h1
                        title="The key to Fine dining"
                        text="Sit tellus lobortis sed senectus vivamus molestie. 
                            Condimentum volutpat morbi facilisis quam scelerisque sapien.
                            Et, penatibus aliquam amet tellus"
                        gap
                        button="Explore Menu"
                        buttonLink="#"
                    />
                    <div data-da=".main-screen__content, 767.98, 3" className="main-screen__slider">
                        <Swiper
                            className="main-screen__swiper"
                            modules={[Pagination, Keyboard, Autoplay]}
                            autoplay
                            loop
                            keyboard
                            speed={1000}
                            observer={true}
                            observeParents={true}
                            {...params}>
                            {slides}
                        </Swiper>
                    </div>

                    <a href="#" className="main-screen__scroll scroll-main-screen">
                        <span className="scroll-main-screen__line"></span>
                        <div className="scroll-main-screen__text">Scroll</div>
                    </a>
                </div>
                <div className="main-screen__pagination"></div>
            </div>
        </section>
    );
};

export default MainScreen;
