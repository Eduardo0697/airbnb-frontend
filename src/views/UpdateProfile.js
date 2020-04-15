import React, {useState} from "react";
import authHOC from "../utils/authHOC";
import Layout from "../common/Layout";
import Input from "../common/Input";
import FigureImage from "../common/FigureImage";
import gql from "graphql-tag";
import {useMutation, useQuery} from "react-apollo-hooks";
import useForm from "../hooks/useForm";


const UPDATE_PROFILE=gql`
    mutation updateUser($data: UserUpdateInput){
        updateUser(data: $data){
            _id
        }
    }
`;

const ME=gql`
    query me{
        me{
            first_name
            last_name
            languages
            nationality
            hostCategory
            description
            profile_pic
        }
    }
`;



function UpdateProfile({match,history}){
    const [ updateUser ] = useMutation(UPDATE_PROFILE);
    const [ profile_pic, setProfilePic ] = useState('');
    const [ profilePicPreview, setProfilePicPreview ] = useState('');

    const query = useQuery(ME,{
        fetchPolicy: 'no-cache'
    });
    const catchData = async (inputs) => {
        delete inputs.profile_pic;
        const newData = profile_pic ? {...inputs, profile_pic, is_verified:true } : {...inputs,is_verified:true};
        console.log(newData);
        const { data, errors} = await updateUser({variables: { data: newData }});
        if(data){
            history.push('/profile');
        }
        if(errors) alert('Error al actualizar tu perfil.');
    };

    const catchProfilePic = event => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setProfilePic(file);
            setProfilePicPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData, query.data);
    if(query.loading)  return  <Layout> <div className="content py-5"><h2> Loading...</h2></div></Layout>;
    // if(query.error) return <Layout><div className="content py-5">Hubo un error, intenta de nuevo {JSON.stringify(query.error)}</div></Layout>;
    return(
        <>
            <Layout>
                <div className="content py-5">
                    <h2>Actualiza tu perfil</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row p-3">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <Input label="Nombre"
                                               type="text"
                                               change={handleInputChange}
                                               value={inputs.first_name}
                                               name="first_name"
                                               required={true}/>
                                    </div>
                                    <div className="col-12">
                                        <Input label="Apellidos"
                                               type="text"
                                               change={handleInputChange}
                                               value={inputs.last_name}
                                               name="last_name"
                                               required={true}/>
                                    </div>
                                    <div className="col-12">
                                        <Input label="Idiomas que hablas"
                                               type="text"
                                               change={handleInputChange}
                                               value={inputs.languages}
                                               name="languages"
                                               required={true}/>
                                    </div>
                                    <div className="col-12">
                                        <Input label="Nacionalidad"
                                               type="text"
                                               change={handleInputChange}
                                               value={inputs.nationality}
                                               name="nationality"
                                               required={true}/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Categoria</label>
                                            <select className="form-control"
                                                    value={inputs.hostCategory}
                                                    onChange={handleInputChange}
                                                    name="hostCategory" required>
                                                <option selected disabled value="">Elige...</option>
                                                <option>Estandar</option>
                                                <option>Super Host</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label  className=" col-form-label">Actualizar Foto de Perfil</label>
                                            <div className="py-2">
                                                <input type="file"
                                                       name="photo3"
                                                       onChange={catchProfilePic}
                                                       className="form-control-file"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    { query.data.me
                                        ? (
                                            <>
                                                <div className="col-12 d-flex justify-content-center mb-4">
                                                    <FigureImage caption="Fotografia actual"
                                                                 figureClass="w-50"
                                                                 image={ query.data.me.profile_pic }
                                                                 imageStyle={{  objectFit: "cover", height: "100%"}}/>
                                                </div>
                                            </>
                                        )
                                        : ( <></> )
                                    }
                                    {
                                        profilePicPreview
                                            ? (
                                                <>
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <FigureImage caption="Fotografia nueva"
                                                                     figureClass="w-50"
                                                                     image={ profilePicPreview }
                                                                     imageStyle={{  objectFit: "cover", height: "100%"}}/>
                                                    </div>
                                                </>
                                            )
                                            : (<></>)

                                    }


                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label >Descripcion</label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        placeholder="Actualmente vivo en Cancun y me dedico a trabajar por las mañanas..."
                                        value={inputs.description}
                                        onChange={handleInputChange}
                                        rows="10"
                                        cols="30" required/>
                                </div>
                            </div>


                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-auto ">
                                <button type="submit" style={{backgroundColor : "#ff5a5f"}}
                                        className="btn btn-block btn-lg text-white">Actualizar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default authHOC(UpdateProfile);