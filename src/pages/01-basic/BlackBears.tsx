import { useBearStore } from '../../stores';
import { WhiteCard } from '../../components';

export const BlackBears = () => {
  
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increaseBlackBears(10)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-10)}>-1</button>
      </div>
    </WhiteCard>
  );
};
