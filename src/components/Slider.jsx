import { useState } from 'react'
import './Slider.scss'

function Slider({ pictures }) {
  const [index, setIndex] = useState(0)

  // on revient au début / à la fin pour faire la boucle
  function next() {
    setIndex((index + 1) % pictures.length)
  }

  function previous() {
    setIndex((index - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className="slider">
      <img src={pictures[index]} alt="" />
      {pictures.length > 1 && (
        <>
          <button className="previous" onClick={previous}>‹</button>
          <button className="next" onClick={next}>›</button>
          <p>{index + 1}/{pictures.length}</p>
        </>
      )}
    </div>
  )
}

export default Slider
