export default function ProductCard({ comic }) {



    return (
        <div className="col">
            <img className='w-100' src={comic.thumb} alt="" />
            <h5 className='text-uppercase pt-3 pb-5'>{comic.title}</h5>
        </div>
    )

}