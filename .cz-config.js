module.exports = {
	types: [
		{ value: 'feat', name: '✨ 新功能 feat: 添加新功能' },
		{ value: 'fix', name: '🐛 修复 bug fix: 修复bug' },
		{ value: 'docs', name: '📚 文档 docs: 更新文档' },
		{ value: 'style', name: '💄 格式 style: 代码格式化' },
		{ value: 'refactor', name: '🔨 重构 refactor: 代码重构' },
		{ value: 'perf', name: '⚡ 性能 perf: 提升性能' },
		{ value: 'test', name: '✅ 测试 test: 添加测试' },
		{ value: 'chore', name: '🔧 构建/工具 chore: 更新构建或工具配置' },
		{ value: 'ci', name: '🚦 CI ci: 更新持续集成配置' },
		{ value: 'revert', name: '⏪ 回滚 revert: 回滚提交' },
		{ value: 'wip', name: '🚧 进行中 wip: 正在进行中的工作' },
		{ value: 'design', name: '🎨 设计 design: UI/UX 设计相关' },
		{ value: 'deprecate', name: '⛔ 废弃 deprecate: 标记为废弃' },
		{ value: 'merge', name: '🔀 合并 merge: 分支合并' },
		{ value: 'version', name: '🔖 版本 version: 版本号相关' },
		{ value: 'config', name: '⚙️ 配置 config: 配置文件相关' },
		{ value: 'lint', name: '🧹 Lint lint: 代码检查和修复' }
		// 添加更多类型...
	],
	scopes: [
		{ name: 'components', description: '组件' },
		{ name: 'views', description: '页面' },
		{ name: 'router', description: '路由' },
		{ name: 'store', description: '状态管理' },
		{ name: 'utils', description: '工具' },
		{ name: 'release', description: '版本' }
		// 添加更多作用范围...
	],
	messages: {
		type: '选择一种你的提交类型:',
		scope: '选择一个scope (可选):',
		customScope: '请输入自定义的scope:',
		subject: '短说明:\n',
		body: '长说明，使用"|"换行(可选):\n',
		breaking: '非兼容性说明 (可选):\n',
		footer: '关联关闭的issue, 例如：#31, #34(可选):\n',
		confirmCommit: '确定提交说明?(yes/no)'
	},
	allowCustomScopes: true,
	skipQuestions: ['body', 'footer'],
	allowBreakingChanges: ['feat', 'fix']
	// 其他配置...
};
