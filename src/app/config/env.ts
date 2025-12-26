import dotenv from "dotenv";

dotenv.config();

export const envItem = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET || 'secret_key_change_me'
}