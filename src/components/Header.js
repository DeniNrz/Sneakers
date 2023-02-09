import { Link } from 'react-router-dom'
import { useCart } from './hook/useCart'

function Header(props) {
  const { totalPrice } = useCart()

  return (
    <header>
      <Link to="/">
        <div className="headerLeft cu-p">
          <img width={40} height={40} src="/img/logo.png" alt="img" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={props.onClickCard}>
          <img width={18} height={18} src="/img/cart.svg" alt="img" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites" relative="path">
            <img width={18} height={18} src="/img/heart.svg" alt="img" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="img" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
