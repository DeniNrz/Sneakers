import { useContext, useState } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
import AppContext from '../../context'

function Card({
  id,
  image,
  name,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const obj = { id, parentId: id, image, name, price }

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="120" />
          <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="158" rx="5" ry="5" width="80" height="24" />
          <rect x="115" y="148" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onFavorite}>
              <img
                onClick={onClickFavorite}
                src={
                  isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'
                }
                alt="Unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={image} alt="Sneakers" />
          <h5>{name}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.cardPrice}>
              <p>Цена:</p>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
