import { Html, Head, Body, Container, Text } from "@react-email/components";

const ThankYouEmail = ({ fullName }: { fullName: string }) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>Hello {fullName},</Text>
          <Text>
            Thank you for reaching out! Our team will get back to you soon.
          </Text>
          <Text>Best Regards,</Text>
          <Text>Krityam Team</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ThankYouEmail;
