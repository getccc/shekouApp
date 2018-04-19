import React, { Component } from "react";
import { connect } from "dva";
import ReactDOM from "react-dom";
import { Tabs, Icon } from "antd-mobile";
import Chart from "chart.js";
import "./bgdlqk.less";
import SelectPercent from './SelectPercent';
import SelectChart from './SelectChart';
import SelectTime from './SelectTime';
import SelectTime2 from './SelectTime2';

const style = {height:200};
const perce = {'margin-top':43}

export default connect(({ bgdlqk, loading }) => ({ ...bgdlqk }))(
class Bgdlqk extends Component {

    render(){
        const { tabs,monthPerce,today,chart,chart1,stime,barType,dispatch,monthchart1,yearchart1,year,chartPieMonth,dataTitle } = this.props;
        let toolBar = <div/>;
        // if(barType === "date") toolBar = <SelectTime type="bgdlqk/dateChange" groups={stime} style={style} />;
        if(barType === "date") toolBar = <SelectTime2 type="bgdlqk/dateeChange" groups={stime} style={style} />;
        return(
            <div>
                 <Tabs
                 tabs={tabs}
                 swipeable={false}
                 initialPage={0}
                 >
                    <div>
                    { stime[0].checked === true ?
                        <div>
                            <SelectPercent groups={monthPerce} style={perce}/>    
                            <SelectChart  groups={chartPieMonth} style={style}/>
                            <SelectChart  groups={monthchart1} style={style}/>
                        </div>:null}
                     { stime[1].checked === true ?
                        <div>
                            <SelectPercent groups={year} style={perce}/> 
                            <SelectChart  groups={chart} style={style}/>
                            <SelectChart  groups={yearchart1} style={style}/>
                         </div>:null}
                    </div>

                    <div>
                    { stime[0].checked === true ?
                        <div>
                            <SelectPercent groups={monthPerce} style={perce}/>    
                            <SelectChart  groups={chartPieMonth} style={style}/>
                            <SelectChart  groups={monthchart1} style={style}/>
                        </div>:null}
                     { stime[1].checked === true ?
                        <div>
                            <SelectPercent groups={year} style={perce}/> 
                            <SelectChart  groups={chart} style={style}/>
                            <SelectChart  groups={yearchart1} style={style}/>
                         </div>:null}
                    </div>

                    <div>
                    { stime[0].checked === true ?
                        <div>
                            <SelectPercent groups={monthPerce} style={perce}/>    
                            <SelectChart  groups={chartPieMonth} style={style}/>
                            <SelectChart  groups={chart1} style={style}/>
                        </div>:null}
                     { stime[1].checked === true ?
                        <div>
                            <SelectPercent groups={year} style={perce}/> 
                            <SelectChart  groups={chart} style={style}/>
                            <SelectChart  groups={yearchart1} style={style}/>
                         </div>:null}
                    </div>

                </Tabs>

                <div className="tabBar_bar">
                    <div className="tabBar_bar_box">
                        <div
                        className="tabBar_bar_box"
                        style={{ color: barType === "date" ? "#1b91ff" : "inherit" }}
                        onClick={() =>
                            dispatch({
                            type: "bgdlqk/showbar",
                            payload: barType === "date" ? "" : "date"
                            })
                        }
                        >
                        {stime.map((obj,index)=>{
                            if(obj.checked === true)  
                            return <div> {obj.title}-{dataTitle}</div>;
                         })}
                        <div>
                            <Icon type="down" />
                        </div>
                            
                        </div>
                    </div>
                </div>
                {toolBar}
            </div>
        );
    }

}
);