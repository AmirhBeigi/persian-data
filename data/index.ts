import placesIcon from './places/icon.svg';
import financialIcon from './financial/icon.svg';
import phoneIcon from './phone/icon.svg';
import writingIcon from './writing/icon.svg';

import { places } from './places';
import { financial } from './financial';
import { phone } from './phone';
import { writing } from './writing';

export const categories = [
  {
    title: 'Places',
    count: places.length,
    link: '/places',
    icon: placesIcon,
  },
  {
    title: 'Financial',
    count: financial.length,
    link: '/financial',
    icon: financialIcon,
  },
  {
    title: 'Phone',
    count: phone.length,
    link: '/phone',
    icon: phoneIcon,
  },
  {
    title: 'Writing',
    count: writing.length,
    link: '/writing',
    icon: writingIcon,
  },
];
