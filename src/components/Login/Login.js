import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Log in</h3>
          <div style={{margin:'2 0px'}}>
          <button onClick={signInWithGoogle}>Google Sign In</button>
          </div>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;