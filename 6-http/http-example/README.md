# Event Handling Example

Example of a GET request to the PokeAPI. All credits to everyone at https://pokeapi.co/

## HTTP GET Basic Example

```javascript
  fetchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(  res   => res.json() )
      .then(  data  => this.setState({ pokemon: data}) )
      .catch( error => console.log(error) )
  }
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
