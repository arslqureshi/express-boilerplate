import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from '../routes/main.route';
const mongoose = require('mongoose');

class App {
    public app : any;
    public PORT: any;
    public db: any;
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;
        this.initMiddleware();
        this.connectToMongoDB();
        this.initRoutes();
    }
    private initMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
        dotenv.config();
    }
    private connectToMongoDB(){
        const db = process.env.MONGO_CONNECTION;
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },(err, db) => {
            if(err){
                console.log('err', err);
            } else {
                console.log('db connected');
            }
        })
    }
    private initRoutes() {
        this.app.use('/', router);
    }
    public createServer() {
        this.app.listen(this.PORT, () => {
            console.log("Server started at port 3000");
        })
    }
}

export default App;