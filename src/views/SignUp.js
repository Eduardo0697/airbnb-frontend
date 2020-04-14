import React from "react";
import Input from "../common/Input";
import LayoutHome from "../common/LayoutHome";
import useForm from "../hooks/useForm";
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const CREATE_USER = gql`
    mutation createUser($data:UserCreateInput!){
        createUser(data:$data){
            _id
        }
    }
`;

function SignUp({ history }){
    const [ sendSignup ] = useMutation(CREATE_USER);

    const catchData = async (inputs) => {
        if(inputs.password === inputs.confirm_password){
            delete inputs.confirm_password;
            const { data } = await sendSignup({variables:{data: {...inputs}} });
            if(data) {
                if(data.errors) console.log(data.errors);
                history.push('/login');
            };
        } else {
            alert('Tus contraseñas no coinciden');
        };
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit,
    } = useForm(catchData);

    return(
        <LayoutHome background="https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-dark">Registrarme</h1>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    name="first_name"
                                    label="Nombre"
                                    type="text"
                                    placeholder=""
                                    value={ inputs.first_name}
                                    change={handleInputChange}
                                    required={true}
                                />
                                <Input
                                    name="last_name"
                                    label="Apellidos"
                                    type="text"
                                    placeholder=""
                                    value={ inputs.last_name }
                                    change={handleInputChange}
                                    required={true}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    label="Email address"
                                    placeholder="email@example.com"
                                    value={ inputs.email }
                                    change={handleInputChange}
                                    required={true}/>
                                <Input
                                    name="password"
                                    type="password"
                                    label="Contraseña"
                                    placeholder=""
                                    value={inputs.password}
                                    change={handleInputChange}
                                    required={true}/>
                                <Input
                                    name="confirm_password"
                                    type="password"
                                    label="Confirmar Contraseña"
                                    placeholder=""
                                    value={inputs.confirmPassword}
                                    change={handleInputChange}
                                    required={true}/>

                                <button type="submit" style={{backgroundColor : "#ff5a5f"}}
                                        className="btn btn-lg text-white">Sign in
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutHome>
    )
}

export default SignUp;