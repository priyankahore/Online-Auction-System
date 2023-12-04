import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
// import image1 from './hero1.jpg'
import image2 from './hero3.png'

const ComingSoon = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/OfferProductList')
    }

    return (
        <div
            className="modal show"
            style={{
                display: 'block',
                position: 'initial',
                width: '100%'         
            }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>UpComing Products</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='text-center bg-warning'>

                        <img src={image2} alt='img-1' height='300px' width='400px' />

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClickBack}>Back</Button>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ComingSoon