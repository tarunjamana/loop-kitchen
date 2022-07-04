import React,{useRef,useState} from 'react';
import {Form , Button ,Card , Alert} from 'react-bootstrap';
import UseFetch  from '../Hooks/UseFetch';
import {useAuth} from '../Contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const {isLoggedIn,setIsLoggedIn} = useAuth();
    const [formError,setFormError] = useState('')
    const navigate = useNavigate();
  const {data ,loading,error } = UseFetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals');

  function handleSubmit(e){
    e.preventDefault();
    const hasUsername = data.some(el => el.fields.username === userNameRef.current.value);
    const hasPassWord = data.some(el => el.fields.password === passwordRef.current.value);
    !hasUsername?setFormError('Invalid UserName'):!hasPassWord?setFormError('Invalid Password '):navigate('/');
     if(hasUsername && hasPassWord){
      setIsLoggedIn(isLoggedIn => !isLoggedIn);
      setFormError('')
     }

  }
    return (
        <>
        <div className='w-100' style={{maxWidth:'400px'}}>
        <Card> 
          <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {formError && <Alert variant='danger'>{formError}</Alert>}
              <Form onSubmit={handleSubmit} >
                  <Form.Group id="email">
                 <Form.Label>username</Form.Label>
                 <Form.Control type="name" ref={userNameRef} required/>
                  </Form.Group>
                  <Form.Group id="password">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" ref={passwordRef} required/>
                  </Form.Group>
                  <Button disabled={loading}  className="w-100 mt-2"type="submit">Login</Button>
              </Form>
          </Card.Body>
      </Card>
        </div>
        </>

    )
}

export default Login
