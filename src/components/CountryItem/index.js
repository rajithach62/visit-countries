import './index.css'

const CountryItem = props => {
  const {countryItem, buttonRemove} = props
  const {imageUrl, name, id} = countryItem
  const removeButton = () => {
    buttonRemove(id)
  }
  return (
    <li className="c-item">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="c-card">
        <p className="lic-para">{name}</p>
        <button type="button" className="c-butt" onClick={removeButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
