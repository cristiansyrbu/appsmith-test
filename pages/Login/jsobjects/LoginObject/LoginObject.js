export default {
	async login() {
		const response = await LoginApi.run();
		
		console.log(response);
		
		if (response.accessToken) {
			storeValue("jwt", response.accessToken);
			navigateTo("Main Page");
		} else {
			showAlert("Login failed");
		}
	}
}