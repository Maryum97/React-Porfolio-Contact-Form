import React from 'react';
import SuccessModal from './index';
import { Button } from 'bootstrap';

function ModalApp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalApp;