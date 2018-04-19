import React, { Component } from "react";
import store from "../../index";
import "./selectTime.less";

const { dispatch } = store;

export default class SelectTime extends Component {
    render(){
        let { type, style, groups } = this.props;
        let checkClick = (idx) =>
          dispatch({ type, payload: { idx} });
        return(
        <div className="selectTime">
            {groups.map((group, idx) => {
                return (
                  <div key={idx}
                   onClick={() => checkClick(idx)}
                   className="selectTime_box" >
                    {group.title}
                  </div>
                );
              })}
        </div>

        );
    }
}