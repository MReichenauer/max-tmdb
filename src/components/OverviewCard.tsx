import { Link } from "react-router-dom";
import "../assets/scss/OverviewCard.scss";
import { Card } from "react-bootstrap";

type OverviewCardProps = {
  id: number;
  title: string;
  image_url: string;
  rate: number;
  language: string;
};

const OverviewCard: React.FC<OverviewCardProps> = ({
  id,
  title,
  image_url,
  rate,
  language,
}) => {
  return (
    <div className="me-2">
      <Card key={id} className="overviewCardFull">
        <div className="d-flex justify-content-center">
          <Link to={`/movie/${id}`}>
            <div className="movieImage">
              <Card.Img
                variant="top"
                src={image_url}
                alt={`Image of ${title}`}
              />
            </div>
          </Link>
        </div>
        <Card.Body className="overviewCardBody mt-0 pt-2">
          <Link to={`/movie/${id}`} className="overviewCardTitle">
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text className="mb-1">Betyg: {rate.toFixed(1)}/10⭐</Card.Text>
          <Card.Text>Original språk: {language.toLocaleUpperCase()}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OverviewCard;
