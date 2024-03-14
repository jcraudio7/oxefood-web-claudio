import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormField, FormGroup, Icon,TextArea } from 'semantic-ui-react';
export default function FormProduto () {

    
    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                       
                                    /> 
                                </Form.Input>

                                <Form.Input 
                                   required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="99.999.999"
                                       
                                    /> 
                                
                                </Form.Input>
                            </Form.Group>
                            
                            <FormGroup>
                            <Form.Input
                             label='DT Nascimento'>
                                <InputMask
                                mask="99/99/9999"/>
                             </Form.Input>
                                    
                            
                            </FormGroup>

                            <Form.Group widths='equal'>

                                <Form.Input
                                   required
                                   fluid
                                    label='Valor Unitário'
                                    width={6}>
                                     <InputMask 
                                        mask="999"
                                        
                                    /> 
                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega mínima em minutos'
                                    width={6}>
                                    <InputMask 
                                        mask="99"
                                        placeholder="30"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maxíma em minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99" 
                                        maskChar={null}
                                        placeholder="40"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}