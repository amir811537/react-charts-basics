import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const SinglePriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className='bg-blue-400 rounded-md p-4 text-white'>
      <h2>
        <span className='text-3xl font-bold'>{price}</span>
      </h2>
      <p className='text-red-600'>{name}</p>

      {features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}

<button className='bg-yellow-300 rounded-full hover:bg-yellow-600 w-full py-4 font-extrabold'> buy Now</button>
    </div>
  );
};

SinglePriceOption.propTypes = {
  option: PropTypes.object,
};

export default SinglePriceOption;
