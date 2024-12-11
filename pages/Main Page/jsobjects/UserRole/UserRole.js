export default {
	async getUserRole () {
		const response = await GetRole.run();
		storeValue("userRole", response.role);
		
		return response.role;
	}
}