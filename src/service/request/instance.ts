import axios from 'axios';
import type { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { REFRESH_TOKEN_CODE } from './config';
import {
	handleAxiosError,
	handleBackendError,
	handleResponseError,
	handleServiceResult
} from './handles';
import { localStg } from '@/utils';
import { handleRefreshToken } from './helpers';
import uniAdapter from 'uni-axios-adapter-all';

/**
 * 封装axios请求类
 */
export default class CustomAxiosInstance {
	/**
	 * @param axiosConfig - axios配置
	 * @param backendConfig - 后端返回的数据配置
	 */

	instance: AxiosInstance;

	backendConfig: Service.BackendResultConfig;

	constructor(
		axiosConfig: AxiosRequestConfig,
		backendConfig: Service.BackendResultConfig = {
			codeKey: 'code',
			dataKey: 'data',
			msgKey: 'message',
			successCode: 200
		}
	) {
		this.backendConfig = backendConfig;
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				this.instance = axios.create({
					...axiosConfig,
					adapter: uniAdapter // 使用自定义适配器
				});
				console.log('运行Android上');
				break;
			case 'ios':
				this.instance = axios.create({
					...axiosConfig,
					adapter: uniAdapter // 使用自定义适配器
				});
				console.log('运行iOS上');
				break;
			case 'windows':
				// this.instance = axios.create(axiosConfig);
				this.instance = axios.create({
					...axiosConfig,
					adapter: uniAdapter // 使用自定义适配器
				});
				console.log('运行Windows上');
				break;
			case 'linux':
				this.instance = axios.create(axiosConfig);
				console.log('运行Linux上');
				break;
			case 'mac':
				this.instance = axios.create(axiosConfig);
				console.log('运行Mac上');
				break;
			default:
				this.instance = axios.create({
					...axiosConfig,
					adapter: uniAdapter // 使用自定义适配器
				});
				console.log('运行在开发者工具上');
				break;
		}
		this.setInterceptor();
	}

	setInterceptor() {
		/** 设置请求拦截器 */
		this.instance.interceptors.request.use(
			async (config) => {
				const handleConfig = { ...config };
				if (handleConfig.headers) {
					// 设置token
					handleConfig.headers.Accesstoken = localStg.get('token') || '';
				}
				return handleConfig;
			},
			async (axiosError: AxiosError) => {
				console.log(axiosError);
				const error = await handleAxiosError(axiosError);
				return await handleServiceResult(error, null);
			}
		);
		/** 设置响应拦截器 */
		this.instance.interceptors.response.use(
			(async (response) => {
				const { status } = response;
				if (status === 200 || status < 300 || status === 304) {
					const backend = response.data;
					const { codeKey, dataKey, successCode } = this.backendConfig;
					// 请求成功
					if (backend[codeKey] === successCode) {
						return handleServiceResult(null, backend[dataKey]);
					}

					// token失效, 刷新token
					if (REFRESH_TOKEN_CODE.includes(backend[codeKey])) {
						const config = await handleRefreshToken(response.config);
						if (config) {
							return this.instance.request(config);
						}
					}

					const error = handleBackendError(backend, this.backendConfig);
					return handleServiceResult(error, null);
				}
				const error = await handleResponseError(response);
				return handleServiceResult(error, null);
			}) as (response: AxiosResponse<any, any>) => Promise<AxiosResponse<any, any>>,
			async (axiosError: AxiosError) => {
				console.log(axiosError);
				const error = await handleAxiosError(axiosError);
				return handleServiceResult(error, null);
			}
		);
	}
}
