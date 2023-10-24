import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from 'react';

function editHandler(e, props, itemtitle) {
  e.preventDefault();

  props.updateTodo((oldTodo) => {
    // edit not working
    return oldTodo.map((item) => (item.id === props.itemid) && (item.title = itemtitle));
  });

}

export default function EditModal(props) {
    const [itemtitle, setItemtitle] = useState(props.itemtitle);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter new value"
              value={itemtitle}
              onChange={(event) => setItemtitle(event.target.value)}
            />
          </InputGroup>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={(e) =>{ return editHandler(e, props, itemtitle);}} type="submit">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
