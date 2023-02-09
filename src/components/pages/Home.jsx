import Card from '../Card/Card'

function Home({
  items,
  searchValue,
  setSearchValue,
  ocChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <div className="content">
      <div>
        <img
          className="posterImg"
          max-width={960}
          height={300}
          src="/img/group .jpg"
          alt="Poster"
        />
      </div>
      <div className="search">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="searchBtn"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={ocChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers">{renderItems()}</div>
    </div>
  )
}

export default Home
