const React = require('react');
require ('dotenv').config()
var Pokemon = require('./Pokemon');
// const secret = process.env.REACT_APP_CLIENT_SECRET
// const id = process.env.REACT_APP_CLIENT_ID

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
    }
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }
  submit() {
    const userTerm = document.getElementById('userTerm');
    this.setState({pokemon: userTerm.value.toLowerCase()})
  }
  reset() {
    this.setState({
      pokemon: ''
    })
  }

  render() {
    const pokemon = this.state.pokemon;
    return (
      <div className="search">
        {!pokemon && <input id="userTerm" type="text" />}
        {!pokemon && <button onClick={this.submit}>Find!</button>}
        {pokemon && <button onClick={this.reset}>Reset</button>}
        {pokemon && <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
};

module.exports = Search;

