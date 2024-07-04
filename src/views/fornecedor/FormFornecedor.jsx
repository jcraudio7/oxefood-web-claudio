import axios from "axios";
import React ,{ useEffect,useState }from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";

export default function FormFornecedor () {

    const { state } = useLocation();
    const [idFornecedor, setIdFornecedor] = useState();

    const [nome, setNome] = useState();
    const [dataFundacao, setDataFundacao] = useState();
    const [endereco, setEndereco] = useState();
    const [valorDeMercado, setValorDeMercado] = useState();
    const [contatoDoVendedor, setContatoDoVendedor] = useState();
    const [paginaWeb, setPaginaWeb] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/fornecedor/" + state.id)
            .then((response) => {
                           setIdFornecedor(response.data.id)
                           setNome(response.data.nome)
                           setDataFundacao(response.data.dataFundacao)
                           setEndereco(response.data.endereco)
                           setValorDeMercado(response.data.valorDeMercado)
                           setContatoDoVendedor(response.data.contatoDoVendedor)
                           setPaginaWeb(response.data.paginaWeb)
            })
        }
    }, [state])


    function salvar() {

    let fornecedorRequest = {
         nome: nome,
         dataFundacao: dataFundacao,
         endereco: endereco,
         valorDeMercado: valorDeMercado,
         contatoDoVendedor: contatoDoVendedor,
         paginaWeb: paginaWeb
    }

    if (idFornecedor != null) { //Alteração:
        axios.put("http://localhost:8081/api/fornecedor/" + idFornecedor, fornecedorRequest)
        .then((response) => { console.log('Fornecedor alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alterar fornecedor.') })
    } else { //Cadastro:
        axios.post("http://localhost:8081/api/fornecedor", fornecedorRequest)
        .then((response) => { console.log('Fornecedor cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir o fornecedor.') })
    }

}


    return (

        <div>

          <MenuSistema />


            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idFornecedor === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idCliente != undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


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
                                    label='Data Fundação '>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
			                            onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

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
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
			                            onChange={e => setDataNascimento(e.target.value)}
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
                                <Link to={'/list-cliente'}>Voltar</Link>
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
