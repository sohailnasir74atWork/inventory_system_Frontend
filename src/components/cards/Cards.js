import style from "./Cards.scss"
const Cards = ({children , classCard}) => {
  return (
    <div className={`${style.card} ${classCard}` }>
        {children}
    </div>
  )
}

export default Cards