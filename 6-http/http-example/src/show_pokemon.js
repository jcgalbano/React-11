import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
const { Faker } = require('fakergem')

class ShowPokemon extends React.Component {

  state = {
    pokemon: {}
  }

  fetchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(  res   => res.json() )
      .then(  data  => this.setState({ pokemon: data}) )
      .catch( error => console.log(error) )
  }

  randomPokemon = () => {
   this.fetchPokemon(Faker.Pokemon.name().toLowerCase())
  }

  componentDidMount(){
    this.fetchPokemon('pikachu')
  }

  render() {
    return (
      <>
        <Card style={style.pokeCard}>
          <Card.Img variant="top" src={ this.state.pokemon.sprites ? this.state.pokemon.sprites['front_default'] : null } />
            <Card.Body>
            <Card.Title>Who's that Pokemon?</Card.Title>
            <Card.Text>
              It's { this.state.pokemon.name }!
            </Card.Text>
            <Button variant="danger" onClick={ this.randomPokemon }>Randomize Pokemon</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

const style = {
  pokeCard: {
    textAlign: 'center',
    width:300,
    margin: 30,
    border: 'solid',
    borderRadius: 10
  }
}
export default ShowPokemon
