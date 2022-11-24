import './index.css'

const AppItem = props => {
  const {listDeatil} = props
  const {appName, imageUrl} = listDeatil
  return (
    <li className="appContainer">
      <img className="imageOfApp" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
