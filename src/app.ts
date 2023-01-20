import { DataSource } from "typeorm";



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