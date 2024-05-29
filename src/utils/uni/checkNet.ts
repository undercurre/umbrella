export async function checkOnline(): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {
		uni.getNetworkType({
			success: function (res) {
				if (res) {
					resolve(res.networkType != 'none');
				}
			},
			fail: function (err) {
				reject(false);
			}
		});
	});
}
