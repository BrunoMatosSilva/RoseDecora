import { useEffect, useState } from 'react';
import { Container, Overlay } from './styles';
import ReactDOM from 'react-dom';
import { X } from 'phosphor-react';

export function Modal({ show, onClose, imageVisible, currentIndex}) {
  const [isBrowser, setIsBrowser] = useState(show);

  useEffect(() => {
    setIsBrowser(true);
    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') {
        onClose(false);
      }
    });
  }, [setIsBrowser]);

  function handleCloseClick(e) {
    e.preventDefault();
    onClose(false);
  }

  const modalContent = show ? (
    <Overlay isLeaving={!show}>
      <Container isLeaving={!show}>
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
