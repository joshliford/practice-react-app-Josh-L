import ProfileCard from "./ProfileCard"

const ProfileContainer = () => {
    return (
        <div className="profile-container">
            <ProfileCard
                name="Josh L"
                age={28}
                bio="Jr. Applications Developer who is passionate about AI and enjoys playing the guitar."
            />
            <ProfileCard
                name="David G"
                age={78}
                bio="Legendary guitarist and vocalist of Pink Floyd."
            />
            <ProfileCard
                name="Jerry C"
                age={58}
                bio="Incredible guitarist, vocalist, and songwriter for Alice in Chains."
            />
        </div>
    )
}

export default ProfileContainer