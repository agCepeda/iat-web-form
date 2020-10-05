import axios from "axios";

const BASE_URL = `${window.APP_URL}/api/`;

const prepareHeaders = (getState) => {
	let { userState: { authToken } } = getState();
	let headers = {};
	if (authToken) {
		headers.Authorization = `Bearer ${authToken}`
	}
	return headers;
}

const mapResponse = (response) => {
	if (response.status != 200) {
		throw response.data;
	}
	return response.data;
}

export const get = (url, params) => (dispatch, getState) => {
	return axios.get(`${BASE_URL}${url}`, { params, headers: prepareHeaders(getState) }).then(mapResponse);
}

export const post = (url, data) => (dispatch, getState) =>  {
	return axios.post(`${BASE_URL}${url}`, data, { headers: prepareHeaders(getState) }).then(mapResponse);
}

export const del = (url) => (dispatch, getState) =>  {
	return axios.delete(`${BASE_URL}${url}`, { headers: prepareHeaders(getState) }).then(mapResponse);
}

export const put = (url, data) => (dispatch, getState) => {
	return axios.put(`${BASE_URL}${url}`, data, { headers: prepareHeaders(getState) }).then(mapResponse);
}

export const patch = (url, data) => (dispatch, getState) =>  {
	return axios.patch(`${BASE_URL}${url}`, data, { headers: prepareHeaders(getState) }).then(mapResponse);
}