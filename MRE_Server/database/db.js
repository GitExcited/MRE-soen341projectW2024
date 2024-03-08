import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const db = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
      options: `project=${ENDPOINT_ID}`,
    },
  });
  
  
(async () => {
    const result = await db`select version()`;
    console.log(result);
  })();



export default db;