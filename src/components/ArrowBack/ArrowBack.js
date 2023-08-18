import "./ArrowBack.scss";
import {useNavigate} from 'react-router-dom';


function ArrowBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button className="arrow-back" onClick={goBack}></button>
      
    </>
  );
}

export default ArrowBack;
