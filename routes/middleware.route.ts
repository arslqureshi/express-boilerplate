//function to verify authentication

import todo from '../interface/todo.interface';
export default async function(req, res, next) {
    const data = await todo.find({});
    console.log(data);
    const check = true;
    if(!check) {
        res.status(401).send('Access Denied');
    } else {
        console.log("middleware")
        next();
    }
}