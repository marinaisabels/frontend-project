import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";



import { routes } from "../../containers/Router";

import ButtonAppBarHome from "../../components/AppBarHome";
import { Background } from "../Style/styles";

import {  ContainerPage, Button, ContainerPlaylist, ContainerCovers, Photo, Footer } from '../Style/styles'





class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        nickname: '',
        description:'',
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
          description: '',
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
      <ContainerPage>
      <ButtonAppBarHome
      pageName=' Spotenu'
      btnText='Seu Perfil'
      onClick={this.props.goToPerfilPage}
      btnTextBand='Perfil da sua  Banda'
      onnClick={this.props.goToBandPage}
      btnTextAdm='Administrador'
      onnnClick={this.props.goToAdminPage}
      />
      <Background src={require("../../image/background-home.jpg")}
      />
      <ContainerPlaylist>
      <h1><b>É música que<br/>você quer?</b></h1>
      <h2>Conheça os melhores<br/>lançamentos do momento.</h2>
      <Button onClik={this.props.goToPlaylist}> ABRIR A PLAYLIST </Button>
      </ContainerPlaylist>
      <ContainerCovers>
        <Photo src={require("../../image/cover-1.jpg")} alt=""/>
        <Photo src={require("../../image/cover-2.jpg")} alt=""/>
        <Photo src={require("../../image/cover-3.jpg")} alt=""/>
        <Photo src={require("../../image/cover-4.jpg")} alt=""/>
        <Photo src={require("../../image/cover-5.jpg")} alt=""/>
        <Photo src={require("../../image/cover-6.jpg")} alt=""/>
      </ContainerCovers>
      <Footer>© 2020 - Criado por Marina Isabel</Footer>
      </ContainerPage>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToAdminPage: () => dispatch(replace(routes.login)),
    goToBandPage: () => dispatch(replace(routes.login)),
    goToPerfilPage: () => dispatch(replace(routes.login)),
    goToPlaylist: () => dispatch(replace(routes.login)),
  }
}
export default connect(null, mapDispatchToProps)(HomePage)