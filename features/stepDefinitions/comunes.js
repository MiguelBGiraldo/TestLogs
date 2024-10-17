import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import Ajv  from 'ajv';
const ajv = new Ajv();




const responseSchemaLogs = {
    "type": "object",
    "properties": {
      "data": {"type": "array"},
      "error": { "type": "boolean" },
      "code": { "type": "integer" },
    },
    "required": ["error", "code","data"]
  }

  const responseSchemasimple = {
    "type": "object",
    "properties": {
      "error": { "type": "boolean" },
      "message": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "message", "code",]
  }

let response;
let token;
let id;


Given('que soy un usuario', function () {

});

Then('recibo una respuesta con un mensaje de éxito y un código de estado {int}', function (expectedStatusCode) {

    const response = this.getApiResponse();
    const validate = ajv.compile(responseSchemasimple);
    const valid = validate(response.data);
    expect(valid).to.be.true;
    expect(response.status).to.equal(expectedStatusCode);
});

Then('recibo una respuesta con un mensaje de error y un código de estado {int}', function (expectedStatusCode) {

    const response = this.getApiResponse();
    const validate = ajv.compile(responseSchemasimple);
    const valid = validate(response.data);
    expect(valid).to.be.true;
    expect(response.status).to.equal(expectedStatusCode);

});




Then('recibo una respuesta con la lista de logs y un código de estado {int}', function (expectedStatusCode) {

    const response = this.getApiResponse();
    const validate = ajv.compile(responseSchemaLogs);


    const valid = validate(response.data);
    expect(valid).to.be.true;
    expect(response.status).to.equal(expectedStatusCode);
});

