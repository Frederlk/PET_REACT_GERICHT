import React from "react";
import { HeadingContent } from "../../_components";
import * as Yup from "yup";
import { Formik, Form as FormikForm, useField } from "formik";
import { format } from "date-fns";
import { images } from "../../constants";

const FormProductItem = ({ inputMask, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...props} {...field} className="top-footer__input input" />
            {meta.touched && meta.error ? <div className="top-footer__error">{meta.error}</div> : null}
        </>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg-ibg">
                <img src={images.defaultImages.bg} alt="background" />
            </div>
            <div className="footer__top top-footer">
                <div className="top-footer__container">
                    <div className="top-footer__content">
                        <HeadingContent
                            className="top-footer__heading"
                            subtitle="Newsletter"
                            title="Subscribe to Our Newsletter"
                        />
                        <div className="top-footer__text">And never miss latest Updates!</div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string().email("Wrong Email Address").required("Required Input"),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                resetForm();
                                console.log(JSON.stringify(values, null, 2));
                            }}>
                            <FormikForm className="top-footer__form">
                                <FormProductItem placeholder="Email Address" type="text" name="email" />
                                <button type="submit" className="top-footer__button button">
                                    Subscribe
                                </button>
                            </FormikForm>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="footer__bottom bottom-footer">
                <div className="bottom-footer__container">
                    <div className="bottom-footer__contact contact-footer">
                        <h5 className="contact-footer__label">Contact Us</h5>
                        <div className="contact-footer__item">9 W 53rd St, New York, NY 10019, USA</div>
                        <a href="tel:12123441230" className="contact-footer__link">
                            +1 212-344-1230
                        </a>
                        <a href="tel:12125551230" className="contact-footer__link">
                            +1 212-555-1230
                        </a>
                    </div>
                    <div data-da=".bottom-footer__container, 650, first" className="bottom-footer__center">
                        <a href="/" className="bottom-footer__logo">
                            Gerícht
                        </a>
                        <div className="bottom-footer__text">
                            ”The best way to find yourself is to lose yourself in the service of others.”
                        </div>
                        <div className="bottom-footer__spoon">
                            <img src={images.defaultImages.spoon} alt="spoon icon" />
                        </div>
                        <div className="bottom-footer__socials">
                            <a href="#facebook" target="_blank" className="bottom-footer__social-item">
                                <img src={images.socialIcons.facebookIcon} alt="Facebook Icon" />
                            </a>
                            <a href="#twitter" target="_blank" className="bottom-footer__social-item">
                                <img src={images.socialIcons.twitterIcon} alt="Twitter Icon" />
                            </a>
                            <a href="#instagram" target="_blank" className="bottom-footer__social-item">
                                <img src={images.socialIcons.instagramIcon} alt="Instagram Icon" />
                            </a>
                        </div>
                    </div>
                    <div className="bottom-footer__contact contact-footer">
                        <h5 className="contact-footer__label">Working Hours</h5>
                        <div className="contact-footer__item">
                            <span>Monday-Friday:</span>08:00 am - 12:00 am
                        </div>
                        <div className="contact-footer__item">
                            <span>Saturday-Sunday:</span>07:00am -11:00 pm
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copy">{format(new Date(), "yyyy")} Gerícht. All Rights reserved.</div>
        </footer>
    );
};

export default Footer;
