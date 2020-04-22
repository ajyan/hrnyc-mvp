import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }

  }

  componentDidMount() {
   axios.get()
  }

  getCows() {
  
  }

  handleSubmit(event) {
    // event.preventDefault();
    // axios.post('/api/cows', {name: this.state.name, desc: this.state.desc}).then( () => {
    //   console.log(this.state.name, ' saved to Wi-Cow-pedia')
    //   this.getCows()
    // })
  }

  handleClick(event) {
    // let clickedId = event.target.id;
    // for (var i = 0; i < this.state.cows.length; i++) {
    //   if (this.state.cows[i].id === Number(clickedId)){
    //     this.setState({currentCow: this.state.cows[i]})
    //   }
    // }
  }

  handleChange(event) {
    // let change = event.target.id;
    // this.setState({[change]: event.target.value})
  }

  render() {
    return (
      <div>
      <h1>Feud.io</h1>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);