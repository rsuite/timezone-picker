import React from 'react';
import iconShare from '../assets/share.svg';

export const RsLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  return <img className="custom-logo" src={iconShare} {...props} alt="Share" />;
};

RsLogo.displayName = 'RsLogo';
export default RsLogo;
