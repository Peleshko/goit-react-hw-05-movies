import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={s.spinnerWraper}>
      <Loader
        className={s.spinner}
        type="Oval"
        color="#3f51b5"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Spinner;
