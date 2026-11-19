import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setOpen(!open)}>
        {title}
        <span className={open ? 'arrow open' : 'arrow'}>⌄</span>
      </button>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  )
}

export default Collapse
