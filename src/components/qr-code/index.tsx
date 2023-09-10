import React from 'react';
import { QrCodePix } from 'qrcode-pix';
import Image from 'next/image';
import { Container } from './styles';
import { Alert } from '@components';
import { Copy } from 'lucide-react';
import { Spinner } from 'react-bootstrap';
import { ONGContext } from '@contexts';

export function QrCode() {
  const [qrCode, setQrCode] = React.useState<string>('');
  const [rawPix, setRawPix] = React.useState<string | null>(null);

  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertType, setAlertType] = React.useState<'success' | 'error'>(
    'success',
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);

  const ongData = React.useContext(ONGContext);

  React.useEffect(() => {
    async function generateDynamicPix() {
      try {
        setIsLoading(true);

        if (!ongData) {
          throw new Error('Erro ao obter dados bancários.');
        }

        const { chave, nome, cidade, transactionId, message } =
          ongData.data.attributes.pixDados;

        const qrCodePix = QrCodePix({
          version: '01',
          key: chave,
          name: nome,
          city: cidade,
          transactionId: transactionId,
          message: message,
        });

        const rawPixStr = qrCodePix.payload();
        const qrCodeBase64 = await qrCodePix.base64();

        setRawPix(rawPixStr);
        setQrCode(qrCodeBase64);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro:', error);
        setIsLoading(false);
      }
    }

    generateDynamicPix();
  }, [ongData]);

  function handleCopy() {
    if (!rawPix) {
      setAlertType('error');
      setAlertMessage('Erro ao copiar chave Pix.');
      setShowAlert(true);
      return;
    }

    const textToCopy = rawPix;

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      setAlertType('error');
      setAlertMessage('Erro ao copiar chave Pix.');
      setShowAlert(true);
      console.error('Erro ao copiar o texto: ', err);
    } finally {
      document.body.removeChild(textArea);
    }
  }

  return (
    <>
      <Container>
        {!isLoading && !showAlert && qrCode ? (
          <div className="img-qr">
            <Image src={qrCode} alt={'QR Code PIX'} width={200} height={200} />
          </div>
        ) : (
          <div className="error-qr">
            <div className="loader">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        )}
        <div className="clip-border">
          {!isLoading && !showAlert && qrCode ? (
            <>
              <p>ou clique para copiar:</p>
              <div className="bg">
                <p onClick={handleCopy}>{rawPix}</p>
                <div className="icon" onClick={handleCopy}>
                  <Copy />
                </div>
              </div>
            </>
          ) : (
            <div className="error-text" style={{ textAlign: 'center' }}>
              <p>
                Não foi possível criar o QR Code. Tente novamente mais tarde!
              </p>
            </div>
          )}
        </div>

        {copySuccess && (
          <p style={{ color: 'green' }}>Copiado com sucesso! 😊❤️</p>
        )}
      </Container>

      {showAlert && (
        <Alert
          show={showAlert}
          onClose={() => setShowAlert(false)}
          message={alertMessage}
          type={alertType}
        />
      )}
    </>
  );
}
