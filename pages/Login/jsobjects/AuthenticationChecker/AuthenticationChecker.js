export default {
	check() {
		if (appsmith.store.jwt) {
			navigateTo("Main Page");
		}
	}
}