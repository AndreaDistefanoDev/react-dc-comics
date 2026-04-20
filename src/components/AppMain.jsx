import digitalComicsLogo from '../assets/img/buy-comics-digital-comics.png'
import merchandiseComicsLogo from '../assets/img/buy-comics-merchandise.png'
import subscriptionsComicsLogo from '../assets/img/buy-comics-subscriptions.png'
import locatorComicsLogo from '../assets/img/buy-comics-shop-locator.png'
import powerVisaComicsLogo from '../assets/img/buy-dc-power-visa.svg'
import comics from '../assets/data/comics'




export default function AppMain() {
    { comics }

    return (

        <main>
            <div className="banner"></div>
            <div className="container comics">
                <div className="etichetta">
                    <p><span class="w3-tag text-white">curren series</span></p>
                </div>

                <div className="row text-white row-cols-6">
                    {
                        comics.map((comic) => (
                            <div className="col" key={comic.id}>
                                <img className='w-100' src={comic.thumb} alt="" />

                                <h5 className='text-uppercase pt-3 pb-5'>{comic.title}</h5>


                            </div>
                        ))

                    }


                </div>
                <div className='d-flex justify-content-center pb-4'>
                    <button className='btn btn-primary text-uppercase'>load more</button>

                </div>
            </div>
            <div className='bg-primary'>
                <div className="container  text-white text-uppercase">
                    <div className="row row-col-5">
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
            </div>

        </main>
    )
}