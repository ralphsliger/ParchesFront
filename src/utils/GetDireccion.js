import axios from 'axios'

const getDatos = (lat, lon) => {
  const options = {
    method: 'GET',
    url: 'https://api.geoapify.com/v1/geocode/reverse',
    params: {
      lat: lat,
      lon: lon,
      format: 'json',
      apiKey: '1b48259b810e48ddb151889f9ea58db0'
    },
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    console.log(response.data.results[0].formatted)
  }).catch(function (error) {
    console.error(error)
  })
}

export default getDatos
