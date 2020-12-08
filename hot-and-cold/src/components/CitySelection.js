import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class CitySelection extends React.Component {

  handleCityChange(cityName) {
    this.props.onCityChange(cityName)
  }

  render() {
    return(
      <Row style={styles.citySelection}>
        <Col className="col-md-4 offset-md-4">
          <Row style={styles.btnRow}>
            <Button style={{...styles.cityBtn, ...styles.coldCityBtn}} onClick={ () => this.handleCityChange('London, England') }>
              London, England
            </Button>
            <Button style={{...styles.cityBtn, ...styles.hotCityBtn}} onClick={ () => this.handleCityChange('Perth, Australia') }>
              Perth, Australia
            </Button>
            <Button style={{...styles.cityBtn, ...styles.coldCityBtn}} onClick={ () => this.handleCityChange('Dublin, Ireland') }>
              Dublin, Ireland
            </Button>
          </Row>
          <Row style={styles.btnRow}>
            <Button style={{...styles.cityBtn, ...styles.hotCityBtn}} onClick={ () => this.handleCityChange('Cairo, Egypt') }>
              Cairo, Egypt
            </Button>
            <Button style={{...styles.cityBtn, ...styles.hotCityBtn}} onClick={ () => this.handleCityChange('Hanoi, Vietnam') }>
              Hanoi, Vietnam
            </Button>
            <Button style={{...styles.cityBtn, ...styles.coldCityBtn}} onClick={ () => this.handleCityChange('Khabarovsk, Russia') }>
              Khabarovsk, Russia
            </Button>
          </Row>
          <Row style={styles.btnRow}>
            <Button style={{...styles.cityBtn, ...styles.coldCityBtn}} onClick={ () => this.handleCityChange('Nuuk, Greenland') }>
              Nuuk, Greenland
            </Button>
            <Button style={{...styles.cityBtn, ...styles.hotCityBtn}} onClick={ () => this.handleCityChange('Male, Maldives') }>
              Male, Maldives
            </Button>
            <Button style={{...styles.cityBtn, ...styles.hotCityBtn}} onClick={ () => this.handleCityChange('Mumbai, India') }>
              Mumbai, India
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}

const styles = {
  citySelection: {
    paddingTop: 20
  },
  btnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityBtn: {
    margin: 2
  },
  coldCityBtn: {
    backgroundColor: '#3C50B1',
    borderColor: '#3C50B1'
  },
  hotCityBtn: {
    backgroundColor: '#F31D64',
    borderColor: '#F31D64'
  }
}

export default CitySelection
