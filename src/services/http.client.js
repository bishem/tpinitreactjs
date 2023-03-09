/**
 * Amin MOHAMED
 * Version 1.0
 */
import axios from 'axios';

/**
 * HTTP client
 * @type {AxiosInstance}
 */
const HTTP = axios.create({
  baseURL: 'http://localhost:3001',
});

HTTP.interceptors.request.use(sendJson);

HTTP.interceptors.response.use(unwrapResult);

export default HTTP;

/**
 * Add  Content-Type and Accepts headers to the request
 * @param   {Request}
 * @returns {Request}
 */
function sendJson(request) {
  request.headers = {
    ...request.headers,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return request;
}

/**
 * in seems that django is sending the response in a response key
 * @param   {Response}
 * @returns {Response.data}
 */
function unwrapResult(response) {
  return response.data;
}
