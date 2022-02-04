import axiosClient from "../instanceAxios";

export function getRequest(url) {
    return axiosClient.get(url);
}

export function postRequest(url, payload) {
    return axiosClient.post(url, payload);
}

export function putRequest(url, payload) {
    return axiosClient.put(url, payload);
}

export function deleteRequest(url) {
    return axiosClient.delete(url);
}
