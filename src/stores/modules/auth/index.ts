import { defineStore } from 'pinia';
import { fetchLogin, fetchUserInfo } from '@/service';
import { localStg } from '@/utils';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';

interface AuthState {
	/** 用户信息 */
	userInfo: ApiAuth.UserInfo;
	/** 用户token */
	token: string;
	/** 登录的加载状态 */
	loginLoading: boolean;
}

export const useAuthStore = defineStore('auth-store', {
	state: (): AuthState => ({
		userInfo: getUserInfo(),
		token: getToken(),
		loginLoading: false
	}),
	getters: {
		/** 是否登录 */
		isLogin(state) {
			return Boolean(state.token);
		}
	},
	actions: {
		/** 重置auth状态 */
		resetAuthStore() {
			clearAuthStorage();
			this.$reset();
		},
		/**
		 * 处理登录后成功或失败的逻辑
		 * @param backendToken - 返回的token
		 */
		async handleActionAfterLogin(backendToken: ApiAuth.Token) {
			const loginSuccess = await this.loginByToken(backendToken);

			if (loginSuccess) {
				console.log('登陆成功', loginSuccess);

				return;
			}

			// 不成功则重置状态
			this.resetAuthStore();
		},
		/**
		 * 根据token进行登录
		 * @param backendToken - 返回的token
		 */
		async loginByToken(backendToken: ApiAuth.Token) {
			let successFlag = false;

			// 先把token存储到缓存中(后面接口的请求头需要token)
			const { token, refreshToken } = backendToken;
			localStg.set('token', token);
			localStg.set('refreshToken', refreshToken);

			// 获取用户信息
			const { data } = await fetchUserInfo();
			if (data) {
				// 成功后把用户信息存储到缓存中
				localStg.set('userInfo', data);

				// 更新状态
				this.userInfo = data;
				this.token = token;

				successFlag = true;
			}

			return successFlag;
		},
		/**
		 * 登录
		 * @param userName - 用户名
		 * @param password - 密码
		 */
		async login(userName: string, password: string) {
			this.loginLoading = true;
			const { data } = await fetchLogin(userName, password);
			if (data) {
				await this.handleActionAfterLogin(data);
			}
			this.loginLoading = false;
		}
	}
});
