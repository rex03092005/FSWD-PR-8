import './ProfileCard.css';

const ProfileCard = ({ name, photo, bio }) => {
  return (
    <div className="card">
      <img src={photo} alt={name} className="card-img" />
      <h2 className="card-name">{name}</h2>
      <p className="card-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
