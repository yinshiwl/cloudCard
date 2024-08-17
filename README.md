# cloudCard
云联名片是一款现代化的名片管理小程序，旨在帮助您在数字化时代轻松连接和管理人脉。通过云端技术，您可以随时随地创建、分享和保存名片，再也不用担心遗失或忘记携带名片。无论是商业会议、社交活动，还是日常交流，云联名片都能让您轻松交换信息，并高效管理您的联系人网络。

## 技术栈

- **Taro**: 多端开发框架，支持跨平台的小程序开发
- **React**: JavaScript 库，用于构建用户界面
- **NutUI**: 基于 Vue 的移动端组件库，在 Taro 中适配用于 React

## 本地开发

以下是本地开发环境的设置步骤。

### 1. 克隆仓库

```bash
git clone https://github.com/your_username/cloudCard.git
cd cloudCard
```

### 2. 安装依赖

使用 `npm` 或 `yarn` 安装项目所需的依赖包：

```bash
npm install
# or
yarn install
```

### 3. 配置环境变量

根据项目需求，在项目根目录下创建 `.env` 文件，并配置相关的环境变量。例如：

```env
TARO_APP_API_URL=http://localhost:8000
```

### 4. 运行项目

使用 Taro CLI 运行小程序项目：

```bash
# 小程序开发环境
npm run dev:weapp
# or
yarn dev:weapp
```

开发服务器将自动启动，并在 Taro 开发者工具中打开。你可以通过开发者工具预览和调试小程序。

### 5. 构建项目

当准备发布小程序时，可以使用以下命令进行构建：

```bash
npm run build:weapp
# or
yarn build:weapp
```

## 目录结构

```plaintext
cloudCard/
│
├── src/
│   ├── pages/          # 小程序页面
│   ├── components/     # 公共组件
│   ├── assets/         # 静态资源
│   ├── app.js          # 项目入口文件
│   └── config/         # 项目配置
│
├── project.config.json # 小程序项目配置
├── package.json        # 项目依赖和脚本
└── README.md           # 项目文档
```

## 部署

可以将构建后的文件上传到微信小程序后台，进行发布。具体步骤请参考微信官方文档或相关工具的文档说明。
