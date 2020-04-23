import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     photos: ['https://images.unsplash.com/photo-1587425644576-20b32e0f86ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
              'https://images.unsplash.com/photo-1587491439780-f5a8885888e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1587497963548-2b766c58dd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1587497063995-9a131dcaff7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80',
              'https://images.unsplash.com/photo-1587481822949-5155d07961a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
             ],
     index: 0,
     labels: {
       0: [
        {
          "mid": "/m/02wzbmj",
          "description": "Standing",
          "score": 0.8811611,
          "topicality": 0.8811611
        },
        {
          "mid": "/m/06_fw",
          "description": "Skateboard",
          "score": 0.85046923,
          "topicality": 0.85046923
        },
        {
          "mid": "/m/09j5n",
          "description": "Footwear",
          "score": 0.83853614,
          "topicality": 0.83853614
        },
        {
          "mid": "/m/027wrc",
          "description": "Skate shoe",
          "score": 0.78631365,
          "topicality": 0.78631365
        },
        {
          "mid": "/m/06rrc",
          "description": "Shoe",
          "score": 0.75085974,
          "topicality": 0.75085974
        }
      ],
      1: [
        {
          "mid": "/m/02wbm",
          "description": "Food",
          "score": 0.9903261,
          "topicality": 0.9903261
        },
        {
          "mid": "/m/0271t",
          "description": "Drink",
          "score": 0.9199456,
          "topicality": 0.9199456
        },
        {
          "mid": "/m/07xgrh",
          "description": "Ingredient",
          "score": 0.8804893,
          "topicality": 0.8804893
        },
        {
          "mid": "/m/02q08p0",
          "description": "Dish",
          "score": 0.8778561,
          "topicality": 0.8778561
        },
        {
          "mid": "/m/01ykh",
          "description": "Cuisine",
          "score": 0.84770674,
          "topicality": 0.84770674
        }
      ],
      2: [
        {
          "mid": "/m/07j7r",
          "description": "Tree",
          "score": 0.9857745,
          "topicality": 0.9857745
        },
        {
          "mid": "/m/02zr8",
          "description": "Forest",
          "score": 0.9833741,
          "topicality": 0.9833741
        },
        {
          "mid": "/m/05h0n",
          "description": "Nature",
          "score": 0.9655113,
          "topicality": 0.9655113
        },
        {
          "mid": "/m/03d3zqn",
          "description": "Northern hardwood forest",
          "score": 0.9652921,
          "topicality": 0.9652921
        },
        {
          "mid": "/m/02py09",
          "description": "Natural environment",
          "score": 0.962892,
          "topicality": 0.962892
        }
      ],
      3: [
        {
          "mid": "/m/0j_s4",
          "description": "Metropolitan area",
          "score": 0.98721284,
          "topicality": 0.98721284
        },
        {
          "mid": "/m/034z7h",
          "description": "Cityscape",
          "score": 0.9858181,
          "topicality": 0.9858181
        },
        {
          "mid": "/m/01bqvp",
          "description": "Sky",
          "score": 0.97692406,
          "topicality": 0.97692406
        },
        {
          "mid": "/m/05_5t0l",
          "description": "Landmark",
          "score": 0.9732,
          "topicality": 0.9732
        },
        {
          "mid": "/m/01n32",
          "description": "City",
          "score": 0.9725637,
          "topicality": 0.9725637
        }
      ],
      4: [
        {
          "mid": "/m/06fvc",
          "description": "Red",
          "score": 0.9153682,
          "topicality": 0.9153682
        },
        {
          "mid": "/m/04k84",
          "description": "Light",
          "score": 0.9011394,
          "topicality": 0.9011394
        },
        {
          "mid": "/m/03scnj",
          "description": "Line",
          "score": 0.83871853,
          "topicality": 0.83871853
        },
        {
          "mid": "/m/09ggk",
          "description": "Purple",
          "score": 0.8269019,
          "topicality": 0.8269019
        },
        {
          "mid": "/m/01lynh",
          "description": "Stairs",
          "score": 0.81998026,
          "topicality": 0.81998026
        }
      ]
     },

    }

  }

  handleAnswerClick(event) {
    // let clickedId = event.target.id;
    // for (var i = 0; i < this.state.cows.length; i++) {
    //   if (this.state.cows[i].id === Number(clickedId)){
    //     this.setState({currentCow: this.state.cows[i]})
    //   }
    // }
  }

  renderChoices(index){

  }

  handleChange(event) {
    // let change = event.target.id;
    // this.setState({[change]: event.target.value})
  }

  render() {
    return (
      <div>
        <section class="hero is-info">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                ai.Spy
              </h1>
              <h2 class="subtitle">
                Can you guess what the Google Vision API sees?
              </h2>
            </div>
            </div>
          </section>
          <br/>
      <div className='columns is-centered is-vcentered is-mobile'>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column is-narrow is-centered'>
          <div className='box'>
            <img height="400rem" width="300rem" src={this.state.photos[this.state.index]}/>
          </div>
        </div>
        <div className='column'></div>
      </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);