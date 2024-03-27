import PropTypes from "prop-types";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const StudentCard = ({
  firstName,
  lastName,
  age,
  group,
  order,
  id,
  editStudent,
  deleteStudent,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteStudent(id);
    setShowModal(false);
  };

  return (
    <tr>
      <td>{order}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{group}</td>
      <td className="text-end">
        <button
          className="btn btn-danger me-3"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>
        <button className="btn btn-primary" onClick={() => editStudent(id)}>
          Edit
        </button>
      </td>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this student?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

StudentCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  group: PropTypes.string,
  order: PropTypes.number,
  id: PropTypes.string,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
};

export default StudentCard;

