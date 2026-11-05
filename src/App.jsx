import Banner from './components/Banner'
import Card from './components/Card'
import Collapse from './components/Collapse'
import logements from '../logements.json'

function App() {
  return (
    <div className="home">
      <Banner image={logements[0].cover} title="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
      <Collapse title="Description">{logements[0].description}</Collapse>
    </div>
  )
}

export default App
