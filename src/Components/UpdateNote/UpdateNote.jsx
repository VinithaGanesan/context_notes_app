import React, { useContext, useEffect, useState } from 'react'
import { NotesContext } from '../../Contexts/NotesContext';
import { Button, Form, Modal } from 'react-bootstrap';


export default function UpdateNote(props) {
    const {state,dispatch} = useContext(NotesContext)

    const {selectedNote} = state;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        if(Object.keys(selectedNote).length !== 0){
            setTitle(selectedNote.title)
            setDescription(selectedNote.description)
            setId(selectedNote.id)
        }
    }, [selectedNote])

    const updateNote = () => {
        props.onHide()
        dispatch({type:'UPDATE_NOTE',payload:{title,description,id}})
    }




    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Task Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Task Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="text-end">
                    <Button variant="primary" type="submit" onClick={(e) => updateNote(e)}>
                        Update Task
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
