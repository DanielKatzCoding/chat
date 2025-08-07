import MainContent from "../../components/MainContent";
import { Container } from "@mui/material"

export default function Home() {
  return (
    <Container 
    sx={{ height:'100vh', width:'100vw', padding: '1rem' }}
    disableGutters={true}
    maxWidth={false}
    >
      <MainContent />          
    </Container>
  );
}
