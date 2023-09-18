import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className=" hover:bg-yellow-500 px-6 mr-10 ">
        <a href={route.path}>{route.name}</a>
        
             </li>
    );
};

export default Link;
Link.propTypes = {
route: PropTypes.object

}