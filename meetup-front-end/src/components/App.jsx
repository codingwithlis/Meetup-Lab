import React from 'react';
import Attendees from './Attendees.jsx'
import Form from './Form.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginner: [],
      intermediate: [],
      expert: []
    }
    this.getAttendees = this.getAttendees.bind(this);
  }

  getAttendees() {
    axios.get('http://localhost:3000/attendees')
    .then((response) => {
      let beginner= [];
      let intermediate = [];
      let expert = [];
      for (let i = 0; i < response.data.length; i ++){
        if(response.data[i].skillLevel === 'beginner'){
          beginner.push(response.data[i].firstName + ' ' + response.data[i].lastName );
        };
        if(response.data[i].skillLevel === 'intermediate'){
          intermediate.push(response.data[i].firstName + ' ' + response.data[i].lastName );
        };
        if(response.data[i].skillLevel === 'expert'){
          expert.push(response.data[i].firstName + ' ' + response.data[i].lastName );
        };
      }
      this.setState({
        beginner: beginner,
        intermediate: intermediate,
        expert: expert
        })
      });
  }

  componentDidMount() {
    this.getAttendees();
  };

  render() {
    return (
      <div className="main">
      <Attendees beginner={this.state.beginner} intermediate={this.state.intermediate} expert={this.state.expert}/>
      <Form />
      </div>
    )
  }
}

export default App;

