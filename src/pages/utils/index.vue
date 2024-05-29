<template>
	<p class="mt-10px">
		<span>{{ TestNum }} is {{ isNum ? '' : 'not' }} Number</span>
	</p>
	<div>
		<h1>Strategy Actions Example</h1>
		<u-button @click="executeActions">Execute Strategy Actions</u-button>
		<h3>请打开控制台观察，策略模式</h3>
	</div>
	<div>
		<h3>LocalStorage and SessionStorage Viewer</h3>

		<div class="w-full">
			<div>
				<h4>localStorage</h4>
				<ul>
					<li v-for="(value, key) in localStorage" :key="key">
						<strong>{{ key }}</strong
						>: {{ value }}
					</li>
				</ul>
			</div>

			<u-button @click="handleClear">clear localStorage</u-button>
		</div>
	</div>
	<div>
		<p>随机数字: {{ randomNum }}</p>
		<p>倒计时: {{ countdown }}</p>
		<p>数字对应汉字: {{ hanCharacter }}</p>
	</div>
	<h2>Tree Helper Example {{ JSON.stringify(treeData) }} {{ JSON.stringify(flattenData) }}</h2>
</template>

<script lang="ts" setup>
import {
	isNumber,
	exeStrategyActions,
	localStg,
	getRandomInteger,
	transformToTimeCountDown,
	getHanByNumber,
	flattenToTree,
	flattenTree,
	type TreeHelperConfig
} from '../../utils';

const TestNum = 123;
const isNum = isNumber(TestNum);

const executeActions = () => {
	const strategyActions: Array<Common.StrategyAction> = [
		[true, () => console.log('Action 1 executed')],
		[false, () => console.log('Action 2 executed')],
		[true, () => console.log('Action 3 executed')]
		// ... more strategy actions
	];

	exeStrategyActions(strategyActions);
};

// Access localStorage and sessionStorage
const localStorage = ref(localStg.info()); // Storage对象不是普通的 JavaScript 对象，无法响应式

const handleClear = () => {
	localStg.clear(); // Clear localStorage
	localStorage.value = [...localStg.info()]; // Manually trigger update
};

const randomNum = ref(getRandomInteger(10));
const countdown = ref(transformToTimeCountDown(150));
const hanCharacter = ref(getHanByNumber(randomNum.value));

const defaultProps = {
	children: 'children',
	label: 'name'
};
// 定义树形结构
interface TreeNode {
	id: number;
	name: string;
	parentId?: number;
	children?: TreeNode[];
}
// 一个简单的样本数据
const rawData: TreeNode[] = [
	{ id: 1, name: 'Node 1' },
	{ id: 2, name: 'Node 2', parentId: 1 },
	{ id: 3, name: 'Node 3', parentId: 1 },
	{ id: 4, name: 'Node 4', parentId: 2 },
	{ id: 5, name: 'Node 5', parentId: 2 },
	{ id: 6, name: 'Node 6', parentId: 3 }
];
// 配置树形键
const treeConfig: TreeHelperConfig<TreeNode> = {
	idKey: 'id',
	childrenKey: 'children',
	parentKey: 'parentId'
};
// 把数据转成树
const treeData = flattenToTree(rawData, treeConfig);
console.log('treeData', treeData);
const flattenData = flattenTree(treeData);
console.log('flattenData', flattenData);

onMounted(() => {
	console.log('加载完成');
	// 在组件挂载后更新倒计时
	const interval = setInterval(() => {
		countdown.value = transformToTimeCountDown(
			Math.max(
				0,
				parseInt(countdown.value.split(':')[0]) * 60 + parseInt(countdown.value.split(':')[1]) - 1
			)
		);
	}, 1000);
	// 卸载组件时清除计时器以防止内存泄漏
	return () => {
		clearInterval(interval);
	};
});
</script>
