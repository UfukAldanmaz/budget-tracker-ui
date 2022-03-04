import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Registration() {

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
                            <label for="firstName">First Name</label>
                            <input className='form-control' {...register('firstName', { required: true })} />
                            {errors?.firstName?.type === 'required' && <p>This field is required.</p>}
                        </div>
                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input className='form-control' {...register('lastName', { required: true })} />
                            {errors?.lastName?.type === 'required' && <p>This field is required.</p>}
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className='form-control'  {...register('email', { required: true })} />
                            {errors?.email?.type === 'required' && <p>This field is required.</p>}
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
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
                        <div className="form-group">
                            <label for="password_repeat">Repeat Password</label>
                            <input className='form-control' name='password_repeat' type="password" {...register
                                ('password_repeat', { validate: value => value === password.current || "The password do not match" })} />
                            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                        </div>

                        <button className="btn btn-primary" type="submit" onClick={handleSubmit(onSubmit)}>
                            Register
                        </button>
                        <div> <Link to='/login'><li>Login!</li></Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
