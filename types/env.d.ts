/**
 *后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'prod';

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
	/** 请求地址 */
	url: string;
}

interface ImportMetaEnv {
	/** 项目基本地址 */
	readonly VITE_BASE_URL: string;
	/** 项目名称 */
	readonly VITE_APP_NAME: string;
	/** 项目标题 */
	readonly VITE_APP_TITLE: string;
	/** 项目描述 */
	readonly VITE_APP_DESC: string;
	/** 后端服务的环境类型 */
	readonly VITE_SERVICE_ENV?: ServiceEnvType;
	/** 是否开启打包文件大小结果分析 */
	readonly VITE_VISUALIZER?: 'Y' | 'N';
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
