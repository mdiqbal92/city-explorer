import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';


const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    });

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const user = result.user;
                const signedInUser= {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                
                console.log(user,displayName);
                setUser(signedInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
            const signedOutUser= {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setUser(signedOutUser);
            console.log(res);
          })
          .catch((error) => {
            const errorMessage = error.message;
                console.log(errorMessage);
          });
    }

    const handleSubmit = (e) =>{
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user }
                    newUser.error = '';
                    newUser.success = true;

                    console.log(res);
                })
                .catch((error) => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser);
                });


        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user }
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser);
                    // setLoggedInUser(newUser);
                    // history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user }
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser);
                });
        }
        e.preventDefault();

    }
    const handleBlur = (e) =>{
        let isFieldValid =true;
        if (e.target.name === "email") {
            isFieldValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value);
        }
        if (e.target.name === "password") {
            isFieldValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    return (
        <div className="container" style={{textAlign: "center"}}>
            {
                user.isSignedIn && <p>Welcome {user.name}</p>
            }
            <h1>Create Account / Log In </h1>

            <hr />
            <input type="checkbox" id="" onChange={() => setNewUser(!newUser)} />
            <label htmlFor="newUser"> I want to Create Account</label>

            <form onSubmit={handleSubmit}>
            {newUser && <input type="text" name="name" placeholder="Name" onBlur={handleBlur} required />}<br />
                <input type="email" name="email" placeholder="Your Email" onBlur={handleBlur} required/><br />
                <input type="text" name="password" placeholder="Type password" onBlur={handleBlur} required/><br />
            {newUser && <input type="password" name="confirm-password" placeholder="Confirm password" onBlur={handleBlur} required/>}<br /><br/>
                <input className = "btn btn-success" type="submit" value="Submit" /><br />
            </form>
            <p>---Or---</p>
            {
                user.isSignedIn? 
                <button className="btn btn-danger" onClick={handleSignOut}>Log Out </button> :
                <button className="btn btn-primary" onClick={handleGoogleLogIn}>Login With Google </button>
            }
            <p style={{ color: 'red' }} >{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
            }
            
        </div>
    );
};

export default LogIn;