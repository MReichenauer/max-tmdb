import "../../assets/scss/HorizontalListGrpPersons.scss";
import { ListGroup } from "react-bootstrap";
import { ReactNode } from "react";

type HorizontalListGrpPersonsProps = {
  children: ReactNode;
  description: string;
};

const HorizontalListGrpPersons: React.FC<HorizontalListGrpPersonsProps> = ({
  children,
  description,
}) => {
  return (
    <>
      <h2 className="h5 mt-5 pb-0">{description}</h2>
      <ListGroup horizontal className="horizentalGrpPersonsFull">
        {children}
      </ListGroup>
    </>
  );
};

export default HorizontalListGrpPersons;
