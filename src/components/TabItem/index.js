import './index.css'

const TabItem = props => {
  const {tabDetails, Active, changeStateOfTab} = props
  const {displayText, tabId} = tabDetails
  const buttonClass = Active ? `button_color` : ``
  const hrColor = Active ? `hrTagColor` : ``

  const ChangeTheButton = () => {
    changeStateOfTab(tabId)
  }

  return (
    <>
      <li className="listheading">
        <button
          type="button"
          className={`buttonClass ${buttonClass}`}
          onClick={ChangeTheButton}
        >
          {displayText}
        </button>
        <hr className={`hrTag ${hrColor}`} />
      </li>
    </>
  )
}

export default TabItem
