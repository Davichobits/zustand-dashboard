import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const PandaBears = () => {

  const pandaBears = useBearStore(state => state.pandaBears)

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className='flex flex-col md:flex-row'>
        <button> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {pandaBears} </span>
        <button>-1</button>
      </div>
    </WhiteCard>
  );
};
