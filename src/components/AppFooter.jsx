import logoBg from '../assets/img/dc-logo-bg.png'
import fbLogo from '../assets/img/footer-facebook.png'
import twLogo from '../assets/img/footer-twitter.png'
import ytLogo from '../assets/img/footer-youtube.png'
import pinterestLogo from '../assets/img/footer-pinterest.png'
import periscopeLogo from '../assets/img/footer-periscope.png'



export default function AppFooter() {


    return (
        <footer className="text-white">
            <div className="container">
                <div id='first-section-footer'>
                    <div className="">
                        <div className="row py-5 px-5">
                            <div className="col">
                                <h3>dc comics</h3>
                                <ul>
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movie</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>dc</h3>
                                <ul>
                                    <li>Terms of Use</li>
                                    <li>Privacy policy (New)</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Subscriptions</li>
                                    <li>Talent Workshops</li>
                                    <li>CPSC Certificates</li>
                                    <li>Ratings</li>
                                    <li>Shop Help</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>SITES</h3>
                                <ul>
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>SHOP</h3>
                                <ul>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                            <div className="">
                                <img src={logoBg} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div id='second-section-footer'>
                    <button>sign-up now!</button>
                    <div>
                        <div>follow us</div>
                        <div>
                            <a href=""><img src={fbLogo} alt="" /></a>
                            <a href=""><img src={twLogo} alt="" /></a>
                            <a href=""><img src={ytLogo} alt="" /></a>
                            <a href=""><img src={pinterestLogo} alt="" /></a>
                            <a href=""><img src={periscopeLogo} alt="" /></a>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}