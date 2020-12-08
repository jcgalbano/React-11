import React from 'react'
import { Row, Col } from 'react-bootstrap'

class CityCard extends React.Component {

  render() {
    return(
      <Row style={styles.cardRow}>
        <Col className="col-md-4 offset-md-4" style={{...styles.cityCard, ...styles[this.props.cityTemp.toLowerCase()]}}>
          <div style={styles.cityTitle}>
            { this.props.cityName }
          </div>
          <div style={styles.cityTemp}>
            { this.props.cityTemp.toUpperCase() }
          </div>
          <div>
            { this.props.cityDesc }
          </div>
        </Col>
      </Row>
    )
  }
}

const styles = {
  cardRow: {
    textAlign: 'center',
  },
  cityCard: {
    padding: 50,
    border: 'solid',
    borderRadius: 10,
    borderWidth: '0',
    color: 'white'
  },
  hot: {
    backgroundColor: '#FE433C'
  },
  cold: {
    backgroundColor: '#0095EF'
  },
  cityTitle: {
    fontFamily: 'Poppins',
    fontSize: '2em'
  },
  cityTemp: {
    fontSize: '1.2em',
    paddingBottom: 20
  }
}

export default CityCard
