import "../../assets/scss/DetailCard.scss";
import { Card } from "react-bootstrap";

type DetailCardProps = {
  id: number;
  image_url: string;
  alt: string;
  rate: number;
  language: string;
  genres: React.ReactNode;
  overview: string;
  release_date: string;
  runtime: number;
};

const DetailCard: React.FC<DetailCardProps> = ({
  id,
  image_url,
  rate,
  language,
  genres,
  overview,
  release_date,
  runtime,
  alt,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <Card key={id} className="detailCardFull">
        <Card.Img
          variant="top"
          className="detailCardImg"
          src={image_url}
          alt={alt}
        />
        <Card.Body className="detailCardBody mt-0 pt-2">
          <Card.Text className="mb-0">
            <strong>Genres:</strong> {genres}
          </Card.Text>
          <Card.Text className="mb-2">
            <em>
              <strong>Beskrivning:</strong> {overview}
            </em>
          </Card.Text>
          <Card.Text className="mb-2">
            <strong>Betyg:</strong> {rate.toFixed(1)}/10 ⭐
          </Card.Text>
          <Card.Text className="mb-1">
            <strong>Original språk:</strong> {language.toLocaleUpperCase()}
          </Card.Text>
          <Card.Text className="mb-1">
            <strong>Spel tid:</strong> {runtime} minuter
          </Card.Text>
          <Card.Text>
            <strong>Premiär:</strong> {release_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailCard;
