import React, { useState } from 'react';

function LoginForm() {
    // ou
    const [nomeUsuario, setnomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const usuarios = [
        { nome: "insta", senha: "insta" },
        { nome: "leandro", senha: "leandro123" },
        { nome: "maria", senha: "maria132" },
        { nome: "ester", senha: "tecnologia" },
        { nome: "kusuki", senha: "tecmal" }
    ];

    function manipulaLogin() {
        const usuarioValido = usuarios.find(user => user.nome === nomeUsuario && user.senha === senhaUsuario);

        if (usuarioValido) {
            window.location.href = "/Home";
        } else {
            setErrorMessage('Nome de usuário, ou senha incorretos.');
        }
    }
    return (

        <div className="login-container">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>

            <div className='tell'>

                <fieldset className='jup' >
                    <img className='tel' src='https://encurtador.com.br/ovU25'></img>
                </fieldset>


                <fieldset className='fil' >
                    <p className='title' >instagrão</p>
                    <input className='imp1'
                        type="text"
                        placeholder=" Phono number, username, or email"
                        value={nomeUsuario}
                        onChange={(e) => setnomeUsuario(e.target.value)}
                        required
                    />
                    <input className='imp1'
                        type=" password"
                        placeholder=" Password"
                        value={senhaUsuario}
                        onChange={(e) => setSenhaUsuario(e.target.value)}
                        required
                    />
                    <button className='buut' onClick={manipulaLogin}>Login in</button>
                    <p style={{ color: 'red' }}>{errorMessage}</p>

                    <p className='linha' > ____________  <span className='or' >OR</span>   _____________   </p>

                    <p className='nomeface' ><i id='face' class="bi bi-facebook" ></i>  <a className='nome2' href='#'>Log in with Facebook</a></p>

                    <p className='forg'  ><a href='#'>Forgot password?</a></p>

                </fieldset>
            </div>

            <div className='goo' >
                <p className='n' >Dont' haven an account? < a href=''>Register.</a> </p>

            </div>
            <p className='h' >Gets the application.</p>

            <div className='icon' >

                <img className='im' src='https://static.cdninstagram.com/rsrc.php/v3/yk/r/79GIv0tl5JK.png'></img>
                <img className='im' src='https://static.cdninstagram.com/rsrc.php/v3/y6/r/1lPaaBoaNgH.png'></img>

            </div>
            <br></br>
        </div>

    );
}
export default LoginForm;

