import './ProfileCard.css';

const ProfileCard = ( {name, age, bio} ) => {
    return (
        <div className="profile-card">
            <h1 className="profile-name"><strong>Name:</strong> {name}</h1>
            <p className="profile-age"><strong>Age:</strong> {age}</p>
            <p className="profile-bio"><strong>Bio:</strong> {bio}</p>
        </div>
    )
}

export default ProfileCard