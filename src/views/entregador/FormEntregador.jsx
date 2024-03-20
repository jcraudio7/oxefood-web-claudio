import axios from "axios";
import React ,{ useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormField, FormGroup, Icon,TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
export default function FormEntregador () {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRG] = useState();
    const [dtNascimento, setDTNascimento] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [qtdEntregasRealizadas, setQTDEntregasRealizadas] = useState();
    const [valorPorFrete, setValorPorFrete] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [uf, setUf] = useState();
    const [complemento, setComplemento] = useState();
    const [ativo, setAtivo] = useState();

    function salvar() {

    let entregadorRequest = {
         nome: nome,
         cpf: cpf,
         dtNascimento: dtNascimento,
         foneFixo: foneFixo,
         foneCelular: foneCelular,
         qtdEntregasRealizadas: qtdEntregasRealizadas,
         valorPorFrete: valorPorFrete,
         rua: rua,
         numero: numero,
         bairro: bairro,
         cidade: cidade,
         cep: cep,
         uf: uf,
         complemento: complemento,
         ativo: ativo
    }

    axios.post("http://localhost:8081/api/entregador", entregadorRequest)
    .then((response) => {
         console.log('Entregador cadastrado com sucesso.')
    })
    .catch((error) => {
         console.log('Erro ao incluir o um entregador.')
    })
}
    
    return (

        <div>

         <MenuSistema />


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
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
			                            onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input 
                                   required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="99.999.999"
                                        value={rg}
			                            onChange={e => setRG(e.target.value)}
                                    /> 
                                
                                </Form.Input>
                            </Form.Group>
                            
                            <FormGroup>
                            <Form.Input
                             label='DT Nascimento'>
                                <InputMask
                                mask="99/99/9999"
                                maskChar={null}
                                placeholder="Ex: 20/03/1985"
                                value={dtNascimento}
                                onChange={e => setDTNascimento(e.target.value)}
                                />
                             </Form.Input>
                             <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
			                            onChange={e => setFoneFixo(e.target.value)}
                                    />
                            </Form.Input>
                            <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
			                            onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    value={qtdEntregasRealizadas}
			                        onChange={e => setQTDEntregasRealizadas(e.target.value)}
                                />
                                      <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    value={valorPorFrete}
			                        onChange={e => setValorPorFrete(e.target.value)}
                                />
                            </FormGroup>

                            <Form.Group widths='equal'>

                                <Form.Input
                                   fluid
                                    label='Rua'
                                    value={rua}
			                        onChange={e => setRua(e.target.value)}
                                    />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    value={numero}
			                        onChange={e => setNumero(e.target.value)}
                                    /> 

                            </Form.Group>
                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    
                                />

                                <Form.Input 
                                required
                                    fluid
                                    label='CEP'
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                    /> 

                               
                                </Form.Group>
                                <Form.Group widths='equal'>

                                    <Form.Input                                  
                                        fluid
                                        label='UF'
                                        maxLength="2"
                                        value={uf}
                                        onChange={e => setUf(e.target.value)}
                                    />

                                    </Form.Group>
                                    <Form.Group widths='equal'>

                                        <Form.Input                                  
                                            fluid
                                            label='Complemento'
                                            maxLength="100"
                                            value={complemento}
                                            onChange={e => setComplemento(e.target.value)}
                                        />

                                        </Form.Group>
                                        <Form.Group inline>

                                            <label>Ativo: </label>

                                            <Form.Radio
                                            label='Sim'
                                            checked={ativo}
                                            onChange={e => setAtivo(true)}
                                            />

                                            <Form.Radio
                                            label='Não'
                                            checked={!ativo}
                                            onChange={e => setAtivo(false)}
                                            />

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