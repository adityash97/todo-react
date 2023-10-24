import { useState } from "react";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";


export default function TodoEdit(props) {
const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="outline-dark" onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <EditModal
        show={modalShow}
        itemid={props.itemid}
        itemtitle={props.itemtitle}
        updateTodo={props.updateTodo}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
