import appLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {

    const links = [
        {
            id: 1,
            text: 'characters',
            path: '/characters'
        },
        {
            id: 2,
            text: 'comics',
            path: '/comics'
        },
        {
            id: 3,
            text: 'movies',
            path: '/movies'
        },
        {
            id: 4,
            text: 'tv',
            path: '/tv'
        },
        {
            id: 5,
            text: 'games',
            path: '/games'
        },
        {
            id: 6,
            text: 'collectibles',
            path: '/collectibles'
        },
        {
            id: 7,
            text: 'videos',
            path: '/videos'
        },
        {
            id: 8,
            text: 'fans',
            path: '/fans'
        },
        {
            id: 9,
            text: 'news',
            path: '/news'
        },
        {
            id: 10,
            text: 'shop',
            path: '/shop'
        }
    ]
    return (
        <header>
            <nav className="navbar navbar-expand bg-body fw-semibold">
                <div className="container p-2">
                    <a className="navbar-brand" href="#"><img src={appLogo} alt="" /></a>
                    <div className="d-flex gap-3 text-uppercase">
                        {links.map((link) => (
                            <a className='text-decoration-none text-black' href={link.path} key={link.id}>{link.text}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}