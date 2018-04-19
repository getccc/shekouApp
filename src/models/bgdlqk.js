export default {
    namespace: 'bgdlqk',  
    state: {
      barType:'',
      dataTitle:'',
      tabs: [
        { title: "总量" }, 
        { title: "进口报关单量" },
        { title: "出口报关单量" }
      ],
      monthPerce: [
        {
          title: "本月报关单量占比情况",
          items: [
            { title: "年占比",width:'20%',total:2300}
          ]
        }
      ],
      today: [
        {
          title: "今日报关单量占比情况",
          items: [
            { title: "本周占比",width:'50%',total:300},
            { title: "月占比",width:'24%',total:1000},
            { title: "年占比",width:'8%',total:2400}
          ]
        }
      ],
      year: [
        {
          title: "本年报关单量占比情况",
          items: [
            { title: "年占比",width:'8%',total:2300}
          ]
        }
      ],
      chart:[
        {
          title:'今年报关单量排名情况',
          data: {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [29,16,14,12,10,8,6,5],
                    backgroundColor:[
                        '#1890ff',
                        '#7fc0fe', 
                        '#acd598', 
                        '#47c39e', 
                        '#f57874', 
                        '#e76568', 
                        '#f3e095', 
                        '#f3d665'
                    ]
                }],
                labels: [
                    '船代1',
                    '船代2',
                    '船代3',
                    '船代4',
                    '船代5',
                    '船代6',
                    '船代7',
                    'other'
                ]
            },
            options: {
                cutoutPercentage:50,
                legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
                    }
                },
                tooltips:{
                    intersect:true
                }
            }
        }          
        }  
      ],
      chartPieMonth:[
        {
          title:'本月报关单量排名情况',
          data: {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [29,16,14,12,10,8,6,5],
                    backgroundColor:[
                        '#1890ff',
                        '#7fc0fe', 
                        '#acd598', 
                        '#47c39e', 
                        '#f57874', 
                        '#e76568', 
                        '#f3e095', 
                        '#f3d665'
                    ]
                }],
                labels: [
                    '关区1',
                    '关区2',
                    '关区3',
                    '关区4',
                    '关区5',
                    '关区6',
                    '关区7',
                    'other'
                ]
            },
            options: {
                cutoutPercentage:50,
                legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
                    }
                },
                tooltips:{
                    intersect:true
                }
            }
        }          
        }  
      ],
      chart1:[
        {
          title:'近一周船代申报提单同环比情况',
          data:{
            type: 'bar',
            data: {
                datasets:[{
                    label: '船代申报提单量',
                    data: [160, 190, 230, 260,160,230,210],
                    backgroundColor:'#f57874'
                  }, {
                    label: '同比',
                    fill: false,
                    data: [160, 150, 160, 200,140,230,250],
                    backgroundColor:'#acd598',
                    borderColor:'#acd598',
                    type: 'line' 
                  }, {
                    label: '环比',
                    fill: false,
                    data: [260, 170, 220, 200,190,260,300],
                    backgroundColor:'#1890ff',
                    borderColor:'#1890ff',
                    type: 'line'
                  }],
                labels:['2018/3/01','2018/3/02','2018/3/03','2018/3/04','2018/3/05','2018/3/06','2018/3/07']
                },
            options: {
              legend:{
                position:'bottom',
                labels:{
                    usePointStyle:true
                }
            }
            }
        }
        }
      ],
      monthchart1:[
        {
          title:'近一年报关单量同环比情况',
          data:{
            type: 'bar',
            data: {
                datasets:[{
                    label: '船代申报提单量',
                    data: [160, 190, 230, 260,160,230,210,160, 190, 230, 260,160],
                    backgroundColor:'#f57874'
                  }, {
                    label: '同比',
                    fill: false,
                    data: [160, 150, 160, 200,140,230,250,160, 150, 160, 200,140],
                    backgroundColor:'#acd598',
                    borderColor:'#acd598',
                    type: 'line' 
                  }, {
                    label: '环比',
                    fill: false,
                    data: [260, 170, 220, 200,190,260,300,260, 170, 220, 200,190],
                    backgroundColor:'#1890ff',
                    borderColor:'#1890ff',
                    type: 'line'
                  }],
                labels:['2017/04','2017/05','2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12','2018/01','2018/02','2018/03']
                },
                options: {
                  legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
                    }
                }
                }
        }
        }
      ],
      yearchart1:[
        {
          title:'近五年报关单量同环比情况',
          data:{
            type: 'bar',
            data: {
                datasets:[{
                    label: '船代申报提单量',
                    data: [200, 260, 180, 230,210],
                    backgroundColor:'#f57874'
                  }, {
                    label: '同比',
                    fill: false,
                    data: [160, 220,140,230,250],
                    backgroundColor:'#acd598',
                    borderColor:'#acd598',
                    type: 'line' 
                  }, {
                    label: '环比',
                    fill: false,
                    data: [120, 200,190,260,300],
                    backgroundColor:'#1890ff',
                    borderColor:'#1890ff',
                    type: 'line'
                  }],
                labels:['2014年','2015年','2016年','2017年','2018年']
                },
                options: {
                  legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
                    }
                }
                }
        }
        }
      ],
      stime:[
        {title:'THIS MONTH (本月)',checked: true},
        {title:'THIS YEAR (本年)',checked: false}
      ]
    },
    reducers: {
      showbar (state, { payload }) {
        return { ...state, barType: payload};
      },
      setDataTitle (state, { payload }) {
        let {idx,data} = payload;
        let stime = [...state.stime];
        {stime.map((obj,index)=>{
          obj.checked = false;
        })}
        stime[idx].checked = true;
        return {
            ...state,
            barType: '',
            dataTitle: "(" + payload.data.map(x=>x.replace(/-/g, '.')).join("-") + ")"
          };
      },
      dateChange (state, { payload }) {
        let {idx} = payload;
        let stime = [...state.stime];
        {stime.map((obj,index)=>{
          obj.checked = false;
        })}
        stime[idx].checked = true;
        return {
          ...state, barType: false
        }
      }

    }, 
    effects: {
        *dateeChange({ payload }, { put }) {
            yield put({ type: "setDataTitle", payload: payload });
        }
    } 
};