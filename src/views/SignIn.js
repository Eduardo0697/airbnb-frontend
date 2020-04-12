import React from 'react';
import LayoutHome from "../common/LayoutHome";

import useForm from './../hooks/useForm';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Input from "../common/Input";

const SignIn = gql`
    mutation login($email: EmailAddress!,$password: String!){
        login(email:$email,password:$password){
            token
            message
        }
    }
`;

function Login({history}){
    const [ sendLogin ] = useMutation(SignIn);

    const catchData = async (inputs) => {
        const { data, errors} = await sendLogin({variables: {...inputs}});
        if(data){
            const {login} = data;
            sessionStorage.setItem('userToken', login.token);
            history.push('/');
        }
        if(errors) alert('Error on tu login');
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit,
    } = useForm(catchData);

    return(
        <LayoutHome background="https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
            <div className="row justify-content-center">
                <div className="col-8 col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-dark">Iniciar sesión</h1>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    name="email"
                                    label="Email"
                                    type="text"
                                    placeholder="Escribe tu email"
                                    value={inputs.email}
                                    change={handleInputChange}
                                    required={true}
                                />
                                <Input
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    placeholder="Escribe tu contraseña"
                                    value={inputs.password}
                                    change={handleInputChange}
                                    required={true}
                                />
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-auto ">
                                        <button type="submit" style={{backgroundColor : "#ff5a5f"}}
                                                className="btn btn-block  text-white">Login
                                        </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </LayoutHome>

    );
};

export default Login;