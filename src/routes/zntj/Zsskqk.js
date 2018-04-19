import React, { Component } from "react";
import { connect } from "dva";
import ReactDOM from "react-dom";
import { Tabs, Icon } from "antd-mobile";
import Chart from "chart.js";
import "./zsskqk.less";
import SelectPercent from './SelectPercent';
import SelectChart from './SelectChart';

const style = {height:200 };

export default connect(({ zsskqk, loading }) => ({ ...zsskqk }))(
    class Zsskqk extends Component {

        render(){
            const { tabs,percentMonth,percentYear,chartMonth,chartYear } = this.props;
            return(
                <div>
                    <Tabs
                    tabs={tabs}
                    swipeable={false}
                    initialPage={0}
                    >
                        <div>
                            <SelectPercent groups={percentMonth} style={style}/>    
                            <SelectChart  groups={chartMonth} style={style}/>
                        </div>

                        <div>
                            <SelectPercent groups={percentYear} style={style}/>    
                            <SelectChart  groups={chartYear} style={style}/>
                        </div>
                    </Tabs>
                </div>

            );
        }
})