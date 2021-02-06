export function getPictureUrl(pic) {
  if (!pic)
    return 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return /^https?:\/\/.*/.test(pic)
    ? pic
    : `${process.env.REACT_APP_BACK_URL}/${pic}`;
}

export function getCvUrl(pdf) {
  return `${process.env.REACT_APP_BACK_URL}/${pdf}`;
}
