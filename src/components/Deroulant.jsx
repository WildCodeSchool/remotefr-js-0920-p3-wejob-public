import React from 'react';
import Select from 'react-select';
import './Deroulant.css';

const options = [
  { value: 'Bordeaux', label: 'Bordeaux' },
  { value: 'Gironde', label: 'Gironde' },
  { value: 'Nouvelle Aquitaine', label: 'Nouvelle Aquitaine' },
  { value: 'France', label: 'France' },
];

class Deroulant extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="DeroulantForm">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default Deroulant;
