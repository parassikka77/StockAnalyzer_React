import React, { Component } from "react";
import * as monthsApi from "../../api/monthsApi";
import SelectProduct from "../common/SelectProduct";
import { toast } from "react-toastify";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      inputVal: [],
      midAnswer: [],
      sort: false,
      sortDone: [],
      count: 0
    };
  }
  componentDidMount() {
    toast.success("Select a product to get the table.", {
      type: "info",
      position: "top-center"
    });
    return monthsApi
      .getMonths()
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          inputVal: [],
          midAnswer: [],
          sort: false,
          count: 0
        });
      })
      .catch(error => {
        throw error;
      });
  }

  handleInputVal = inputVal => {
    this.setState({ inputVal, sort: false });
  };

  onSort(event, midAnswer, sortKey) {
    var desc;
    if (this.state.count % 2 === 0) desc = 1;
    else desc = -1;
    const sortDone = [...midAnswer].sort(
      (a, b) => desc * a[sortKey] - desc * b[sortKey]
    );
    this.setState({ sortDone, sort: true, count: this.state.count + 1 });
  }

  render() {
    var {
      isLoaded,
      items,
      inputVal,
      midAnswer,
      sort,
      sortDone,
      count
    } = this.state;
    console.log(this.state);
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      let midAnswer = [],
        sub = {};

      items.forEach(function(item) {
        var sub = item.func.filter(function(item) {
          return item.product === inputVal.label;
        });
        sub = Object.assign({}, sub);
        midAnswer.push(sub[0]);
      });

      var done = [];
      if (sort && sortDone[0]) done = sortDone;
      else if (midAnswer[0]) done = midAnswer;
      var tableData = done.map(function(obj, index) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{obj.product}</td>
            <td>{obj.month}</td>
            <td>{obj.inventory}</td>
          </tr>
        );
      });

      return (
        <>
          <SelectProduct onSelectProduct={this.handleInputVal} />
          <center>
            <h6>All your inventory in table here!</h6>
          </center>
          <table class="table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th onClick={e => this.onSort(e, midAnswer, "product")}>
                  Product Name
                </th>
                <th onClick={e => this.onSort(e, midAnswer, "month")}>Month</th>
                <th onClick={e => this.onSort(e, midAnswer, "inventory")}>
                  Stock
                </th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </>
      );
    }
  }
}

export default HomePage;
