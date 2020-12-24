"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users/";
const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts?userId=";

 async function getData(id){
    //Check if id is integer or not
    if(!Number.isInteger(id)) throw new Error("getData function waits a Number Type Input");

    // Get data from users
    const { data:userData } = await _axios2.default.get(USER_ENDPOINT+id.toString());
    const { data:postData } = await _axios2.default.get(POSTS_ENDPOINT+id.toString());

    return { ...userData, posts : postData};




    //Test case 
    /*
    return new Promise( async (resolve,reject) => {
        await setTimeout( () => {
            console.log("Copleted ...... ");
            resolve("Hello");
        }, 3000);
        
    });*/

} exports.default = getData;