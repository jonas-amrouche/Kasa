import './Card.scss'

function Card({ title, cover }) {
  return (
    <a href="#" className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </a>
  )
}

export default Card
