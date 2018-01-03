import axios from "axios";

const instance = axios.create({
	baseURL: "https://vue-axios-c0384.firebaseio.com",
	headers: {
		Authorization: "You're Good",
		Accept: "application/json",
		someCustom: "I'm custom"
	}
});

export default instance;