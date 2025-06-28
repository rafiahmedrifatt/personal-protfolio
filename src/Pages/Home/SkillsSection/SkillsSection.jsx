import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsSection = () => {
    return (
        <div className='mb-20'>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-800 mb-3">
                        I can work <span className="text-blue-600 relative">
                            with
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">Continuously learning other Technologies as well</p>
                </div>
            </div>
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