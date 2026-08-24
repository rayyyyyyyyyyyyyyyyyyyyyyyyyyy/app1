import React from 'react';
import {userContext} from './context'

export default function Content2() {
    let [user, setUser] = React.useContext(userContext)

    const headerStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10
    }

    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('Tom Jerry')
    }

    return (
        <div style={headerStyle}>
            {
                (user)
                ?<span>Hello {user}</span>
                :<span>Please <a href=" " onClick={onClickSignin}>
                    Sign in</a></span>
            }
        </div>
    )
}