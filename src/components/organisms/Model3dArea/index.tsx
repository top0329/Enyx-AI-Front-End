import Model3dTitle from '../../atoms/Model3dTitle';
import Model3d from '../../molecules/Model3d';
import ModelImage1 from '../../../assets/img/model-1.png';
import ModelImage2 from '../../../assets/img/model-2.png';
import ModelImage3 from '../../../assets/img/model-3.png';
import ModelImage4 from '../../../assets/img/model-4.png';
import ModelImage5 from '../../../assets/img/model-5.png';
import ModelImage6 from '../../../assets/img/model-6.png';
import ModelImage7 from '../../../assets/img/model-7.png';
import ModelImage8 from '../../../assets/img/model-8.png';

function Model3dArea() {
  const data: any = {
    '1': {
      imagePath: ModelImage1,
      promptText: 'frog wearing a sweater',
    },
    '2': {
      imagePath: ModelImage2,
      promptText: 'a pig wearing a backpack',
    },
    '3': {
      imagePath: ModelImage3,
      promptText: 'a lemur taking notes in a journal',
    },
    '4': {
      imagePath: ModelImage4,
      promptText:
        'eggshell broken in two with an adorable chick standing next to it',
    },
    '5': {
      imagePath: ModelImage5,
      promptText: 'a plush toy of a corgi nurse',
    },
    '6': {
      imagePath: ModelImage6,
      promptText: 'a bald eagle carved out of wood',
    },
    '7': {
      imagePath: ModelImage7,
      promptText: 'ghost eating a hamburger',
    },
    '8': {
      imagePath: ModelImage8,
      promptText: 'a crab, low poly',
    },
  };
  return (
    <section className="mb-[50px] overflow-hidden">
      <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
        <div className="mx-6 grid grid-cols-12">
          <Model3dTitle />
          <Model3d data={data} />
        </div>
      </div>
    </section>
  );
}

export default Model3dArea;
