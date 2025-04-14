import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
	service: process.env.EMAIL_SERVICE || "Gmail",
	auth: {
	  user: process.env.EMAIL_USER,
	  pass: process.env.EMAIL_PASSWORD
	}
});
  
// More flexible sender configuration
 export const sender = {
	email: process.env.EMAIL_FROM_ADDRESS, 
	name: process.env.EMAIL_FROM_NAME
};
