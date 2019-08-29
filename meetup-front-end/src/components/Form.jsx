import React, { Component } from 'React'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      shirtSize:'',
      skillLevel:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target
    this.setState({
      [ name ]: value
    })
  }
  
  render() {
    return (
    <form className="attendee-form" onChange={this.handleChange} onSubmit={(e) => { this.props.handleSubmit(this.state)}}>
      <div className="fullName">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input value={this.state.firstName} name="firstName" type="text" required></input>
        </label>
        <label>Last Name:
          <input value={this.state.lastName} name="lastName" type="text" required ></input>
        </label>
       </div>
        <div>
        <label>Email Address:
          <input value={this.state.email} name="email" type="text" required ></input>
        </label>
        </div>
        <div className="sizes">
          <label>Shirt Size: </label>
          <select name="sizes" required>
            <option ></option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="experience">
          <label>Experience Level: </label>
          <select name="skillLevel" required >
            <option ></option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <button className="registerButton" type="submit">REGISTER</button>
      </form>
    )
  };
};

export default Form