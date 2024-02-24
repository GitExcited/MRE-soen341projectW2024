import express from "express";
import bodyParser from "body-parser";
import { Client } from 'pg'

//Create server app
const app = express();
const port = 3000;

//DB shenanigans
// type Config = {
//     user?: string, // default process.env.PGUSER || process.env.USER
//     password?: string or function, //default process.env.PGPASSWORD
//     host?: string, // default process.env.PGHOST
//     database?: string, // default process.env.PGDATABASE || user
//     port?: number, // default process.env.PGPORT
//     connectionString?: string, // e.g. postgres://user:password@host:5432/database
//     ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
//     types?: any, // custom type parsers
//     statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
//     query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
//     application_name?: string, // The name of the application that created this Client instance
//     connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
//     idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
//   }

const client = new Client({
  //pass config args here using the comment above as reference
})
await client.connect()

//Mount middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
  });