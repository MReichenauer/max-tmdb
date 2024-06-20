import "../assets/scss/LoadingSpinner.scss";
import Spinner from "react-bootstrap/Spinner";

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
