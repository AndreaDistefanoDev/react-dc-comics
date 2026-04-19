import logoBg from '../assets/img/dc-logo-bg.png'
import fbLogo from '../assets/img/footer-facebook.png'
import twLogo from '../assets/img/footer-twitter.png'
import ytLogo from '../assets/img/footer-youtube.png'
import pinterestLogo from '../assets/img/footer-pinterest.png'
import periscopeLogo from '../assets/img/footer-periscope.png'



export default function AppFooter() {


    return (
        <footer className="text-white">
            <div className="container d-flex">

                <div className="row m-0 me-0">
                    <div className="col pt-5 p-3 height-footer width-footer">
                        <h3 className='text-uppercase fw-bold testo-stretto'>dc comics</h3>
                        <ul className='list-unstyled'>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movie</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="col p-3 width-footer">
                        <h3 className='text-uppercase fw-bold testo-stretto'>shop</h3>
                        <ul className='list-unstyled'>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>
                <div className="row gap-0">
                    <div className="col-6 pt-5">
                        <h3 className='text-uppercase fw-bold testo-stretto'>dc</h3>
                        <ul className='list-unstyled'>
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
                    <div className="col-6 pt-5">
                        <h3 className='text-uppercase fw-bold testo-stretto'>sites</h3>
                        <ul className='list-unstyled'>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>


                <img className='' src={logoBg} alt="" />


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

        </footer>
    )
}