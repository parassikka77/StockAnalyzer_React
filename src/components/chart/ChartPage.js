import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import * as monthsApi from "../../api/monthsApi";
import SelectProduct from "../common/SelectProduct";
import { toast } from "react-toastify";

class ChartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      inputVal: [],
      midAnswer: []
    };
  }
  componentDidMount() {
    toast.success("Select a product to get the chart.", {
      type: "info",
      position: "top-center"
    });
    return monthsApi
      .getMonths()
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          inputVal: []
        });
      })
      .catch(error => {
        throw error;
      });
  }
  handleInputVal = inputVal => {
    this.setState({ inputVal });
  };

  render() {
    var { isLoaded, items, inputVal } = this.state;

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

      var data = [];
      if (midAnswer[0])
        for (let i = 0; i < 12; i++) {
          data.push(midAnswer[i]);
        }
      if (midAnswer[0]) console.log(data);
      var ColorHere;
      if (inputVal.label === "Red Lays") ColorHere = "red";
      else if (inputVal.label === "Blue Lays") ColorHere = "blue";
      else if (inputVal.label === "Green Lays") ColorHere = "green";
      else if (inputVal.label === "Yellow Lays") ColorHere = "yellow";
      else ColorHere = "black";
      return (
        <div className="component">
          <SelectProduct onSelectProduct={this.handleInputVal} />
          <center>
            <h6>All your inventory in chart here!</h6>
          </center>
          <LineChart
            width={1200}
            height={350}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="inventory" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              name={<NameHere data={data} />}
              dataKey="inventory"
              stroke={ColorHere}
            />
          </LineChart>
        </div>
      );
    }
  }
}

class NameHere extends Component {
  render() {
    var take = this.props;
    console.log(take);
    if (take.data[0]) return take.data[0].product;
    return null;
  }
}

export default ChartPage;
