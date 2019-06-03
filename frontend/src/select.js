import React from 'react';

//TODO Handle change event in for the form
//First step is to see the item change in console or network tab
class Select extends React.Component {
  state = {};
  handleChange = event => {
    console.log(
      'click team',
      this.setState({
        team: event.target.value
      })
    );
  };
  render() {
    return (
      <div>
        <label>Select Team</label>
        <select value={this.state.team} onChange={this.handleChange}>
          <option value="ARI">Arizona Cardinals</option>
          <option value="ATL">Atlanta Falcons</option>
          <option value="BAL">Baltimore Ravens</option>
          <option value="BUF">Buffalo Bills</option>
          <option value="CAR">Carolina Panthers</option>
          <option value="CHI">Chicago Bears</option>
          <option value="CIN">Cincinnati Bengals</option>
          <option value="CLE">Cleveland Browns</option>
          <option value="DAL">Dallas Cowboys</option>
          <option value="DEN">Denver Broncos</option>
          <option value="DET">Detroit Lions</option>
          <option value="GB">Green Bay Packers</option>
          <option value="HOU">Houston Texans</option>
          <option value="IND">Indianapolis Colts</option>
          <option value="JAX">Jacksonville Jaquars</option>
          <option value="KC">Kansas City Chiefs</option>
          <option value="LAC">Los Angeles Chargers</option>
          <option value="LA">Los Angeles Rams</option>
          <option value="MIA">Miami Dolphins</option>
          <option value="MIN">Minnesota Vikings</option>
          <option value="NE">New England Patriots</option>
          <option value="NO">New Orleans Saints</option>
          <option value="NYG">New York Giants</option>
          <option value="NYJ">New York Jets</option>
          <option value="OAK">Oakland Raiders</option>
          <option value="PHI">Philadelphia Eagles</option>
          <option value="PIT">Pittsburgh Steelers</option>
          <option value="SF">San Francisco 49ers</option>
          <option value="SEA">Seattle Seahawks</option>
          <option value="TB">Tampa Bay Bucks</option>
          <option value="TEN">Tennessee Titans</option>
          <option value="WAS">Washington Redskins</option>
        </select>
      </div>
    );
  }
}

export default Select;
