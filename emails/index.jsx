import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmailTemplate = ({
  UserName,
  Email,
  Time,
  Date,
  doctor,
  Note
}) => {

  function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let uniqueId = '';

    for (let i = 0; i < length; i++) {
      uniqueId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return uniqueId;
  }

  const confirmationCode = generateUniqueId();

  return (
    <Html>
      <Head />
      <Preview>
        Your doctor appointment is confirmed!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="logo.svg"
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {UserName},</Text>
          <Text style={paragraph}>
            Your appointment is now confirmed. Head over to your booking section for the full scoop. We're eagerly anticipating your visit, ready to provide top-notch care tailored just for you. See you soon!
            <br />
            <span style={confirmationCodeStyle}>Confirmation Code: {confirmationCode}</span>
            <br />
            Present this code at the hospital to confirm your appointment.
          </Text>
          <Text style={paragraph}>
            Best,
            <br />
            ClinicClick App 
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Developed by Aman Singh
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "26px",
};

const confirmationCodeStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#5F51E8",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
