import { Spinner } from "react-bootstrap";
import "../assets/scss/LoadingSpinner.scss";

const Loading = () => {
  return (
    <>
      <div className="loadingContainer">
        <Spinner role="alert-loading" />
      </div>
    </>
  );
};

export default Loading;
