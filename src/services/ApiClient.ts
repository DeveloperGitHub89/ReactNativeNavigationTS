import axios, { AxiosInstance } from "axios";
//fdcf4bba00441d5987f148c2ead0e12 api key
const apiClient:AxiosInstance=axios.create({
    baseURL:'https://newsapi.org/v2/',
    responseType: 'json',
});
export default apiClient;