import axios from 'axios';
import {ICarService} from './interfaces/ICarService.ts';

class CarService {
  private API_URL = import.meta.env.VITE_API_URL;

  async getCars(page: number, limit: number, searchTerm: string) {
    console.log(import.meta.env.VITE_API_URL)
    const response = await axios.get(`${this.API_URL}?pageNumber=${page}&pageSize=${limit}&searchName=${searchTerm}`);
    return response.data;
  }

  async getCar(id: number) {
    const response = await axios.get(`${this.API_URL}/${id}`);
    return response.data;
  }

  async createCar(carData: ICarService) {
    const formData = new FormData();
    formData.append('name', carData.name);
    formData.append('imageFile', carData.imageFile[0]);
    const response = await axios.post(this.API_URL, formData);
    return response.data;
  }

  async deleteCar(id: number) {
    const response = await axios.delete(`${this.API_URL}/${id}`);
    return response.data;
  }

  async updateCar(id: number, carData: ICarService) {
    const formData = new FormData();
    formData.append('name', carData.name);
    formData.append('imageFile', carData.imageFile[0]);
    const response = await axios.put(`${this.API_URL}/${id}`, formData);
    return response.data;
  }
}

export default new CarService();
