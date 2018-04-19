import React, { Component } from "react";
import store from "../../index";
import "./selectPercent.less";

const { dispatch } = store;

export default class SelectPercent extends Component{
    render(){
        let { style, groups } = this.props;
        return(
            <div className='zbkt' style={style}>
                <div className="zbkt-box"></div>
                <div className="zbkt-title">{groups[0].title}</div>
                <div className="zbkt-percent">占比</div>
                <div className="zbkt-total">总量</div>
               
                {groups[0].items.map((items, idx) => {
                    return(
                        <div key={idx} className="zbkt-spzb">
                            <div className="zbkt-spzb-title">{items.title}</div>
                            <div className="zbkt-spzb-box">
                                <div className="zbkt-spzb-box-vlaue" style={{width:items.width}}></div>
                            </div>
                            <div className="zbkt-spzb-value">{items.total}</div>
                            <div className="zbkt-spzb-bz">{items.width}</div>
                    </div> 
                    );
                })}
            </div>   
        );
    }
}