import ServiceBlock from '../../atoms/ServiceBlock';
import ServiceImage1 from '../../../assets/img/svc-1.svg';
import ServiceImage2 from '../../../assets/img/svc-2.svg';
import ServiceImage3 from '../../../assets/img/svc-3.svg';
import ServiceImage4 from '../../../assets/img/svc-4.svg';
import ServiceImage5 from '../../../assets/img/svc-5.svg';

function ServiceBlockGroup() {
  const data: any = {
    '1': {
      imagePath: ServiceImage1,
      text: 'Market-leading 3D player for the web',
    },
    '2': {
      imagePath: ServiceImage2,
      text: 'Interactive and configurable, VR and AR ready',
    },
    '3': {
      imagePath: ServiceImage3,
      text: 'Works with all operating systems, browsers and devices',
    },
    '4': {
      imagePath: ServiceImage4,
      text: 'Embeddable everywhere, for eCommerce, advertising and social media',
    },
    '5': {
      imagePath: ServiceImage5,
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
