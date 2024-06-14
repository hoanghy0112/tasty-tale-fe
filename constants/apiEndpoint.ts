const API = {
	baseUrl: `http://${Constants.expoConfig.hostUri
		.split(`:`)
		.shift()
		.concat(`:3001`)}/graphql`,
};

export default API;
