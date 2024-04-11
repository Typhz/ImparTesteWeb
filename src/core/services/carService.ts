import axios from 'axios';

class CarService {
  private API_URL = 'https://app-patrickreis-api.azurewebsites.net/api/Car';

  async getCars(page: number, limit: number, searchTerm: string) {
    const response = await axios.get(`${this.API_URL}?pageNumber=${page}&pageSize=${limit}&searchTerm=${searchTerm}`);
    return response.data;
  }

  async getCar(id: number) {
    const response = await axios.get(`${this.API_URL}/${id}`);
    return response.data;
  }

  async createCar(carData: any) {
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

  async updateCar(id: number, carData: any) {
    const formData = new FormData();
    formData.append('name', carData.name);
    formData.append('imageFile', carData.imageFile[0]);
    const response = await axios.put(`${this.API_URL}/${id}`, formData);
    return response.data;
  }
}

export default new CarService();
