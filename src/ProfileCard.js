function ProfileCard({ title, handle, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
