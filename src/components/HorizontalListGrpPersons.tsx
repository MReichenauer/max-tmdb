import "../assets/scss/HorizontalListGrpPersons.scss";
import { ListGroup } from "react-bootstrap";
import { ReactNode } from "react";

type HorizontalListGrpPersonsProps = {
  children: ReactNode;
};

const HorizontalListGrpPersons: React.FC<HorizontalListGrpPersonsProps> = ({
  children,
}) => {
  return (
    <ListGroup horizontal className="horizentalGrpPersonsFull">
      {children}
    </ListGroup>
  );
};

export default HorizontalListGrpPersons;
