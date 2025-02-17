import { Html, Head, Body, Container, Text } from "@react-email/components";

const EnquiryNotificationEmail = ({
  fullName,
  email,
  country,
  mobileNumber,
  message,
}: {
  fullName: string;
  email: string;
  country: string;
  mobileNumber: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>
            <strong>New Enquiry Received:</strong>
          </Text>
          <Text>Name: {fullName}</Text>
          <Text>Email: {email}</Text>
          <Text>Country: {country}</Text>
          <Text>Mobile: {mobileNumber}</Text>
          <Text>Message: {message}</Text>
          <Text>Best Regards,</Text>
          <Text>Krityam Team</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EnquiryNotificationEmail;
