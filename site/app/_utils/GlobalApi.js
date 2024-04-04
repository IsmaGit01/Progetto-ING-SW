const { default: axios } = require("axios"); //Using Axios as HTTP Client for node.js 

//created axio client to create endpoint
const axiosClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createUser=(data)=>axiosClient.post('/user', data)

const getUserByEmail=(email)=>axiosClient.get('/user/'+email)

const createPost=(data)=>axiosClient.post('/post',data);

const getAllPost=()=>axiosClient.get('/post');

export default{
    createUser,
    getUserByEmail,
    createPost,
    getAllPost
}

