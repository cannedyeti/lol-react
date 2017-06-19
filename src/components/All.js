const React = require('react');
const Pokemon = require('./Pokemon');

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      all: null
    };
    this.setPokemon = this.setPokemon.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((res) => res.json())
      .then((res) => this.setState({
        all: res.results
      }))
  }

  reset() {
    this.setState({pokemon: null});
  }
  
  setPokemon(e) {
    var p = e.target.innerHTML.toLowerCase()
    if(this.state.pokemon) {
      this.reset();
      setTimeout(() => {
        this.setState({pokemon: p})
      }, 1)
    } else {
      this.setState({pokemon: p})
    }
  }

  render() {
    var all = this.state.all; 
    var pokemon = this.state.pokemon;
    console.log("All state pokemon", this.state.pokemon)
    return(
      <div>
        <ul>
          {!all ? <p>Loading...</p> : all.map((p) => { 
            return (
              <li onClick={this.setPokemon} key={p.name}>{p.name[0].toUpperCase() + p.name.substring(1)}</li>
            )
          })}
        </ul>
        <button onClick={this.reset}>Reset</button>
        {!this.state.pokemon ? <p>Choose a pokemon</p> : <Pokemon pokemon={pokemon}/>}
      </div>
    )
  }
}

module.exports = All;