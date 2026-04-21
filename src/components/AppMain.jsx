import digitalComicsLogo from '../assets/img/buy-comics-digital-comics.png'
import merchandiseComicsLogo from '../assets/img/buy-comics-merchandise.png'
import subscriptionsComicsLogo from '../assets/img/buy-comics-subscriptions.png'
import locatorComicsLogo from '../assets/img/buy-comics-shop-locator.png'
import powerVisaComicsLogo from '../assets/img/buy-dc-power-visa.svg'
import comics from '../assets/data/comics'
import ProductCard from './ProductCard'




export default function AppMain() {
    { comics }

    return (

        <main>
            <div className="banner"></div>
            <div className="container comics">
                <div className="etichetta bg-primary text-uppercase">
                    <span class="w3-tag text-white">current series</span>
                </div>

                <div className="row text-white row-cols-6">
                    {
                        comics.map((comic) => (
                            <ProductCard key={comic.id} comic={comic} />
                        ))

                    }


                </div>
                <div className='d-flex justify-content-center pb-4'>
                    <button className='btn btn-primary text-uppercase'>load more</button>

                </div>
            </div>
            <div className='bg-primary section-blue'>
                <div className="container  text-white text-uppercase">
                    <div className="row row-col-5 d-flex">
                        <div className="col position-icon">
                            <img className='icone' src={digitalComicsLogo} alt="" />
                            <span className='pl-3'>digital comics</span>
                        </div>
                        <div className="col position-icon">
                            <img className='icone' src={merchandiseComicsLogo} alt="" />
                            <span>dc merchandise</span>
                        </div>
                        <div className="col position-icon">
                            <img className='icone' src={subscriptionsComicsLogo} alt="" />
                            <span>subscriptions</span>
                        </div>
                        <div className="col position-icon">
                            <img className='icone' src={locatorComicsLogo} alt="" />
                            <span>comic shop locator</span>
                        </div>
                        <div className="col position-icon">
                            <img className='icone' src={powerVisaComicsLogo} alt="" />
                            <span>dc power visa</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}