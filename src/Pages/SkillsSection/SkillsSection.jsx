import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsSection = () => {
    return (
        <div>
            This is skills section
            <Marquee autoFill={true} pauseOnHover={true}>
                <img src="https://i.ibb.co/v49XzP5t/js.png" className='w-auto h-20 object-cover mx-10' alt="" />
                <img src="https://i.ibb.co/vxbkQh3F/react.png" className='w-auto h-20 object-cover mx-10' alt="" />
                <img src="https://i.ibb.co/4Q0nJ3H/firebase.png" className='w-auto h-20 object-cover mx-10' alt="" />
                <img src="https://i.ibb.co/fdtWjNpm/mongodb.png" className='w-auto h-20 object-cover mx-10' alt="" />
                <img src="https://i.ibb.co/SDZw3Ft8/express.png" className='w-auto h-20 object-cover mx-10' alt="" />
                <img src="https://i.ibb.co/TxWGV4r5/node.png" className='w-auto h-20 object-cover mx-10' alt="" />








            </Marquee>
        </div>
    );
};

export default SkillsSection;