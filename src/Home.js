import React from 'react';

const Home = props => {
    return (
        <div>
            <h3>Welcome to Acme Users. We currently have {props.number} users and are at the mercy of our Creator who can create and delete as he pleases!</h3>
        </div>
    )
}

export default Home;