import React from "react";
import Select from "react-select";
import * as monthsApi from "../../api/monthsApi";

class SelectProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    return monthsApi
      .getMonths()
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      })
      .catch(error => {
        throw error;
      });
  }
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.onSelectProduct(selectedOption);
  };

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      const { selectedOption } = this.state;
      let options = [];
      let item = items[0];
      options = item.func.map(item => {
        return { value: item.id, label: item.product };
      });
      return (
        <Select
          autoFocus={true}
          onChange={this.handleChange}
          options={options}
        />
      );
    }
  }
}

export default SelectProduct;
