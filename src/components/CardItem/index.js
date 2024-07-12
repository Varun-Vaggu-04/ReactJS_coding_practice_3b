import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {key, title, description, imgUrl, className} = cardsList
  return (
    <li className={`Technology-container li ${className}`}>
      <h1 className="technology-title">{title}</h1>
      <p className="technology-para">{description}</p>
      <div className="image-con">
        <div>
          {' '}
          <img className="technology-img" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
