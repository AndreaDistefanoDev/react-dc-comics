import digitalComicsLogo from '../assets/img/buy-comics-digital-comics.png'
import merchandiseComicsLogo from '../assets/img/buy-comics-merchandise.png'
import subscriptionsComicsLogo from '../assets/img/buy-comics-subscriptions.png'
import locatorComicsLogo from '../assets/img/buy-comics-shop-locator.png'
import powerVisaComicsLogo from '../assets/img/buy-dc-power-visa.svg'





export default function AppMain() {


    return (
        <main>
            <div className="bg-black text-white">
                <section id='section_black'>
                    <p>__Content here--</p>
                </section>
            </div>
            <div className="bg-primary text-white text-uppercase">
                <div className="row">
                    <div className="col">
                        <img src={digitalComicsLogo} alt="" />
                        <span>digital comics</span>
                    </div>
                    <div className="col">
                        <img src={merchandiseComicsLogo} alt="" />
                        <span>dc merchandise</span>
                    </div>
                    <div className="col">
                        <img src={subscriptionsComicsLogo} alt="" />
                        <span>subscriptions</span>
                    </div>
                    <div className="col">
                        <img src={subscriptionsComicsLogo} alt="" />
                        <span>comic shop locator</span>
                    </div>
                    <div className="col">
                        <img src={powerVisaComicsLogo} alt="" />
                        <span>dc power visa</span>
                    </div>
                </div>
            </div>
        </main>
    )
}