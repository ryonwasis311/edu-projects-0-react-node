import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  title:sample([
    'SuperShoes1',
    'SuperShoes6',
    'SuperShoes5',
    'SuperShoes4',
    'SuperShoes3',
    'SuperShoes2'
  ]),
  description: sample([
    'These shoes are the most fashion',
    'These shoes are the most big',
    'These shoes are the most heavy',
    'These shoes are the most expensive',
    'These shoes are the most light',
  ]),
  price: sample([
    '200$',
    '210$',
    '120$',
    '70$',
    '50$',
    '80$',
    '40$',
    '120$',
    ' 20$',
  ]),
}));

export default users;
