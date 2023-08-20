import { useEffect } from 'react';
import ModalNotification from '../../components/ModalNotification/ModalNotification';
import { useNavigate } from 'react-router';

function NotFoundPage({
  setNotificationModal,
  setWarehouseActive,
  setInventoriesActive
}) {
  const navigate = useNavigate();
  useEffect(()=>{
    setWarehouseActive('nav-list__link');
    setInventoriesActive('nav-list__link');
  },[])

  setNotificationModal([
    <ModalNotification
      modalTitle="Page Not Found"
      modalDescription="Click OK back to home page..."
      setNotificationModal={setNotificationModal}
      onCloseFunc={() => navigate('/')}
    />
  ]);
  return <></>;
}

export default NotFoundPage;
