import "../../assets/scss/ActorOrCrewCard.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

type ActorOrCrewCardProps = {
  image_url: string;
  alt: string;
  original_name: string;
  role: string;
  gender: number;
  label: string;
  path: string;
};

const ActorOrCrewCard: React.FC<ActorOrCrewCardProps> = ({
  image_url,
  original_name,
  role,
  gender,
  label,
  alt,
  path,
}) => {
  return (
    <Link to={path} className="linkStyleNone">
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
          <Card.Text>
            {gender === 1 ? <em>Kvinna</em> : <em>Man</em>}{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ActorOrCrewCard;
