import Image from 'next/image';
import React from 'react';

const Aboutpage = () => {
  return (
    <div>
      <h2>Hello world welcome about section</h2>
      <Image
        src="/public/YourStack-with.png"
        width={300}
        height={300}
        alt="Your stack"
      ></Image>
    </div>
  );
};

export default Aboutpage;
