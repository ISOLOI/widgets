import Card from 'react-bootstrap/Card'
import './FeatureCard.css'

const FeatureCard = (props) => {
    return (
        <Card style={{width:"10rem"}} className="border-0">
                <Card.Title className="text-center small text-info">{props.cardtitle}</Card.Title>
                <Card.Img style={{width:"50%"}} className="border-0" src={props.cardimage}></Card.Img>
            <Card.Body>
                <Card.Text >{props.cardtext}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FeatureCard

/*

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/