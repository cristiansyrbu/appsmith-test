export default {
	check() {
		if (!appsmith.store.jwt) {
			navigateTo("Login");
		}
	}
}