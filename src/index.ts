//---------- REQUIRED EXTERNAL MODULES
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

// loads the environment variables from an .env file into the process.env object
import * as dotenv from "dotenv";
dotenv.config();

//---------- APP VARIABLES
if(!process.env.PORT){
  process.exit();
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();

//---------- APP CONFIGURATION
app.use(helmet());
app.use(cors());
app.use(express.json());

//---------- APP ROUTES
app.get("/", (req: Request, res: Response) => {
  res.send('<h1>Express and TypeScript Server</h1>')
})

//---------- SERVER INITIALIZATION
app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
})