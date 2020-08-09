import { TimeResponse } from '../gql-types';

const getTime = (): TimeResponse => ({
  time: new Date().toTimeString(),
});

export default getTime;
