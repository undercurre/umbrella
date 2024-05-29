module.exports = {
	// 配置生成 changelog 的规范
	types: [
		{ type: 'feat', section: 'Features' },
		{ type: 'fix', section: 'Bug Fixes' },
		{ type: 'chore', section: 'Chores' },
		{ type: 'docs', hidden: true },
		{ type: 'style', hidden: true },
		{ type: 'refactor', hidden: true },
		{ type: 'perf', hidden: true },
		{ type: 'test', hidden: true }
	],
	// 配置提交信息的正则匹配，用于提取版本号信息
	header: 'chore(release): @{{currentTag}} [skip ci]',
	// 配置更改内容是否自动排序
	releaseCommitMessageFormat: 'chore(release): {{currentTag}} [skip ci]'
};
