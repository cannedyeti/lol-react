const React = require('react');
const PropTypes = require('prop-types');


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      poke: props.pokemon,
      singlePokemon: null,
      foundPokemon: null
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ poke: nextProps.pokemon })
  // }

  componentDidMount(){
    fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.poke)
      .then((res) => res.json())
      .then((res) => this.setState({
        singlePokemon: res
      })).then(() => this.state.singlePokemon.name ? this.setState({foundPokemon: true}) : this.setState({foundPokemon: false}))
  }

  render() {
    const poke = this.state.singlePokemon
    console.log("POKEMON CHANGE", poke)
    return(
      <div>
        {this.state.foundPokemon === null ? <p>Loading...</p> : this.state.foundPokemon === false ? <p>Pokemon not found</p> : <div className='container'>
          <h1>Name: {poke.name[0].toUpperCase() + poke.name.substring(1)}</h1>
          <h2>Id: {poke.id}</h2>
          <h2>Height: {poke.height}</h2>
          <h2>Weight: {poke.weight}</h2>
          <h2><u>Types:</u> {poke.types.map(function(type, index){
            return (
              <li key={type.type.name}>{type.type.name}</li>
            )
          })}</h2>
          {poke.sprites && <img alt={poke.name} src={poke.sprites.front_default}/>}
          {poke.sprites && <img alt={poke.name} src={poke.sprites.back_default}/>}
        </div>}
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.string.isRequired
}

module.exports = Pokemon;