import axios from "axios";

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token;
    // config.headers["Content-Type"]="application/x-www-form-urlencoded"

    return config;
});

export const dev_url = "http://localhost:8080/";
export const loginService = async (body) => {
    console.log("body", body)

    try {
        const response = await axios.post(dev_url + "api/auth/signin",body);

        // axios.post(dev_url + "api/auth/signin", body,)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
                return response.data
    } catch (error) {
        console.log("error", error)
    }

}


export const getJobs = async () => {
    try {
        const response = await axios.get(dev_url + "api/jobs");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("error", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}

export const createJobs = async (data) => {
    try {
        const response = await axios.post(dev_url + "api/jobs", data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("error", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}