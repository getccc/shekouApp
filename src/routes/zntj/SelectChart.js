import React, { Component } from "react";
import Chart from "chart.js";
import ReactDOM from "react-dom";
import store from "../../index";
import "./selectChart.less";

const { dispatch } = store;

export default class SelectChart extends Component{
  componentDidMount() {
    let  { groups } = this.props;
      if (this.chart) this.chart.destroy();
        this.chart = new Chart(ReactDOM.findDOMNode(this.refs.chart), groups[0].data);
    }
  componentWillUnmount() {
      if (this.chart) this.chart.destroy();
    }
    render(){
        let { style, groups } = this.props;
        return(
            <div className="tjdt">
                <div className="tjdt-box"></div>
                <div className="tjdt-title">{groups[0].title}</div>
                <canvas className="tjdt-chart" ref="chart" />
           </div>
        );
    }
}