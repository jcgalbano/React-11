import React from 'react'
import CityCard from './CityCard'
import CitySelection from './CitySelection'
import cityReference from '../cityReference'

class App extends React.Component {

  constructor(props) {
    super(props)
    // This is needed for <this> to be defined in the callback
    // Look at CitySelection in render()
    // We're not using the () -> {} syntax thus we need to bind
    // Manually
    this.onCityChange = this.onCityChange.bind(this)
  }

  state = {
    cityName: 'London, England',
    cityTemp: cityReference['London, England']['cityTemp'],
    cityDesc: cityReference['London, England']['cityDesc']
  }

  onCityChange(cityName) {
    this.setState({ cityName: cityName, cityTemp: cityReference[cityName]['cityTemp'], cityDesc: cityReference[cityName]['cityDesc'] })
  }

  render() {
    return(
      <div style={styles.citySection}>
        <CityCard cityName={ this.state.cityName } cityTemp={ this.state.cityTemp } cityDesc={ this.state.cityDesc } />
        <CitySelection onCityChange={ this.onCityChange }/>
      </div>
    )
  }
}

const styles = {
  citySection: {
    paddingTop: 100,
  }
}
export default App
