import React,{Component} from 'react';
import { Form,Button, Row,Col} from 'react-bootstrap';
import './form.css';
import PopUp from '../Modal/popup';
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
            app_name:'Names Of God'
        },

        button:{
            text:'Send Message',
            disabled:false
        }
    }

    clearForm = (state)=>{
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
            modal,
            button: {
                text: 'Send Message',
                disabled: false
            }
        })
        
    }

    toTitle = (text)=>{
        let ntext = text.split(' ')[0];
        return ntext[0].toUpperCase() + ntext.slice(1,);
    }



    SendData = (data) =>{
        // const config = (
        let sender = this.toTitle(data.from_name);
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
                message:`${sender}, your message was sent succefully`},

                button: {
                    text: 'Sent',
                    disabled: true
                }
            })
            this.clearForm();

        }).catch((err) => {
            console.log('FAILED...', err);
            this.setState({
                modal: {
                    showModal: true,
                    variant: 'danger',
                    remark: 'Oops!... failed to send',
                    message: 'Check your internet connection and try sending again'
                },
                button: {
                    text: 'Failed...',
                    disabled: true
                }
                })
            console.log("Failed");
            
        });

        //console.log("Sending...")
        this.setState({
            button: {
                text: 'Sending...',
                disabled: true
            }
        })
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

    renderButton = () =>{
        return(
            <Button variant="primary" type="submit" disabled={this.state.button.disabled ? 'disabled':""}>
                {this.state.button.text}
            </Button>
        )
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
                                <a href="https://rapidapi.com/ajith/api/holy-bible/" rel="noreferrer" target="_blank">Holy Bible API</a>
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
                                    required
                                    />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control type="email"
                                value={this.state.formResponse.reply_to}
                                onChange={(e) => this.handleChange(e, 'reply_to')}
                                required
                             />
                        </Form.Group>
                            
                            
                        
                        <Form.Group className="mb-3" controlId="formMSG">
                            <Form.Label>And your message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a message here"
                                value={this.state.formResponse.message}
                                onChange={(e) => this.handleChange(e, 'message')}
                                required
                                style={{ height: '100px' }}
                            />
                        </Form.Group>



                        <div className="text-center">
                            
                            {this.renderButton()}
                            
                        </div>
                        
                        

                    </Form>

                    <PopUp 
                        show={this.state.modal.showModal} 
                        status={this.state.modal.variant} 
                        data={{remark:this.state.modal.remark, message:this.state.modal.message}}
                        handle={this.renderModal}
                    />

                </Col>
                
                
            </Row>
            )
    }
}


export default ContactForm;