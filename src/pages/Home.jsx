import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Collapse from '../components/Collapse'
import Slider from '../components/Slider'
import InfoLogement from '../components/InfoLogement'
import logements from '../../logements.json'

function Home() {
  return (
    <div className="home">
      <Banner image={logements[0].cover} title="Chez vous, partout et ailleurs" />
      <Gallery logements={logements} />
      {/* pour tester les composants, a enlever plus tard */}
      <Slider pictures={logements[0].pictures} />
      <InfoLogement logement={logements[0]} />
      <Collapse title="Description" content={logements[0].description} />
    </div>
  )
}

export default Home
