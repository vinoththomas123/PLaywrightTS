import dotenv from 'dotenv';
//Should call .env data before the test blocks
dotenv.config();


console.log(process.env.BASE_URL);
