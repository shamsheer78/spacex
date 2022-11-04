import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function LaunchCard({ homeData }) {
  const setData = () => {
    localStorage.setItem('itm', JSON.stringify(homeData));
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{marginTop: '10px'}} src={ homeData?.links?.mission_patch_small } />
      <Card.Body>
        <Card.Title>{ homeData?.mission_name }</Card.Title>
        <Card.Text>
          <b>Date:</b> { homeData?.launch_date_local } <br />
          <b>Flight Number:</b> { homeData?.flight_number }
        </Card.Text>
        <Link variant="primary" onClick={() => setData()} to="/details" >Details</Link>
      </Card.Body>
    </Card>
  );
}
