import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";

import { routes } from "../../containers/Router";

import MyButton from "../../components/material/Button";
import { MyInput, MyPasswordInput } from "../../components/material/Inputs";
import MyPageTitle from "../../components/pageTitleBar";

import { PageWrapper, FormStyle} from "../Style/styles"

import { signup } from "../../actions/users";


class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        nickname: '',
        password: '',
      },
      passwordConfirm: '',
      passwordNotMatch: false
    }
  }

 componentDidMount() {
    if (localStorage.getItem('token') != null) {
      this.props.goToLogin()
    }
  } 

  handleInputValue = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleInpuPasswordConfirm = (e) => {
    this.setState({
      passwordConfirm: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { form, passwordConfirm } = this.state
    if (form.password === passwordConfirm) {
      this.props.signup(form)
      this.setState({
        form: {
          name: '',
          email: '',
          nickname: '',
          password: '',
        }
      })
      this.props.goToLogin()
    }else{
      this.setState({
        passwordNotMatch: true
      })
    }
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageName='Cadastrar' />
        <FormStyle onSubmit={this.handleSubmit}>
          <MyInput
            name="name"
            type="text"
            label="Nome"
            placeholder="Nome e Sobrenome"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.name} />
          <MyInput
            name="email"
            type="email"
            label="Email"
            placeholder="email@email.com"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.email} />
            <MyInput
            name="nickname"
            type="text"
            label="Nickname"
            placeholder="nickname"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.nickname} />
          <MyPasswordInput
            name="password"
            id="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.password} />
          <MyPasswordInput
            name="passwordConfirm"
            id="passwordConfirm"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            required={true}
            error={this.state.passwordNotMatch}
            showHelper
            onChange={this.handleInpuPasswordConfirm}
            value={this.state.passwordConfirm} />
          <MyButton btnText='Criar' />
        </FormStyle>
      </PageWrapper>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(replace(routes.login)),
    signupPage: (form) => dispatch(signup(form)),
  }
}
export default connect(null, mapDispatchToProps)(SignupPage)