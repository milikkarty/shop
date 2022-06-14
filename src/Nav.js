import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/women'><li>Women</li></Link>
                <Link to='/men'><li>Men</li></Link>
                <Link to='/kids'><li>Kids</li></Link>
            </ul>
            <img src="" alt="" />
            <select name="currency">
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="¥">¥</option>
            </select>
            <Link to='/cart'><p>Cart</p></Link>
        </nav>
    )
}

export default Nav;