import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return(
    <div style={{background: "black", color: "white", paddingBottom: "5%"}}>
        <Container fluid>
            <Row style={{padding:"0.5%"}}>
                <Col style={{fontWeight: "bold", textAlign: "center"}}>
                <i class="far fa-flag" style={{fontSize: "150%"}}></i>  List your Show
                </Col>
                <Col style={{width: "500%"}}>Got a show, event or activity? Partner with us & get listed now!!</Col>
                <Col style={{textAlign: "center"}}>
                    <Button variant="danger" size="sm">Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign: "center", background:"grey", padding:"0.15% 10%", margin: "0"}}>
                <Col>
                    <div style={{fontSize: "500%"}}><i class="fas fa-hands-helping"></i></div>
                    <div style={{fontSize: "70%"}}>24/7 CUSTOMER CARE</div>
                </Col>
                <Col>
                    <div style={{fontSize: "500%"}}><i class="fas fa-ticket-alt"></i></div>
                    <div style={{fontSize: "70%"}}>RESEND BOOKING CONFIRMATION</div>
                </Col>
                <Col>
                    <div style={{fontSize: "500%"}}><i class="fas fa-envelope-open-text"></i></div>
                    <div style={{fontSize: "70%"}}>SUSBSCRIBE TO OUR NEWSLETTER</div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
