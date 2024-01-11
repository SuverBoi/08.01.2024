import Link from 'next/link';
import './xiaomi.css';
import Bike from '@/img/pngegg (17) 1.png';
import Image from 'next/image'

const Xiaomi = () => {
    return(
        <>
        <div className="xiaomi">
            <div>
                <h1>Xiaomi Mi Electric Scooter Essential Black</h1>
                
                <h3>Lorem ipsum dolor sit amet consectetur. Venenatis est lobortis commodo amet a ultrices. Aliquet dictum nisl natoque viverra platea blandit ac. </h3>

                <Link href='/' className="text1">Детальніше</Link>
            </div>
            <div>
            <Image src={Bike} alt="Bike-xiomi" width="500" height="600" />
            </div>
        </div>

    
       

        </>
    );
  };
  
  export default Xiaomi;
  