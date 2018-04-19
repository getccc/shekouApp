import React, { Component } from "react";
import store from "../../index";
import "./selectTime2.less";

const { dispatch } = store;

const toDateString = dt =>
  dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

const datePick = [
  {
    title: "THIS MONTH (本月)",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now.getFullYear(), now.getMonth(), 1),
        tem = new Date(now.getFullYear(), now.getMonth() + 1, 1),
        last = new Date(tem - 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  }, {
    title: "THIS YEAR (本年)",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now.getFullYear(), 0, 1),
        tem = new Date(now.getFullYear(), 12, 1),
        last = new Date(tem - 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  }
]
export default class SelectTime extends Component {
    render(){
        let { type, style, groups,cols = 4 } = this.props;
        // let checkClick = (idx) =>
        //   dispatch({ type, payload: { idx} });
        let confirm = (idx, data) => dispatch({ type, payload: { idx, data } });  
        return(
        <div className="selectTime">

              {datePick
                .map((x, i) => {
                  return { idx: i, ...x };
                })
                .reduce((res, data) => {
                  let { idx } = data,
                    row = Math.floor(idx / cols);
                  if (res.length <= row) res.push([data]);
                  else res[row].push(data);
                  return res;
                }, [])
                .map((row, i) => {
                  return (
                    <div key={i} className="selectTime_btns">
                      {row.map((data, j) => {
                        return <div key={j}>
                            <div className={"selectTime_box"} onClick={() => {
                                  confirm(data.idx, data.date());
                              }}>
                              {data.title}
                            </div>
                          </div>;
                      })}
                    </div>
                  );
                })}


        </div>

        );
    }
}