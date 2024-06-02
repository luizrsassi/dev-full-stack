const superagent = require('superagent');

const hostname = 'https://cep.awesomeapi.com.br/json/';
const path = '18608024';


(async () => {
    try {
      const response = await superagent.get(`${hostname}${path}`)
      console.log('cep:', response.body.cep);
      console.log('endereço:', response.body.district);
      console.log('estado:', response.body['state']);
      console.log('distrito:', response.body.district);
      console.log('latitude:', response.body.lat);
      console.log('longitude:', response.body.lng);
      console.log('cidade:', response.body.city);
      console.log('código IBGE:', response.body.city_ibge);
      console.log('ddd:', response.body.ddd);
  } catch (error) {
        console.log(error.response.body);
    }
})();