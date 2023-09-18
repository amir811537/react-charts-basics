import { MdVerified } from 'react-icons/md';
import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
  return (
    <div className='flex items-center '>
      <MdVerified className='mr-2 text-white'></MdVerified>
      <p>{feature}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
