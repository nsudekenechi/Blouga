import axios from "axios"
const url = "http://localhost:5000/api/"
export const GET = async (path, config) => axios.get(url + path, config)
export const POST = async (path, data, config) => axios.post(url + path, data, config)
export const UPDATE = async (path, data, config) => axios.patch(url + path, data, config)
export const DELETE = async (path, config) => axios.delete(url + path, config)
