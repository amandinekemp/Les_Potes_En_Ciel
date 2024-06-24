import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';

const ContactUsCmpt = () => {
  // Sample data for contact requests
  const [contactRequests, setContactRequests] = useState([
    { id: 1, userName: 'John Doe', date: '2024-06-14', content: 'Need assistance with the membership form.', status: 'Pending' },
    { id: 2, userName: 'Jane Smith', date: '2024-06-13', content: 'Inquiry about upcoming events.', status: 'Pending' },
    // Add more requests as needed
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    setContactRequests(contactRequests.map(request =>
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStatus = event.target.elements.status.value;
    handleStatusChange(selectedRequest.id, newStatus);
    setShowModal(false);
  };

  const handleShowModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2>Contact Request Management</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Date</th>
                <th>Content</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.userName}</td>
                  <td>{request.date}</td>
                  <td>{request.content}</td>
                  <td>{request.status}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShowModal(request)}>Change Status</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" defaultValue={selectedRequest?.status}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </Form.Control>
            </Form.Group>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="ml-2">
              Confirm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ContactUsCmpt;
