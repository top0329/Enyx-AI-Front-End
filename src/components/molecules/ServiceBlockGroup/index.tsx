import React from 'react';
import ServiceBlock from '../../atoms/ServiceBlock';

function ServiceBlockGroup() {
  const data: any = {
    '1': {
      imagePath: '/src/assets/img/svc-1.svg',
      text: 'Market-leading 3D player for the web',
    },
    '2': {
      imagePath: '/src/assets/img/svc-2.svg',
      text: 'Interactive and configurable, VR and AR ready',
    },
    '3': {
      imagePath: '/src/assets/img/svc-3.svg',
      text: 'Works with all operating systems, browsers and devices',
    },
    '4': {
      imagePath: '/src/assets/img/svc-4.svg',
      text: 'Embeddable everywhere, for eCommerce, advertising and social media',
    },
    '5': {
      imagePath: '/src/assets/img/svc-5.svg',
      text: 'We can export the models to any 3D file type',
    },
  };
  const items = Object.keys(data).map((key) => {
    const { imagePath, text } = data[key];
    return (
      <li>
        <ServiceBlock imagePath={imagePath} text={text} />
      </li>
    );
  });
  return (
    <ul className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-[30px] lg:gap-0">
      {items}
    </ul>
  );
}

export default ServiceBlockGroup;
