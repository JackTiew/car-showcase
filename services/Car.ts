import ServiceBase from "./ServiceBase";

import { CarProps, FilterProps } from "../types";

class Car extends ServiceBase {
    getCars = async(filters: FilterProps) => {
        try {
            let res = await this.request.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`, filters);

            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    generateCarImageUrl = (car: CarProps, angle?: string) => {
        const { make, year, model } = car;

        const url = new URL(`https://cdn.imagin.studio/getimage`);

        url.searchParams.append('customer','hrjavascript-mastery');
        url.searchParams.append('make',make);
        url.searchParams.append('modelFamily',model.split(' ')[0]);
        url.searchParams.append('zoomType','fullscreen');
        url.searchParams.append('modelYear',`${year}`);
        url.searchParams.append('angle',`${angle}`);
        
        return `${url}`;
    }
}

export default Car;