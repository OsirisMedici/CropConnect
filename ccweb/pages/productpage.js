import Image from 'next/Image';
import Background from '../public/assests/image2.jpg';

const productpage = () => {
  return (
    <div className="md:flex items-center justify-center md:h-screen mb-[50rem] left-0 top-0">
      <Image className=" h-2/3 w-full object-cover" alt="farming" src={Background} />
    </div>
  )
}

export default productpage