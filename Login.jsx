import{
    txtLogin,
    txtSenha
} from '../App';
var login = "teste";
var senha = "teste";



export const fazerLogin = (e) => {

    var login = "teste";
    var senha = "teste";

    if (txtLogin.current.value === login && txtSenha.current.value === senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
    return true;
}