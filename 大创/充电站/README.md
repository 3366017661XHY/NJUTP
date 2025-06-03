# 充电站选址小程序

## 项目结构
```
根目录
├── app.json         # 全局配置（窗口样式/页面注册/网络超时设置）
├── app.wxss        # 全局公共样式表
├── project.config.json      # 开发者工具配置（项目名称/编译选项）
├── project.private.config.json  # 个性化环境配置
└── pages/
    ├── home/       # 可以认为是选择页（智能推荐/单点评估）
    │   ├── home.js    # 
    │   ├── home.json  # 
    │   └── home.wxml  # 
    ├── index/      # 可以认为是welcome页
    │   ├── index.js    # 
    │   └── index.wxss  # 
    ├── recommend/  # 智能推荐模块
    │   ├── recommend.js  # 推荐算法实现
    │   └── recommend.wxml # 评分可视化组件
    └── report/     # 智能推荐评估报告页
        ├── report.js   # 数据可视化逻辑
        └── report.wxss # 图表样式配置
```

## 使用指引
1. 首页点击"进入系统"
2. 选择【智能推荐】模式
3. 设置区域范围和品牌偏好
4. 查看推荐结果（A-D级评分）

