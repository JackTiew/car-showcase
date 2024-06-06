import axios from "axios";

export default class HttpRequest {

    async get(url: string, params?: any) {

        let headers: any = {
            'X-RapidAPI-Key': '4ac9182c50msh69fa1ca2ef39b1cp1d5de3jsn56f9b2916cfc',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        return axios.get(url, {
            headers: headers,
            params
        });
    }
}
