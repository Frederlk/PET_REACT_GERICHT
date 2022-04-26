import React from "react";
import { images } from "../constants";
import { HeadingContent } from "../_components";

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <HeadingContent
                    className="about__heading heading-content_right"
                    title="About Us"
                    reverseSpoon
                    spoonAfter
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quis pharetra adipiscing ultrices vulputate posuere tristique. 
                        In sed odio nec aliquet eu proin mauris et."
                    button="Know More"
                    buttonLink="#knowMore"
                />
                <div className="about__knife">
                    <img src={images.defaultImages.knife} alt="knife" />
                    <div className="about__bg">
                        <img src={images.defaultImages.g} alt="G" />
                    </div>
                </div>
                <HeadingContent
                    className="about__heading"
                    title="Our History"
                    spoonAfter
                    text="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. 
                        Risus placerat morbi volutpat habitasse interdum mi aliquam 
                        In sed odio nec aliquet."
                    button="Know More"
                    buttonLink="#knowMore"
                />
            </div>
            <div className="about__bg-ibg">
                <img src={images.defaultImages.bg} alt="Background" />
            </div>
        </section>
    );
};

export default About;
