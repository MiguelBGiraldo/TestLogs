import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
  constructor() {

    this.apiResponse = null;

  }

  // Métodos opcionales para ayudar en el manejo de datos
  setApiResponse(response) {
    this.apiResponse = response;
  }

  getApiResponse() {
    return this.apiResponse;
  }

}

setWorldConstructor(CustomWorld);