import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className='flexbox-column-center min-h-screen gap-3'>
      <FadeLoader color='#fff' />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
