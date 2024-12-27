<template>
  <div class="vote-container">
    <!-- 左侧内容区域 -->
    <div class="left-content">
      <!-- 数据卡片行 -->
      <div class="data-cards-row">
        <div class="data-card total">
          <div class="icon">
            <i class="el-icon-data-analysis"></i>
          </div>
          <div class="content">
            <div class="value">{{ totalVotes }}</div>
            <div class="label">总投票数</div>
          </div>
        </div>
        <div class="data-card agree">
          <div class="icon">
            <i class="el-icon-circle-check"></i>
          </div>
          <div class="content">
            <div class="value">{{ getVotesByType('赞同') }}</div>
            <div class="label">赞同票数</div>
          </div>
        </div>
        <div class="data-card disagree">
          <div class="icon">
            <i class="el-icon-circle-close"></i>
          </div>
          <div class="content">
            <div class="value">{{ getVotesByType('反对') }}</div>
            <div class="label">反对票数</div>
          </div>
        </div>
        <div class="data-card abstain">
          <div class="icon">
            <i class="el-icon-warning-outline"></i>
          </div>
          <div class="content">
            <div class="value">{{ getVotesByType('弃权') }}</div>
            <div class="label">弃权票数</div>
          </div>
        </div>
      </div>

      <!-- 饼图区域 -->
      <div class="chart-box pie-chart-box">
        <h3>投票占比</h3>
        <div class="chart">
          <div ref="pieChart" style="width: 100%; height: 100%"></div>
        </div>
      </div>
    </div>

    <!-- 右侧表格 - 简化版本 -->
    <div class="right-section">
      <el-table :data="chartData" style="width: 100%">
        <el-table-column prop="name" label="选项" align="center" />
        <el-table-column prop="value" label="票数" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, computed, onMounted } from 'vue';

const pieChart = ref(null);
const lineChart = ref(null);

// 简化投票数据，移除不必要的 id
const chartData = ref([
  { name: '赞同', value: 235 },
  { name: '反对', value: 274 },
  { name: '弃权', value: 310 }
])

// 计算总票数
const totalVotes = computed(() => {
  return chartData.value.reduce((sum, item) => sum + item.value, 0)
})

// 获取指定类型的票数
const getVotesByType = (type) => {
  const item = chartData.value.find(item => item.name === type)
  return item ? item.value : 0
}

// 获取指定类型的占比
const getPercentageByType = (type) => {
  const votes = getVotesByType(type)
  return ((votes / totalVotes.value) * 100).toFixed(1)
}

// 修改初始化图表的函数
const initChart = () => {
  const chart = echarts.init(pieChart.value)
  const option = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['赞同', '反对', '弃权'],
      top: 0,
      left: 'center',
      itemWidth: 25,
      itemHeight: 14,
      itemGap: 25,
      textStyle: {
        fontSize: 14
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 2,
          borderWidth: 2,
          borderColor: '#fff'
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}\n{c}票 ({d}%)',
          fontSize: 14,
          color: '#666'
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 15,
          smooth: true
        },
        data: chartData.value.map(item => ({
          value: item.value,
          name: item.name,
          itemStyle: { 
            color: item.name === '赞同' ? '#5470c6' : 
                   item.name === '反对' ? '#91cc75' : '#fac858'
          }
        }))
      }
    ]
  }
  chart.setOption(option)
}

// 初始化折线图
const initLineChart = () => {
  const chart = echarts.init(lineChart.value);
  const option = {
    grid: {
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#eee'
        }
      },
      data: Array.from({ length: 100 }, (_, i) => i)
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      }
    },
    series: [{
      data: Array.from({ length: 100 }, () => Math.floor(Math.random() * 500)),
      type: 'line',
      smooth: true,
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(255, 107, 107, 0.4)'
          }, {
            offset: 1,
            color: 'rgba(255, 107, 107, 0.1)'
          }]
        }
      },
      itemStyle: {
        color: '#FF6B6B'
      },
      lineStyle: {
        width: 2,
        color: '#FF6B6B'
      }
    }]
  };
  chart.setOption(option);
}

// 修改 onMounted
onMounted(() => {
  initChart();
  initLineChart();
})

// 修改窗口大小变化监听
window.addEventListener('resize', () => {
  const pieChartInstance = echarts.getInstanceByDom(pieChart.value);
  const lineChartInstance = echarts.getInstanceByDom(lineChart.value);
  if (pieChartInstance) pieChartInstance.resize();
  if (lineChartInstance) lineChartInstance.resize();
})
</script>

<style scoped>
.vote-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
  display: flex;
  gap: 24px;
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.data-cards-row {
  display: flex;
  gap: 20px;
  width: 100%;
}

.right-section {
  width: 300px;  /* 减小表格宽度 */
  margin-top: 100px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  padding: 20px;
}

/* 简化表格样式 */
.right-section :deep(.el-table) {
  width: 100%;
}

.pie-chart-box {
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.data-card {
  flex: 1;  /* 让每个卡片平均分配空间 */
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border-radius: 8px;
  color: white;
  height: 100px;
}

.data-card.total {
  background-color: #41B883;
}

.data-card.agree {
  background-color: #67C23A;
}

.data-card.disagree {
  background-color: #F56C6C;
}

.data-card.abstain {
  background-color: #909399;
}

.icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.icon i {
  font-size: 28px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.value {
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 6px;
}

.label {
  font-size: 14px;
  opacity: 0.9;
}

.chart-box {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  position: relative;
}

h3 {
  margin: 0 0 20px 0;
  color: #303133;
  font-size: 16px;
  font-weight: 500;
}

.chart {
  height: 400px;
}
</style>