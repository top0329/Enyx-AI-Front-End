import React from 'react';
import SocialLink from '../../atoms/SocialLink';

function SocialLinks() {
  const data: any = {
    instagram: {path: '#', social: 'instagram'},
    discord: {path: '#', social: 'discord'},
    twitter: {path: '#', social: 'twitter'},
  }
  const items = Object.keys(data).map((key) => {
    const { path, social } = data[key];
    return <li key={key}><SocialLink path={path} social={social} /></li>
  })
  return (
    <ul className="flex justify-end items-center gap-[20px]">
      {items}
    </ul>
  );
}

export default SocialLinks;
