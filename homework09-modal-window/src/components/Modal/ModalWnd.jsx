import './ModalWnd.css';

export default function ModalWnd({ call, onDestroy }) {

    if (!call) {
        return null;
    }

    const closeWnd = (event) => {
        if (event.target.className === 'modal') {
            onDestroy();
        }
    }

    return (
        <div onClick={closeWnd} className='modal'>
            <div className="modal-content">
                <i onClick={onDestroy} className='close'>X</i>
                <h1>Видалити запис?</h1>
                <div className="btns">
                    <button className='accept'>Так, видалити</button>
                    <button onClick={onDestroy} className='reject'>Ні, залишити</button>
                </div>
            </div>
        </div>
    );
}