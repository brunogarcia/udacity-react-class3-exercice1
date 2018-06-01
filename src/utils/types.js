import { shape, string, number } from 'prop-types';

const user = shape({
  firstName: string.isRequired,
  lastName: string.isRequired,
  username: string.isRequired,
  gamesPlayed: number.isRequired,
});

export default { user };
