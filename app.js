
import axios from "axios";


export default async function getData(user_id) 
{

        const {data : response} = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
        console.log(response);

        const {data : response2} = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id);
        console.log("posts: ",response2);
        

}