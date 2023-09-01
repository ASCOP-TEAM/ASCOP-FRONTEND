import React from 'react';
import styled from 'styled-components';
import { ToastContainer as ToastContainerRC, Toast } from 'react-bootstrap';
import { CheckCircle, XCircle } from 'lucide-react';

const SuccessToast = styled(Toast)`
  background-color: #28a745;
  color: white;
  font-weight: 500;
`;

const ErrorToast = styled(Toast)`
  background-color: #dc3545;
  color: white;
  font-weight: 500;
`;

const ToastMessage = styled(Toast.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToastContainer = styled(ToastContainerRC)`
  position: fixed !important;
  top: 10px !important;
  right: 10px !important;
  z-index: 9999;
`;

interface AlertProps {
  show: boolean;
  onClose: () => void;
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ show, onClose, message, type }) => {
  const Icon = type === 'success' ? CheckCircle : XCircle;

  return (
    <ToastContainer className="p-3 fixed-toast" position={'top-center'}>
      {type === 'success' ? (
        <SuccessToast show={show} onClose={onClose} delay={3000} autohide>
          <ToastMessage>
            {message}
            <Icon />
          </ToastMessage>
        </SuccessToast>
      ) : (
        <ErrorToast show={show} onClose={onClose} delay={3000} autohide>
          <ToastMessage>
            {message}
            <Icon />
          </ToastMessage>
        </ErrorToast>
      )}
    </ToastContainer>
  );
};

export default Alert;
