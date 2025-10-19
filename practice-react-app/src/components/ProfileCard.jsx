const ProfileCard = ( {name, age, bio} ) => {
    return (
        <div className="profile-card">
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default ProfileCard