import React, { useEffect, useState } from 'react';
import { QrCodePix } from 'qrcode-pix';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import { Container } from './styles';

export function QrCode() {
    const [qrCode, setQrCode] = useState<string>('');
    const [rawPix, setRawPix] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        async function generateDynamicPix() {
            try {
                /*
              version: '01' //versão do pix (não altere)
              key: chave pix
              name: seu nome/empresa
              city: sua cidade
              transactionId: é o identificador que aparecerá no momento do pix (max: 25 caracteres)
              message: mensagem que aparecerá no momento do pix (opcional)
              value: valor que você quer cobrar (opcional)
          */
                const qrCodePix = QrCodePix({
                    version: '01',
                    key: '48866170852',
                    name: 'ASCOP BRASIL',
                    city: 'São Paulo',
                    transactionId: 'DoacaoASCOP',
                    message: 'Agradecemos seu apoio ❤️🎉',
                });

                const rawPixStr = qrCodePix.payload();
                const qrCodeBase64 = await qrCodePix.base64();

                setRawPix(rawPixStr);
                setQrCode(qrCodeBase64);
            } catch (error) {
                setError('Ocorreu um erro ao gerar o QR Code Pix.');
                console.error('Erro:', error);
            }
        }

        void generateDynamicPix();
    }, []);

    function handleCopy() {
        const textToCopy = rawPix;
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            setCopySuccess(true); // Indicar sucesso de cópia
            setTimeout(() => setCopySuccess(false), 2000); // Limpar o sucesso após 2 segundos
        } catch (err) {
            console.error('Erro ao copiar o texto: ', err);
        } finally {
            document.body.removeChild(textArea);
        }
    }

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Container >
                <div className='img-qr'>
                    <Image src={qrCode} alt={'QR Code PIX'} width={200} height={200} />
                </div>
                <div className='clip-border'>
                    <p>ou clique para copiar:</p>
                    <div className='bg'>
                        <p onClick={handleCopy}>
                            {rawPix}
                        </p>
                        <div className='icon'>
                            <Copy onClick={handleCopy} />
                        </div>

                    </div>

                </div>
                {copySuccess && <p style={{ color: 'green' }}>Copiado com sucesso! 😊❤️</p>}

            </Container>
        </div>
    );
}


