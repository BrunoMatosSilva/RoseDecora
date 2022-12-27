import { useEffect, useState } from 'react';
import { Container, Overlay } from './styles';
import ReactDOM from 'react-dom';

export function Modal({ show, onClose}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleCloseClick(e) {
    e.preventDefault();
    onClose();
  }

  const modalContent = show ? (
    <Overlay>
      <Container>
        <a href="#" onClick={handleCloseClick}>
            x
        </a>

      </Container>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
