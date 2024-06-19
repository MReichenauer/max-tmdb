import "../../assets/scss/DetailCardPerson.scss";
import { Card } from "react-bootstrap";

type DetailCardPersonProps = {
  id: number;
  image_url: string;
  alt: string;
  gender: number;
  birthday: string;
  place_of_birth: string;
  known_for_department: string;
};

const DetailCardPerson: React.FC<DetailCardPersonProps> = ({
  id,
  image_url,
  alt,
  gender,
  birthday,
  place_of_birth,
  known_for_department,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <Card key={id} className="detailCardPersonFull">
        <Card.Img
          variant="top"
          className="detailCardPersonImg"
          src={image_url}
          alt={alt}
        />
        <Card.Body className="detailCardPersonBody pt-2 mb-1">
          <Card.Text className="mb-1">
            <strong> Kön: </strong>
            {gender === 1 ? <em>Kvinna</em> : <em>Man</em>}
          </Card.Text>
          <Card.Text className="mb-1">
            <em>
              <strong>Född:</strong> {birthday}
            </em>
          </Card.Text>
          <Card.Text className="mb-1">
            <strong>Från:</strong> {place_of_birth}
          </Card.Text>
          <Card.Text className="mb-1">
            <strong>Känd för:</strong> {known_for_department}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailCardPerson;
