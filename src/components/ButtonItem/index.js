import './index.css'

const ButtonItem = props => {
  const {item, clickAdd} = props
  const {isVisited, name, id} = item
  const addClick = () => {
    clickAdd(id)
  }
  return (
    <li className="list-item">
      <p className="li-para">{name}</p>
      {isVisited === false ? (
        <button type="button" className="butt" onClick={addClick}>
          Visit
        </button>
      ) : (
        <p className="li-para-l">Visited</p>
      )}
    </li>
  )
}

export default ButtonItem
