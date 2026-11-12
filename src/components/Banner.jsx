import './Banner.scss'

function Banner({ image, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <p>{title}</p>
    </div>
  )
}

export default Banner
