import React, { Component } from "react";
import { connect } from 'react-redux';

import { push } from 'connected-react-router';
import { routes } from '../Router'

import ButtonAppBar from "../../components/AppBar";
import ButtonStyle from '../../components/button'
import MyTextField from '../../components/input'

import { PageWrapper, ContentWrapper, FormStyle } from '../Style/styles'

import { login } from "../../actions/users";


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                nickname: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        localStorage.removeItem('token')
    }

    handleInputValue = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.form)
        this.setState({
            form: {
                email: '',
                nickname: '',
                password: ''
            }
        })
    }

    render() {
        return (
            <PageWrapper>
                <ButtonAppBar
                    pageName=' Spotenu'
                    btnText='Acesso Administrador'
                    onClick={this.props.goToRegisterPageAdmin}
                    btnnText='Cadastre a sua banda'
                    onnClick={this.props.goToRegisterBand}
                />
                
                <ContentWrapper>
                    <FormStyle onSubmit={this.handleSubmit}>
                        <MyTextField
                            name="email"
                            type="email"
                            label="Email"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.email} />
                        <MyTextField
                            name="nickname"
                            type="name"
                            label="Nickname"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.nickname} />
                        <MyTextField
                            name="password"
                            type="password"
                            label="senha"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.password}
                        />
                        <ButtonStyle type="submit" btnText="Entrar" />
                        <h3>Não possui cadastro? <span onClick={this.props.goToRegisterPage}>Clique aqui</span></h3>
                    </FormStyle>
                </ContentWrapper>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToRegisterPageAdmin: () => dispatch(push(routes.registerAdmin)),
        goToRegisterPage: () => dispatch(push(routes.register)),
        goToRegisterBand: () => dispatch(push(routes.registerBand)),
        login: (form) => dispatch(login(form))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);