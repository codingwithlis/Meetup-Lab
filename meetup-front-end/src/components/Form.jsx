import React, { component } from 'React';

const Form = (props) => (
  <div>
      <div class="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email Address:
          <input type="text"></input>
        </label>
        <div className="sizes">
          <label>Shirt Size: </label>
          <select>
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
          <select>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <button>REGISTER</button>
      </div>

  </div>
)

//
export default Form;