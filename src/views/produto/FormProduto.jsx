import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormField, FormGroup, Icon,TextArea } from 'semantic-ui-react';
export default function FormProduto () {

    
    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder="Informe o título do produto"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        placeholder="Informe o código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <FormGroup>
                            <Form.Input
                                    label='Descrição'
                            /><TextArea placeholder='Informe a descrição do produto' />
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
