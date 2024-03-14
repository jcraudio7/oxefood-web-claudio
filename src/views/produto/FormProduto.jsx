import axios from "axios";
import React ,{ useState }from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormField, FormGroup, Icon,TextArea } from 'semantic-ui-react';
export default function FormProduto () {

    const [titulo, setTitulo] = useState();
    const [codigoDoProduto, setCodigoDoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoDeEntregaMinimaEmMinutos, setTempoDeEntregaMinimaEmMinutos] = useState();
    const [tempoDeEntregaMaximaEmMinutos, setTempoDeEntregaMaximaEmMinutos] = useState();

    function salvar() {

    let produtoRequest = {
         titulo: titulo,
         codigoDoProduto: codigoDoProduto,
         descricao: descricao,
         valorUnitario: valorUnitario,
         tempoDeEntregaMinimaEmMinutos: tempoDeEntregaMinimaEmMinutos,
         tempoDeEntregaMaximaEmMinutos: tempoDeEntregaMaximaEmMinutos
    }
    
    axios.post("http://localhost:8081/api/produto", produtoRequest)
    .then((response) => {
         console.log('Produto cadastrado com sucesso.')
    })
    .catch((error) => {
         console.log('Erro ao incluir o um produto.')
    })

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
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        placeholder="Informe o código do produto"
                                        value={codigoDoProduto}
			                            onChange={e => setCodigoDoProduto(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <FormGroup>
                            <Form.Input
                                    label='Descrição'
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}
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
                                        value={valorUnitario}
                                        onChange={e => setValorUnitario(e.target.value)}
                                    /> 
                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega mínima em minutos'
                                    width={6}>
                                    <InputMask 
                                        mask="99"
                                        placeholder="30"
                                        value={tempoDeEntregaMinimaEmMinutos}
                                        onChange={e => setTempoDeEntregaMinimaEmMinutos(e.target.value)}
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
                                        value={tempoDeEntregaMaximaEmMinutos}
                                        onChange={e => setTempoDeEntregaMaximaEmMinutos(e.target.value)}
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
                                onClick={() => salvar()}
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
}
