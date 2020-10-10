<template>
<div style="width: 100%;height:500px;margin:50px 0px;" id="TestChart">
    <v-chart :options="myline" />
</div>
</template>

<script>
import ECharts from 'vue-echarts';
// echarts-gl包含大部分图表所需要的依赖模块
import 'echarts-gl';

// 按需引入不同的图表需要的依赖
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/chart/gauge';

export default {
    name: 'BarChart',
    components: {
        'v-chart': ECharts
    },
    data() {
        return {
            //堆叠折线图所需参数对象   
            myline: {
                title: {
                    text: '在Vue中使用echarts'
                },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    }
}
</script>
