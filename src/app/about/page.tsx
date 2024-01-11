import Link from 'next/link';
import './page.css';
import Bike from '@/img/pngegg (17) 1.png';
import Image from 'next/image'


const About = () => {
  return (
    <>
      <main>
        <div className='history'>
          <h1 className='text11'>Наша історія</h1>
          <h5 className='text12'>Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar gravida odio faucibus feugiat elementum. Nullam nunc blandit purus leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at. Risus fermentum bibendum convallis nec. Nec fermentum faucibus risus diam nisi at lacus vitae ultricies. Sodales phasellus blandit posuere senectus interdum. Massa nunc tellus cras egestas sem risus. Ut semper at nunc egestas.</h5>
          <h5 className='text12'>Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus amet proin enim porttitor arcu laoreet. Volutpat posuere eu blandit egestas faucibus. Sit lacinia feugiat maecenas tincidunt aliquet. Sodales suscipit ac sollicitudin fermentum. Egestas quis sagittis augue egestas sit volutpat at diam.</h5>
        </div>
        <h1 className='text11'>Чому вартує обрати нас?</h1>
        <div className='frame'></div>
      </main>
    </>
  );
};

export default About;
