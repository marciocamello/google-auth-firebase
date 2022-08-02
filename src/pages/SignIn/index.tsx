import { useState } from 'react';
import { auth } from '../../services/firebase';

import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';

import './styles.scss';

export function SignIn() {
    const [user, setUser] = useState<User | null>(null);

    function handleGoogleSignIn() {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log('handleGoogleSignIn::error', error);
            });
    }

    function handleGoogleSignOut() {

        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log('handleGoogleSignOut::error', error);
            });
    }

    return (
        <div className="container">
            {user && <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="User image" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>}

            {user ? (
                <button type="button" className="button" onClick={handleGoogleSignOut}>
                    <GoogleLogo /> Logout
                </button>
            ) : (
                <>
                    <h1>Access your account</h1>

                    <span>
                        Using social authentication, you can sign in with your <br />
                        <strong>Google</strong> account.
                    </span>
                    <button type="button" className="button" onClick={handleGoogleSignIn}>
                        <GoogleLogo /> Enter with Google
                    </button>
                </>
            )}
        </div>
    )
}