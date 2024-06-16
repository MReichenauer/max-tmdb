import { Card } from "react-bootstrap";
import "../assets/scss/ActorOrCrewCard.scss";

type ActorOrCrewCardProps = {
  image_url: string;
  alt: string;
  original_name: string;
  role: string;
  gender: number;
  label: string;
};

const ActorOrCrewCard: React.FC<ActorOrCrewCardProps> = ({
  image_url,
  original_name,
  role,
  gender,
  label,
  alt,
}) => {
  return (
    <Card className="actorOrCrewCard text-center">
      <Card.Img
        variant="top"
        src={image_url}
        alt={alt}
        className="actorOrCrewCardImg"
      />
      <Card.Body className="actorOrCrewCardBody">
        <Card.Title className="actorOrCrewCardTitle">
          {original_name}
        </Card.Title>
        <Card.Text>
          <strong>{label}</strong>
          <em>{role}</em>
        </Card.Text>
        <Card.Text>{gender === 1 ? <em>Kvinna</em> : <em>Man</em>} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ActorOrCrewCard;
