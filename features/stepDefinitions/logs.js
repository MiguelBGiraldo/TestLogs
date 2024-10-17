import { When } from '@cucumber/cucumber';
import axios from 'axios';

import { fa, faker } from '@faker-js/faker';
import Ajv from 'ajv';
import 'dotenv/config';


let api = process.env.RUTA_API;
let response;

When('envío una solicitud para guardar un log válido', async function () {



    const apiUrl = api + "logs/save";
    let res;

    const logData = {
        application: "app", // Genera un nombre de aplicación ficticio
        level: faker.helpers.arrayElement(['low', 'medium', 'high']), // Elige un nivel al azar
        className: faker.hacker.noun(), // Genera un nombre ficticio para la clase
        summary: faker.hacker.phrase(), // Genera una frase que suene como un resumen técnico
        description: `Se produjo un error interno, el cual dice: ${faker.lorem.sentence()}` // Genera una oración aleatoria para la descripción
    };

    try {
        res = await axios.post(apiUrl,
            logData
        );

    } catch (err) {
        res = err.response;
    }
    
    this.setApiResponse(res);

});


When('envío una solicitud para guardar un log sin los datos necesarios', async function () {

    const apiUrl = api + "logs/save";
    let res;

    const logData = {
        application: "app", // Genera un nombre de aplicación ficticio
        // level: faker.helpers.arrayElement(['low', 'medium', 'high']), // Elige un nivel al azar
        className: faker.hacker.noun(), // Genera un nombre ficticio para la clase
        summary: faker.hacker.phrase(), // Genera una frase que suene como un resumen técnico
        // description: `Se produjo un error interno, el cual dice: ${faker.lorem.sentence()}` // Genera una oración aleatoria para la descripción
    };

    try {
        res = await axios.post(apiUrl,
            logData
        );
    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});

When('envío una solicitud para obtener todos los logs', async function () {

    const apiUrl = api + "logs/getLogs";
    let res;

    try {
        res = await axios.get(apiUrl
        );

    } catch (err) {
        res = err.response;
    }
    this.setApiResponse(res);
});


When('envío una solicitud para obtener logs dentro de un rango de fechas válido', async function () {

    const apiUrl = api + "logs/getByDate";
    let res;

    const queryParams = {
        startDate: "2024-10-15",
        endDate: "2024-10-22"
    };

    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});


When('envío una solicitud para obtener logs con un rango de fechas inválido', async function () {

    const apiUrl = api + "logs/getByDate";
    let res;

    const queryParams = {
        startDate: "2024-10-30",
        endDate: "2024-10-22"
    };

    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});


When('envío una solicitud para obtener logs con el nivel "high"', async function () {

    const apiUrl = api + "logs/getByType";
    let res;

    const queryParams = {
        level: "high",
    };

    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});


When('envío una solicitud para obtener logs sin especificar un nivel', async function () {

    const apiUrl = api + "logs/getByType";
    let res;

    const queryParams = {
        level: "",
    };
    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }
    console.log(res.data);

    this.setApiResponse(res);
});


When('envío una solicitud para obtener logs de la aplicación "logs"', async function () {

    const apiUrl = api + "logs/getByApp";
    let res;

    const queryParams = {
        application: "logs",
    };

    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});

When('envío una solicitud para obtener logs sin especificar una aplicación', async function () {

    const apiUrl = api + "logs/getByApp";
    let res;

    const queryParams = {
        application: "",
    };

    try {
        res = await axios.get(apiUrl, {
            params: queryParams
        }
        );

    } catch (err) {
        res = err.response;
    }

    this.setApiResponse(res);
});