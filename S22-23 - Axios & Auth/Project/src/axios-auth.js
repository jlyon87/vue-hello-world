import axios from "axios";

const instance = axios.create({
	baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
	headers: {
		someCustom: "I'm custom"
	}
});

export default instance;