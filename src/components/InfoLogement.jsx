import './InfoLogement.scss'

function InfoLogement({ logement }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="info-logement">
      <div className="info-left">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <ul>
          {logement.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="info-right">
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="rating">
          {stars.map((star) => (
            <span key={star} className={star <= logement.rating ? 'star full' : 'star'}>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoLogement
