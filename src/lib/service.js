import axios from 'axios';

const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users/";
const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts?userId=";

export default async function getData(id){
    //Check if id is integer or not
    if(!Number.isInteger(id)) throw new Error("getData function waits a Number Type Input");

    // Get data from users
    const { data:userData } = await axios.get(USER_ENDPOINT+id.toString());
    const { data:postData } = await axios.get(POSTS_ENDPOINT+id.toString());

    return { ...userData, posts : postData};




    //Test case 
    /*
    return new Promise( async (resolve,reject) => {
        await setTimeout( () => {
            console.log("Copleted ...... ");
            resolve("Hello");
        }, 3000);
        
    });*/

}