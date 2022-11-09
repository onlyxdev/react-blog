import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { object, string } from "yup"
import styles from './Opiniao.module.css'


const schema = object({
    name: string().required(),
    email: string().email().required(),
    content: string().required()
}).required();

export default function Opiniao() {
    const { register, handleSubmit, formState: {errors} } = 
    useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitForm = data => console.log(data);

    return(
        <div className={styles.container}>
            <h1>Deixa sua Opinião sobre a série!</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className='field'>
                    <label className='label'>Nome</label>
                    <input type="text" {...register('name')}/>
                    <span>{errors.name?.message}</span>
                </div>

                <div className='field'>
                    <label className='label'>Email</label>
                    <input type="email" {...register('email')}/>
                    <span>{errors.email?.message}</span>
                </div>

                <div className='field'>
                    <label className='label'>Conteúdo:</label>
                    <input type="text" {...register('content')}/>
                    <span>{errors.content?.message}</span>
                </div>

                <button type='submit'>Postar</button>
            </form> 
        </div>
    )
}