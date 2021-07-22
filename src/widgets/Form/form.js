import React,{Component} from 'react';
import { Form,Button, Row,Col, Modal } from 'react-bootstrap';
import './form.css';
import {send} from 'emailjs-com';

class ContactForm extends Component{
    state = {
        
        modal: {
            showModal: false,
            variant: 'primary',
            remark:'',
            message: ''
        },
        
        formResponse:{
        from_name: '',
        to_name:'Precious',
        message: '',
        reply_to: '',
    app_name:'Names Of God'}
    }

    clearForm = ()=>{
        this.setState({
            formResponse: {
                from_name: '',
                to_name: 'Precious',
                message: '',
                reply_to: '',
                app_name: 'Names Of God'
            }
        })
    }


    renderModal = (state)=>{
        let modalConfig = this.state.modal;
       let modal= {
            ...modalConfig,
            ...state
        }


        this.setState({
            modal
        })
    }

    SendData = (data) =>{
        // const config = (
            
        // )
        send(
            'service_x436oj2', 'template_ogr5as2', data, 'user_FP75xPCHXMi2fTigqYSdB'
        ).then((res)=>{
            console.log('Success',res);
            console.log("Sent")
            this.setState({
                modal:{showModal: true,
                variant:'success',
                remark:'Successful',
                message:'Your message was sent succefully'}
            })
            this.clearForm();

        }).catch((err) => {
            console.log('FAILED...', err);
            this.setState({
                modal: {
                    showModal: true,
                    variant: 'danger',
                    remark: 'Failed',
                    message: 'Your message was not sent succefully, Try sending again'}
            })
            console.log("Failed");
        });

        console.log("Sending...")
    }

    handleChange = (e,target)=>{
        e.preventDefault();
        let formData = this.state.formResponse;

        formData[target] = e.target.value;
        this.setState({
            formData:{
                ...this.state.formResponse,
                ...formData
            }
        })
        //console.log(e.target.value);
        //console.log(formData);
        //console.log(this.state.formResponse)
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state.formResponse)
        this.SendData(this.state.formResponse);
    }


  

    render(){
        return (
            <Row>

                <Col className="credits d-flex align-items-center">
                    
                    <div >
                        <div className="section-title">
                            <h2>Credits</h2>

                        </div>
                        <div>
                            <h4>Inspiration</h4>
                            <p>Life Application Study Bible(NLT)</p>
                        </div>
                        <div>
                            <h4>Bible Passages Source</h4>
                            <p>
                                <a href="https://rapidapi.com/ajith/api/holy-bible/">Holy Bible API</a>
                            </p>
                        </div>



                    </div>
                </Col>

                <Col md={6} className="mx-auto">
                    
                    <Form className="contact-form" onSubmit={this.handleSubmit}>
                        
                        
                        <div className="section-title">
                            <h2>Contact Me</h2>
                            <p>Do you have a Remark,Comment,Suggestion for me?....then send a message to me </p>
                        </div>

                        <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Let me have your Name</Form.Label>
                                <Form.Control type="text" 
                                value={this.state.formResponse.from_name}
                                    onChange={(e)=>this.handleChange(e,'from_name')}
                                    />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control type="email" 
                                onChange={(e) => this.handleChange(e, 'reply_to')}
                             />
                        </Form.Group>
                            
                            
                        
                        <Form.Group className="mb-3" controlId="formMSG">
                            <Form.Label>And your message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a message here"
                                onChange={(e) => this.handleChange(e, 'message')}
                                
                                style={{ height: '100px' }}
                            />
                        </Form.Group>



                        <div className="text-center">
                            
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            
                        </div>
                        
                        

                    </Form>

                    <Modal
                        show={this.state.modal.showModal}
                        onHide={() => this.renderModal({ showModal: false })}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        closeButton ={false}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                {this.state.modal.remark}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>{this.state.modal.message}</h4>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={this.state.modal.variant} onClick={() => this.renderModal({ showModal: false })}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>
                
                
            </Row>
            )
    }
}


export default ContactForm;