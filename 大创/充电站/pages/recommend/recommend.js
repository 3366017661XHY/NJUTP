const app = getApp()

Page({
  // 页面数据初始化
  data: {
    // 搜索结果存储
    searchResult: [],
    
    // 地区选择器默认值（强制限定为江苏省南京市）
    region: ['江苏省', '南京市', ''],
    
    // 省级行政区列表（限定可选范围）
    provinceList: ['江苏省'],
    
    // 市级行政区映射（限定南京为江苏唯一可选城市）
    cityList: {
      '江苏省': ['南京市']
    },
    
    // 选择器自定义选项标签
    customItem: '全部',
    


    // 推荐结果集
    results: []
  },
  // 页面加载完成事件
  onLoad() {
    // 初始化地图
    this.mapCtx = wx.createMapContext('map');
    // 初始化地理编码API  
    },
  bindPreferenceChange(e) {
    this.setData({
      selectedPreferenceIndex: e.detail.value
    });
  },
    // 地区选择变化事件处理
  async bindRegionChange(e) {
    const value = e.detail.value;
    const [province, city, district] = value;
    
    if (province !== '江苏省') {
      value[0] = '江苏省';
      value[1] = '南京市';
    }
    
    if (city !== '南京市') {
      value[1] = '南京市';
    }
    
    
   
      // 行政区预设坐标
      let coordinates = '118.778074408,32.0572355018';
      switch(district) {
        case '玄武区':
          coordinates = '118.79772,32.04856';
          break;
        case '秦淮区':
          coordinates = '118.79815,32.01112';
          break;
        case '鼓楼区':
          coordinates = '118.76974,32.06632';
          break;
        case '建邺区':
          coordinates = '118.76641,32.03096';
          break;
        case '栖霞区':
          coordinates = '118.88064,32.11352';
          break;
      }
      
      this.setData({
        region: value,
        location: coordinates
      });
    
  },



  formSubmit(e) {  // ← 修正为与wxml中bindsubmit对应的名称
    const { region, selectedPreferenceIndex } = this.data
    const { distance } = e.detail.value
    
    wx.navigateTo({
      url: `/pages/map/map?province=${region[0]}&city=${region[1]}&district=${region[2]}&radius=${distance}&avo=${selectedPreferenceIndex === '1' ? 1 : 0}`
    })
  },


})