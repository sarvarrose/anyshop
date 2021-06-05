import Commerce from '@chec/commerce.js';

let setDebug = process.env.NODE_ENV === 'production' ? false : true;

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  setDebug,
);
