import React from 'react';
import './Profile.scss';

function Profile({ profile }) {
  const { picture, name, location } = profile.describes;
  const imgixPath = 'https://vestiairecollective-dev.imgix.net';
  const avatarUrl = picture
    ? `${imgixPath}/profil/${picture}`
    : `${imgixPath}/profil/missing_avatar.gif`;
  
  return (  
    <div className="feedCardProfile">
      <div className="profileDesc">
        <img className="profileDesc__pic" src={avatarUrl} alt="" />
        <div className="profileDesc__info">
          <p className="profileDesc__info__name vc-text-m">
            {name}
          </p>
          <div className="profileDesc__info__loc vc-text-s">
            {/* <vc-sprite-icons class="profileDesc__info__loc__icon" name="pin-full"></vc-sprite-icons> */}
            {location}
          </div>
        </div>
        <button className="profileDesc__cta vc-text-xs vc-btn vc-btn--default vc-btn--small">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Profile;