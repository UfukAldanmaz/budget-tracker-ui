import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';



function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
        alert(JSON.stringify(data));
    }
    return (
        <div className="container">
            <div className='row justify-content-md-center'>
                <div className='col-md-4 text-center'>
                    <form onSubmit={e => e.preventDefault()}>

                        <div className="form-group">
                            <label>Email</label>
                            <input className='form-control' {...register('email', { required: true })} />
                            {errors?.email?.type === 'required' && <p>This field is required.</p>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className='form-control' name='password' type="password" {...register('password',
                                {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Your password must have at least 8 characters"
                                    }
                                })} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        <input className="btn btn-primary" type="submit" onClick={handleSubmit(onSubmit)} />

                        <div><Link to='/registration'><li>Register now!</li></Link></div>
                        <div><Link to='/newexpense'><li>date</li></Link></div>




                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
