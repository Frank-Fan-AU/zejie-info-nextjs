# Giscus 评论系统配置指南

## 1. 安装依赖

已经完成：
```bash
npm i @giscus/react
```

## 2. 配置 GitHub 仓库

### 2.1 创建 GitHub 仓库
1. 在 GitHub 上创建一个新的仓库（如果还没有的话）
2. 仓库可以是公开或私有的

### 2.2 安装 Giscus App
1. 访问 [Giscus App](https://github.com/apps/giscus)
2. 点击 "Install" 安装到你的仓库
3. 选择你要安装的仓库

### 2.3 获取配置信息
1. 访问 [Giscus 配置页面](https://giscus.app/)
2. 填写你的仓库信息
3. 获取以下配置信息：
   - Repository: `your-username/your-repo-name`
   - Repository ID: 数字 ID
   - Category: 选择分类
   - Category ID: 分类的数字 ID

## 3. 更新配置文件

编辑 `src/common/constant/giscus.ts` 文件，替换以下值：

```typescript
export const GISCUS_CONFIG = {
  repo: 'your-username/your-repo-name', // 替换为你的 GitHub 仓库
  repoId: 'your-repo-id', // 替换为你的仓库 ID
  category: 'Announcements', // 替换为你的分类名称
  categoryId: 'your-category-id', // 替换为你的分类 ID
  mapping: 'pathname', // 评论映射方式
  strict: '0', // 严格模式
  reactionsEnabled: '1', // 启用反应
  emitMetadata: '0', // 发送元数据
  inputPosition: 'bottom', // 输入框位置
  theme: 'preferred_color_scheme', // 主题
  lang: 'zh-CN', // 语言
};
```

## 4. 配置说明

- **repo**: 你的 GitHub 仓库名称，格式为 `username/repository`
- **repoId**: 仓库的数字 ID，可以在 giscus.app 配置页面找到
- **category**: 用于存储评论的 GitHub Discussions 分类
- **categoryId**: 分类的数字 ID
- **mapping**: 评论映射方式
  - `pathname`: 基于页面路径
  - `url`: 基于完整 URL
  - `title`: 基于页面标题
- **theme**: 主题设置
  - `light`: 浅色主题
  - `dark`: 深色主题
  - `preferred_color_scheme`: 跟随系统主题

## 5. 测试

1. 启动开发服务器：`npm run dev`
2. 访问任意博客页面
3. 在页面底部应该能看到评论系统
4. 尝试发表评论测试功能

## 6. 注意事项

- 确保 GitHub 仓库已启用 Discussions 功能
- 确保 Giscus App 已正确安装并配置
- 评论系统会自动跟随网站的主题切换
- 评论数据存储在 GitHub Discussions 中 