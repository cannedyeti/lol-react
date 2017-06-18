const React = require('react');
const PropTypes = require('prop-types');

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      poke: props.pokemon,
      specific: null
    }
  }

  componentDidMount(){
    var p = null;
    fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.poke)
      .then((res) => res.json())
      .then((res) => this.setState({
        specific: res
      }))
  }

  render() {
    const poke = this.state.specific
    return(
      <div>
        {this.state.specific !== null && !poke.detail && <div className='container'>
          {console.log(poke)}
          <h1>Name: {poke.name}</h1>
          <h2>Id: {poke.id}</h2>
          <h2>Height: {poke.height}</h2>
          <h2>Weight: {poke.weight}</h2>
          <h2><u>Types:</u> {poke.types.map(function(type, index){
            return (
              <li key={type.type.name}>{type.type.name}</li>
            )
          })}</h2>
          {poke.sprites && <img src={poke.sprites.front_default}/>}
          {poke.sprites && <img src={poke.sprites.back_default}/>}
        </div>}
        {poke === null || poke.detail && <h1>No Pokemon found</h1>}
      </div>
    )
  }
}


module.exports = Pokemon;