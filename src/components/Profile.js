import React from 'react';
import './Profile.scss';
import Icon from './Icon';

function Profile({ profile, onFollow, onSeeProfile }) {
  const imgixPath = 'https://vestiairecollective-dev.imgix.net'; // Should be somewhere else (like in env in ngx)
  const { picture, name, location } = profile.describes;

  const avatarUrl = picture
    ? `${imgixPath}/profil/${picture}`
    : `${imgixPath}/profil/missing_avatar.gif`;
  
  const ctaClasses = "profileDesc__cta vc-text-xs vc-btn vc-btn--small"
  const cta = profile.isFollowed
    ? <a onClick={onSeeProfile} className={ctaClasses + " vc-btn--secondary"}>See profile</a>
    : <button onClick={onFollow} className={ctaClasses + " vc-btn--default"}>Follow</button>
  
  return (  
    <div className="feedCardProfile">
      {/* TODO: It should be a link here */}
      <div className="profileDesc">
        <img className="profileDesc__pic" src={avatarUrl} alt="" />
        <div className="profileDesc__info">
          <p className="profileDesc__info__name vc-text-m">
            {name}
          </p>
          <div className="profileDesc__info__loc vc-text-s">
            <div className="profileDesc__info__loc__icon">
              <Icon name="pin-full" />
            </div>
            {location}
          </div>
        </div>
        {cta}
      </div>
    </div>
  );
}

export default Profile;