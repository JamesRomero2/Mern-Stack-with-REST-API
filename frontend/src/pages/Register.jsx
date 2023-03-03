import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const {name, email, password, confirm_password} = formData;

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter your Name' onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your Email' onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='confirm_password' name='confirm_password' value={confirm_password} placeholder='Confirm password' onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register