import { DataSource } from "typeorm";
import express from 'express'
import cors from 'cors'

const appDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: "yt_node_main",
    entities: ["./src/entity/*.ts"],
    migrations: [
      "./src/migrations/*.ts"
    ],
    logging: true,
    synchronize: true
})

appDataSource.initialize().then(
    db => {
        const app = express();

        app.use(cors({
            origin: ['http://localhost:3000']
        }))

        app.use(express.json());



        app.listen(8001, () => {
            console.log('App is listenning port 8001')
        })
    }
)