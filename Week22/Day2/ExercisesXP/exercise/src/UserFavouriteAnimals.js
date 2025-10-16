import React from 'react'

class UserFavouriteAnimals extends React.Component {
    render() {   
        const { user } = this.props;
        return (
            <ul>
                {user.favAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>   
        )
    }
}      

export default UserFavouriteAnimals;