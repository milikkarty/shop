import { Link } from 'react-router-dom';

const Feed = () => {
    return (
        <section>
            <Link to='/item'>
                <figure><img src="" alt="" /></figure>
            </Link>
            <figcaption>Item and price</figcaption>
        </section>
    )
}

export default Feed;