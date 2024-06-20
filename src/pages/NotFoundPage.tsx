import "../assets/scss/NotFoundPage.scss";
import Image from "react-bootstrap/Image";
import soLost from "../assets/img/soLost.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="background d-flex justify-content-center align-content-center">
      <div className="contentContainer">
        <div className="contentBackground">
          <h1 className=" h4 text">Sidan kan inte hittas!</h1>
          <Link to="/">
            <p className="link">Gå tillbaka till startsidan</p>
          </Link>
        </div>
        <Image className="rabbit" fluid src={soLost}></Image>
      </div>
    </div>
  );
};

export default NotFoundPage;
