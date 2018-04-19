export default{
    namespace: 'zsskqk',  
    state: {
      tabs: [
        { title: "THIS MONTH" }, 
        { title: "THIS YEAR" }
      ],
      percentMonth: [
        {
          title: "本月征收税款占比情况",
          items: [
            { title: "年占比",width:'8%',total:2300}
          ]
        }
      ],
      percentYear: [
        {
          title: "今年征收税款与历史总量占比情况",
          items: [
            { title: "年占比",width:'20%',total:2300}
          ]
        }
      ],
      chartMonth:[
        {
          title:'近一年船代申报同环比情况',
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
      chartYear:[
        {
          title:'近五年船代申报提单同环比情况',
          data:{
            type: 'bar',
            data: {
                datasets:[{
                    label: '船代申报提单量',
                    data: [200, 210, 180, 230,210],
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
      ]
    },
    reducers: {

    }
};