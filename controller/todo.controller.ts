import todo from '../interface/todo.interface';

const TodoController =  {
    async get (req,res) {
       const todos = await todo.find({});
       if(todos) {
           res.send(todos);
       } else {
           res.status(404).send('No todo found');
       }
    },
    async add (req,res) {
        let todoData = req.body;
        const found = await todo.findOne({name: todoData.name});
        if(found) {
            res.status(400).send('allready exsists');
        } else {
            let newTodo = new todo(todoData);
            await newTodo.save((error, addedTodo) => {
                if(error) {
                    res.send(error.message);
                } else {
                    res.status(200).send(addedTodo);
                }
            })
        }
    }
}
export default TodoController;