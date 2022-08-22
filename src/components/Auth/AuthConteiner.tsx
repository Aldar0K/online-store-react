import './Auth.css';
import Button from '../Button/Button';

interface AuthConteinerProps {
    isLogIn: boolean,
    onAuthModalOpen: () => void
}

const AuthConteiner = ({ isLogIn, onAuthModalOpen }: AuthConteinerProps) => {
    return (
        <div className='auth-container'>
            <Button
                text={isLogIn ? 'Log out' : 'Log in'}
                type={isLogIn ? 'secondary' : 'primary'}
                small={false}
                disabled={false}
                onClick={onAuthModalOpen}
            />
            {!isLogIn && 
                <Button 
                    text='Sign up'
                    type='primary'
                    small={false}
                    disabled={false}
                    onClick={onAuthModalOpen}
                />
            }
        </div>
    )
}

export default AuthConteiner;
