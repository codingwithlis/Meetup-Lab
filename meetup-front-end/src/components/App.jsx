import React from 'react';
import Attendees from './Attendees.jsx'
import Form from './Form.jsx'
import axios from 'axios';
import LoginPage from './LoginPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginner: [],
      intermediate: [],
      expert: [],
      username: null,
      userId: 0,
      loggedIn: false, 
    }
    this.getAttendees = this.getAttendees.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }
  
  componentDidMount() {
    this.getAttendees();
  };

  getAttendees() {
    axios.get('http://localhost:3000/attendees')
    .then((response) => {
      let beginner= [];
      let intermediate = [];
      let expert = [];
      for (let i = 0; i < response.data.length; i ++){
        if(response.data[i].skillLevel === 'beginner'){
          beginner.push(response.data[i]);
        };
        if(response.data[i].skillLevel === 'intermediate'){
          intermediate.push(response.data[i]);
        };
        if(response.data[i].skillLevel === 'expert'){
          expert.push(response.data[i]);
        };
      }
      this.setState({
        beginner: beginner,
        intermediate: intermediate,
        expert: expert
        })
      });
  };

  handleSubmit(data) {
    fetch('http://localhost:3000/attendees/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => this.getAttendees())
  }

  deletePerson(event){
    fetch(`http://localhost:3000/attendees/${event.target.name}`, {
      method: 'DELETE',
      body: JSON.stringify(event.target.name),
    })
    .then(() => this.getAttendees())
  }

  render() {
    return (
      <div className="main">
      {/* <LoginPage /> */}
      <Form handleSubmit={this.handleSubmit.bind(this)}/>
      <Attendees deletePerson={this.deletePerson} beginner={this.state.beginner} intermediate={this.state.intermediate} expert={this.state.expert}/>
      </div>
    )
  }
}

export default App;



