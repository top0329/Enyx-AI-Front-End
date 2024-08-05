import Model3dTitle from '../../atoms/Model3dTitle';
import Model3d from '../../molecules/Model3d';

function Model3dArea() {
  const data: any = {
    '1': {
      imagePath: '/src/assets/img/model-1.png',
      promptText: 'frog wearing a sweater',
    },
    '2': {
      imagePath: '/src/assets/img/model-2.png',
      promptText: 'a pig wearing a backpack',
    },
    '3': {
      imagePath: '/src/assets/img/model-3.png',
      promptText: 'a lemur taking notes in a journal',
    },
    '4': {
      imagePath: '/src/assets/img/model-4.png',
      promptText:
        'eggshell broken in two with an adorable chick standing next to it',
    },
    '5': {
      imagePath: '/src/assets/img/model-5.png',
      promptText: 'a plush toy of a corgi nurse',
    },
    '6': {
      imagePath: '/src/assets/img/model-6.png',
      promptText: 'a bald eagle carved out of wood',
    },
    '7': {
      imagePath: '/src/assets/img/model-7.png',
      promptText: 'ghost eating a hamburger',
    },
    '8': {
      imagePath: '/src/assets/img/model-8.png',
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
