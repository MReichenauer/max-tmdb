import "../../assets/scss/HorizontalListGrp.scss";
import { ListGroup } from "react-bootstrap";
import { ReactNode } from "react";

type HorizontalListGrpProps = {
  children: ReactNode;
};

const HorizontalListGrp: React.FC<HorizontalListGrpProps> = ({ children }) => {
  return (
    <ListGroup horizontal className="horizentalGrpFull">
      {children}
    </ListGroup>
  );
};

export default HorizontalListGrp;
