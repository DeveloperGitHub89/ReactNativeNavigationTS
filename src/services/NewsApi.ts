import apiClient from "./ApiClient";

export async function getTopHeadlines(pageNo: number){
   return await (await apiClient.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9fdcf4bba00441d5987f148c2ead0e12&pageSize=2&page=${pageNo}`)).data;
}