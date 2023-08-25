import FooterLogo from '../../../assets/images/Footer/FooterLogo.svg'
import instagram from '../../../assets/images/Footer/Instagram.svg'
import Facebook from '../../../assets/images/Footer/Facebook.svg'
import Twitter from '../../../assets/images/Footer/Twitter.svg'
import classes from './Footer.module.sass'
import React from 'react'


export default function Footer() {

    return (
        <div className={classes.Footer}>
            <div className={'container'}>
                <div className={classes.Footer__inner}>
                    <div className={classes.Footer__inner__Logo}>
                        <img
                            src={FooterLogo}
                            alt="FooterLogo"
                        />
                        <div className={classes.Footer__inner__Logo__Text}>
                            <h3>MangoRead</h3>
                            <p>Читай мангу с нами</p>
                        </div>
                    </div>
                    <div className={classes.Footer__inner__links}>
                        <ul>
                            <li>
                                <a href="https://t.me/impxrfect">
                                    <img src={Facebook} alt=""/>
                                    Link One
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/yardix666?igshid=MjEwN2IyYWYwYw==">
                                    <img src={instagram} alt=""/>
                                    Link Two
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@yardix666?is_from_webapp=1&sender_device=pc">
                                    <img src={Twitter} alt=""/>
                                    Link Three
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.Footer__inner__Map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7040230242824!2d74.615768675839!3d42.87909090215336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1691149096284!5m2!1sru!2skg"></iframe>
                    </div>
                </div>
            </div>
            <div className={classes.Politik}>
                <div className={'container'}>
                    <div className={classes.Politik__inner}>
                        <p className={classes.Politik__inner__p}>
                            ©2022, All right reserved.
                        </p>
                        <div className={classes.Politik__inner__text}>
                            <a href={'/'}>
                                Privacy Policy
                            </a>
                            <a href={'/'}>
                                Terms of Service
                            </a>
                            <a href={'/'}>
                                Cookies Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}