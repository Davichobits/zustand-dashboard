import { WhiteCard } from '../../components';

export const PolarBears = () => {
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className='flex flex-col md:flex-row'>
        <button> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> 0 </span>
        <button>-1</button>
      </div>
    </WhiteCard>
  );
};
