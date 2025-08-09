import axios from "axios";

export default function useAxios() {
    // console.log(process.env.NEXT_PUBLIC_BASE_URL)
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return {
            ...config,
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            // withCredentials: true,
            withCredentials: true, 
            withXSRFToken: true
        };
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
        { synchronous: true, runWhen: () => { } }
    );

    // Add a response interceptor
    axios.interceptors.response.use(function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    return axios;
}
