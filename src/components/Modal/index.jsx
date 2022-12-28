import { useEffect, useState } from 'react';
import { Container, Overlay } from './styles';
import ReactDOM from 'react-dom';
import { X } from 'phosphor-react';

export function Modal({ show, onClose, imageVisible, currentIndex}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') {
        onClose();
      }
    });
    setIsBrowser(true);
  }, [isBrowser]);

  function handleCloseClick(e) {
    e.preventDefault();
    onClose();
  }

  const modalContent = show ? (
    <Overlay>
      <Container>
        <header>
          <button type="button" onClick={handleCloseClick}>
            <X size={25}/>
          </button>
        </header>

        <div className="modal-body">
          <span key={currentIndex}>
            <img src={imageVisible} />
          </span>
        </div>


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
