Page({
    data: {
      selectedMarker: null,
      longitude: 118.767413,  // 默认经度（南京市中心）
      latitude: 32.041544,     // 默认纬度
      markers: [],             // 标注点数组
      inputPiles: 10,          // 充电桩数（默认值）
      inputPower: 60,          // 单桩功率（默认值）
      inputPrice: 1.5,         // 电价（默认值）
      calculatedFlow: 0,       // 计算后的客流量
      utilization: 0           // 计算后的利用率
    },
  
// 修改后的 onLoad 函数部分
onLoad: function(options) {
    // 原始数据
    const rawMarkers = [
        {
            name: '建邺区江东街道中青园附近',
            latitude: 32.06530527,
            longitude: 118.7493381,
            width: 20,
            height: 20,
            dailyFlow: 44.66,
            people: 1.95,
            mall: 0,
            office: 3,
            hospital: 2,
            subway: 0,
            avoid: 0,
            id: 1
        },
        {
            name: '建邺区江东街道金陵御沁园附近',
            latitude: 32.068175,
            longitude: 118.7471084,
            width: 20,
            height: 20,
            dailyFlow: 44.66,
            people: 1.95,
            mall: 0,
            office: 2,
            hospital: 1,
            subway: 0,
            avoid: 0,
            id: 2
        },
        {
            name: '鼓楼区凤凰街道新城市广场附近',
            latitude: 32.06183736,
            longitude: 118.7477694,
            width: 20,
            height: 20,
            dailyFlow: 45.9,
            people: 3.48,
            mall: 1,
            office: 5,
            hospital: 1,
            subway: 1,
            avoid: 0,
            id: 3
        },
        {
            name: '鼓楼区凤凰街道蔚蓝之都家园附近',
            latitude: 32.04716289,
            longitude: 118.7689147,
            width: 20,
            height: 20,
            dailyFlow: 47.25,
            people: 3.48,
            mall: 0,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 4
        },
        {
            name: '鼓楼区凤凰街道8号（石婆婆巷小区）附近',
            latitude: 32.06220854,
            longitude: 118.7941945,
            width: 20,
            height: 20,
            dailyFlow: 45.9,
            people: 3.48,
            mall: 1,
            office: 5,
            hospital: 2,
            subway: 1,
            avoid: 0,
            id: 5
        },
        {
            name: '鼓楼区华侨路街道虎踞路3840号小区附近',
            latitude: 32.05072915,
            longitude: 118.770439,
            width: 20,
            height: 20,
            dailyFlow: 44.91,
            people: 3.18,
            mall: 1,
            office: 5,
            hospital: 4,
            subway: 2,
            avoid: 0,
            id: 6
        },
        {
            name: '鼓楼区华侨路街道大地大厦附近',
            latitude: 32.05325436,
            longitude: 118.7844257,
            width: 20,
            height: 20,
            dailyFlow: 44.91,
            people: 3.18,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 1,
            id: 7
        },
        {
            name: '鼓楼区华侨路街道德基广场-二期',
            latitude: 32.05086801,
            longitude: 118.791176,
            width: 20,
            height: 20,
            dailyFlow: 44.91,
            people: 3.18,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 8
        },
        {
            name: '鼓楼区华侨路街道乐灵发展大厦',
            latitude: 32.05445532,
            longitude: 118.7844418,
            width: 20,
            height: 20,
            dailyFlow: 44.91,
            people: 3.18,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 1,
            id: 9
        },
        {
            name: '鼓楼区宁海路街道万豪国际大厦',
            latitude: 32.07599903,
            longitude: 118.7766167,
            width: 20,
            height: 20,
            dailyFlow: 45.92,
            people: 3.03,
            mall: 4,
            office: 5,
            hospital: 4,
            subway: 0,
            avoid: 0,
            id: 10
        },
        {
            name: '秦淮区朝天宫街道汉中门（地铁站）附近',
            latitude: 32.04771501,
            longitude: 118.773343,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 1,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 0,
            id: 11
        },
        {
            name: '秦淮区朝天宫街道兴宇大厦附近',
            latitude: 32.04684742,
            longitude: 118.7727154,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 1,
            office: 5,
            hospital: 5,
            subway: 4,
            avoid: 0,
            id: 12
        },
        {
            name: '秦淮区朝天宫街道汉中门消防中队附近',
            latitude: 32.04447896,
            longitude: 118.7740588,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 4,
            avoid: 0,
            id: 13
        },
        {
            name: '秦淮区朝天宫街道张公桥小区附近',
            latitude: 32.0422637,
            longitude: 118.7770146,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 14
        },
        {
            name: '秦淮区朝天宫街道平安国际金融中心',
            latitude: 32.04820562,
            longitude: 118.7757676,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 2,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 0,
            id: 15
        },
        {
            name: '秦淮区朝天宫街道江苏省中医院-南院附近',
            latitude: 32.04619628,
            longitude: 118.7791866,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 1,
            id: 16
        },
        {
            name: '秦淮区朝天宫街道南京基督教大楼附近',
            latitude: 32.04498649,
            longitude: 118.7818498,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 1,
            id: 17
        },
        {
            name: '秦淮区朝天宫街道金鹰大厦附近',
            latitude: 32.04758846,
            longitude: 118.7871854,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 18
        },
        {
            name: '秦淮区朝天宫街道江苏省中医院-北院附近',
            latitude: 32.04781395,
            longitude: 118.7809923,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 1,
            id: 19
        },
        {
            name: '秦淮区朝天宫街道俞家巷小区附近',
            latitude: 32.0450803,
            longitude: 118.7868666,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 20
        },
        {
            name: '秦淮区朝天宫街道南京新街口王府大街亚朵酒店附近',
            latitude: 32.0429591,
            longitude: 118.7838376,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 1,
            avoid: 0,
            id: 21
        },
        {
            name: '秦淮区朝天宫街道南京市商务局附近',
            latitude: 32.03785492,
            longitude: 118.7853064,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 2,
            avoid: 1,
            id: 22
        },
        {
            name: '秦淮区朝天宫街道中国人民银行（江苏省分行）附近',
            latitude: 32.03713155,
            longitude: 118.7875835,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 1,
            id: 23
        },
        {
            name: '秦淮区朝天宫街道南京互联网金融中心附近',
            latitude: 32.03753505,
            longitude: 118.790286,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 2,
            avoid: 0,
            id: 24
        },
        {
            name: '秦淮区朝天宫街道公房大厦附近',
            latitude: 32.04124868,
            longitude: 118.790989,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 2,
            subway: 2,
            avoid: 0,
            id: 25
        },
        {
            name: '秦淮区朝天宫街道东方福来德附近',
            latitude: 32.04687504,
            longitude: 118.7897745,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 0,
            id: 26
        },
        {
            name: '秦淮区朝天宫街道大洋百货附近',
            latitude: 32.04501534,
            longitude: 118.7898302,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 3,
            avoid: 0,
            id: 27
        },
        {
            name: '秦淮区朝天宫街道Huan Ya Plaza附近',
            latitude: 32.027086,
            longitude: 118.7777,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 4,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 28
        },
        {
            name: '秦淮区朝天宫街道南京新百B座',
            latitude: 32.04751202,
            longitude: 118.7921807,
            width: 20,
            height: 20,
            dailyFlow: 46.36,
            people: 4.44,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 29
        },
        {
            name: '秦淮区洪武路街道福鑫国际大厦附近',
            latitude: 32.03608395,
            longitude: 118.7932857,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 2,
            avoid: 1,
            id: 30
        },
        {
            name: '秦淮区洪武路街道城开大厦-1幢附近',
            latitude: 32.04035004,
            longitude: 118.792832,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 4,
            subway: 1,
            avoid: 1,
            id: 31
        },
        {
            name: '秦淮区洪武路街道中国建设银行大厦',
            latitude: 32.04107697,
            longitude: 118.7928298,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 4,
            subway: 1,
            avoid: 1,
            id: 32
        },
        {
            name: '秦淮区洪武路街道太平商场（太平南路店）附近',
            latitude: 32.03954451,
            longitude: 118.7991574,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 2,
            avoid: 0,
            id: 33
        },
        {
            name: '秦淮区洪武路街道斯亚·财富中心附近',
            latitude: 32.03432198,
            longitude: 118.7963635,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 1,
            avoid: 0,
            id: 34
        },
        {
            name: '秦淮区洪武路街道万厦商务楼附近',
            latitude: 32.04042901,
            longitude: 118.8027006,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 4,
            subway: 2,
            avoid: 1,
            id: 35
        },
        {
            name: '秦淮区洪武路街道苏宁电器大厦',
            latitude: 32.04280897,
            longitude: 118.7933548,
            width: 20,
            height: 20,
            dailyFlow: 49.68,
            people: 5.43,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 36
        },
        {
            name: '秦淮区五老村街道苏宁生活广场（新街口店）附近',
            latitude: 32.04332792,
            longitude: 118.7934841,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 37
        },
        {
            name: '秦淮区五老村街道光阳大舞台人民剧场附近',
            latitude: 32.04177483,
            longitude: 118.7981794,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 2,
            avoid: 1,
            id: 38
        },
        {
            name: '秦淮区五老村街道长发中心-CFC商业广场附近',
            latitude: 32.04677328,
            longitude: 118.803744,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 1,
            avoid: 1,
            id: 39
        },
        {
            name: '秦淮区五老村街道南京利济巷慰安所旧址附近',
            latitude: 32.04521803,
            longitude: 118.80411,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 40
        },
        {
            name: '秦淮区五老村街道南京时尚莱迪购物广场附近',
            latitude: 32.04636859,
            longitude: 118.7922463,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 41
        },
        {
            name: '秦淮区五老村街道熊猫新兴宾馆附近',
            latitude: 32.04651642,
            longitude: 118.8096108,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 2,
            office: 5,
            hospital: 5,
            subway: 1,
            avoid: 0,
            id: 42
        },
        {
            name: '秦淮区五老村街道华盈国际大厦',
            latitude: 32.04279367,
            longitude: 118.7921271,
            width: 20,
            height: 20,
            dailyFlow: 47.87,
            people: 4.89,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 1,
            avoid: 0,
            id: 43
        },
        {
            name: '栖霞区迈皋桥街道凤悦南园附近',
            latitude: 32.12247304,
            longitude: 118.855683,
            width: 20,
            height: 20,
            dailyFlow: 47.78,
            people: 1.17,
            mall: 1,
            office: 0,
            hospital: 1,
            subway: 0,
            avoid: 0,
            id: 44
        },
        {
            name: '栖霞区迈皋桥街道万寿（地铁站）附近',
            latitude: 32.12628318,
            longitude: 118.8460274,
            width: 20,
            height: 20,
            dailyFlow: 46.43,
            people: 1.17,
            mall: 1,
            office: 0,
            hospital: 3,
            subway: 0,
            avoid: 0,
            id: 45
        },
        {
            name: '玄武区新街口街道新世界百货（南京店）附近',
            latitude: 32.05567837,
            longitude: 118.7947894,
            width: 20,
            height: 20,
            dailyFlow: 47.63,
            people: 4.39,
            mall: 2,
            office: 5,
            hospital: 3,
            subway: 1,
            avoid: 0,
            id: 46
        },
        {
            name: '玄武区新街口街道南京D9街区',
            latitude: 32.05185118,
            longitude: 118.8003661,
            width: 20,
            height: 20,
            dailyFlow: 47.63,
            people: 4.39,
            mall: 5,
            office: 5,
            hospital: 5,
            subway: 2,
            avoid: 0,
            id: 47
        },
        {
            name: '玄武区湖南路街道中环国际广场附近',
            latitude: 32.07278617,
            longitude: 118.7794295,
            width: 20,
            height: 20,
            dailyFlow: 48.37,
            people: 4.62,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 1,
            avoid: 0,
            id: 48
        },
        {
            name: '玄武区湖南路街道天鹤文云商务大厦附近',
            latitude: 32.07355706,
            longitude: 118.7872152,
            width: 20,
            height: 20,
            dailyFlow: 48.37,
            people: 4.62,
            mall: 2,
            office: 5,
            hospital: 1,
            subway: 1,
            avoid: 0,
            id: 49
        },
        {
            name: '玄武区湖南路街道金山大厦附近',
            latitude: 32.07456682,
            longitude: 118.7785819,
            width: 20,
            height: 20,
            dailyFlow: 48.37,
            people: 4.62,
            mall: 4,
            office: 5,
            hospital: 4,
            subway: 1,
            avoid: 0,
            id: 50
        },
        {
            name: '玄武区湖南路街道永达集团商务楼（湖南路）附近',
            latitude: 32.07522816,
            longitude: 118.7850253,
            width: 20,
            height: 20,
            dailyFlow: 48.37,
            people: 4.62,
            mall: 2,
            office: 5,
            hospital: 2,
            subway: 2,
            avoid: 0,
            id: 51
        },
        {
            name: '玄武区中央门街道天正湖滨-2期附近',
            latitude: 32.09252713,
            longitude: 118.7876256,
            width: 20,
            height: 20,
            dailyFlow: 49.22,
            people: 4.46,
            mall: 5,
            office: 5,
            hospital: 3,
            subway: 1,
            avoid: 0,
            id: 52
        }
        
    ];
    const avoParam = options.avo || '0'  // 默认值处理
    const shouldFilter = Number(avoParam) === 1
    
    
    // 使用 for 循环过滤
    const filteredMarkers = [];
    for (let i = 0; i < rawMarkers.length; i++) {
        const marker = rawMarkers[i];
        
        // 核心过滤逻辑
        if (shouldFilter) {// 需要过滤
            if (marker.avoid === 1) { // 不需要显示的条件
                continue; // 跳过当前循环，不添加到 filteredMarkers 中
            }
            if (marker.avoid === 0) { // 需要显示的条件
                filteredMarkers.push(marker);
            }
        } else { // 不需要过滤
            filteredMarkers.push(marker);
        }
    }

    this.setData({ markers: filteredMarkers });
},
  
    // 标记点点击事件
    makertap: function(e) {
      const markerId = e.detail.markerId;
      const marker = this.data.markers.find(m => m.id === markerId);
      if (marker) {
        this.setData({
          selectedMarker: marker,
          inputPiles: 12,  // 重置为默认值
          inputPower: 120,
          inputPrice: 1.10
        });
        this.calculateFlow();
      }
    },
  
    // 计算客流量和利用率
    calculateFlow: function() {
      const { people, car } = this.data.selectedMarker || {};
      const { inputPiles, inputPower, inputPrice } = this.data;
      
      // 计算公式
      const newFlow = 26.04 + 0.06013 * inputPower + 2.41 * inputPiles + 
                    2.46 * (people || 0) - 24.48 * inputPrice;
      const utilization = inputPiles ? (newFlow / inputPiles).toFixed(2) : 0;
      
      this.setData({
        calculatedFlow: newFlow.toFixed(2),
        utilization
      });
    },
  
    // 输入框变化处理
    handleInput: function(e) {
      const field = e.currentTarget.dataset.field;
      const value = e.detail.value;
      
      this.setData({
        [field]: Number(value)
      }, () => {
        this.calculateFlow();
      });
    }
  });