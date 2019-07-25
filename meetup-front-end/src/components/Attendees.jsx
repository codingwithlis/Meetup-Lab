import React, { component } from 'React';

const Attendees = (props) => (
  <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {
        props.beginner.map((att, i) => (
          <div key={i}>{att}</div>
        ))
      }
    <h3>Intermediate</h3>
      {
        props.intermediate.map((att, i) => (
          <div key={i}>{att}</div>
        ))
      }
    <h3>Expert</h3>
      {
        props.expert.map((att, i) => (
          <div key={i}>{att}</div>
        ))
      }
  </div>
)

export default Attendees;