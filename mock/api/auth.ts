import { userModel } from '../model';
import type { CustomMockMethod } from 'vite-plugin-hybrid-mock';

/** 参数错误的状态码 */
const ERROR_PARAM_CODE = 10000;

const ERROR_PARAM_MSG = '参数校验失败！';

const apis: CustomMockMethod[] = [
	// 用户+密码 登录
	{
		url: '/mock/login',
		method: 'post',
		response: (options: Service.MockOption): Service.MockServiceResult<ApiAuth.Token | null> => {
			if (Object.prototype.toString.call(options.body) !== '[object Object]') {
				options.body = JSON.parse(options.body as string);
			}
			const { userName = undefined, password = undefined } = options.body as Record<string, any>;

			if (!userName || !password) {
				return {
					code: ERROR_PARAM_CODE,
					message: ERROR_PARAM_MSG,
					data: null
				};
			}

			const findItem = userModel.find(
				(item) => item.userName === userName && item.password === password
			);

			if (findItem) {
				return {
					code: 200,
					message: 'ok',
					data: {
						token: findItem.token,
						refreshToken: findItem.refreshToken
					}
				};
			}
			return {
				code: 1000,
				message: '用户名或密码错误！',
				data: null
			};
		}
	},
	// 获取用户信息(请求头携带token, 根据token获取用户信息)
	{
		url: '/mock/getUserInfo',
		method: 'get',
		response: (options: Service.MockOption): Service.MockServiceResult<ApiAuth.UserInfo | null> => {
			if (Object.prototype.toString.call(options.body) !== '[object Object]') {
				options.body = JSON.parse(options.body as string);
			}
			// 这里的mock插件得到的字段是authorization, 前端传递的是Authorization字段
			const { Accesstoken = '' } = options.headers as Record<string, any>;
			const REFRESH_TOKEN_CODE = 401;

			if (!Accesstoken) {
				return {
					code: REFRESH_TOKEN_CODE,
					message: '用户已失效或不存在！',
					data: null
				};
			}
			const userInfo: ApiAuth.UserInfo = {
				userId: '',
				userName: ''
			};
			const isInUser = userModel.some((item) => {
				const flag = item.token === Accesstoken;
				if (flag) {
					const { userId: itemUserId, userName } = item;
					Object.assign(userInfo, { userId: itemUserId, userName });
				}
				return flag;
			});

			if (isInUser) {
				return {
					code: 200,
					message: 'ok',
					data: userInfo
				};
			}

			return {
				code: REFRESH_TOKEN_CODE,
				message: '用户信息异常！',
				data: null
			};
		}
	},
	{
		url: '/mock/updateToken',
		method: 'post',
		response: (options: Service.MockOption): Service.MockServiceResult<ApiAuth.Token | null> => {
			if (Object.prototype.toString.call(options.body) !== '[object Object]') {
				options.body = JSON.parse(options.body as string);
			}

			const { refreshToken = '' } = options.body as Record<string, any>;

			const findItem = userModel.find((item) => item.refreshToken === refreshToken);

			if (findItem) {
				return {
					code: 200,
					message: 'ok',
					data: {
						token: findItem.token,
						refreshToken: findItem.refreshToken
					}
				};
			}
			return {
				code: 3000,
				message: '用户已失效或不存在！',
				data: null
			};
		}
	}
];

export default apis;
