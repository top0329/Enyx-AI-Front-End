import Model3d from '../../molecules/Model3d';

function Model3dPage() {
  const data1: any = {
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
  };
  const data2: any = {
    '1': {
      imagePath: '/src/assets/img/model-5.png',
      promptText: 'a plush toy of a corgi nurse',
    },
    '2': {
      imagePath: '/src/assets/img/model-6.png',
      promptText: 'a bald eagle carved out of wood',
    },
    '3': {
      imagePath: '/src/assets/img/model-7.png',
      promptText: 'ghost eating a hamburger',
    },
    '4': {
      imagePath: '/src/assets/img/model-8.png',
      promptText: 'a crab, low poly',
    },
  };
  const data3: any = {
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
      imagePath: '/src/assets/img/model-5.png',
      promptText: 'a plush toy of a corgi nurse',
    },
    '5': {
      imagePath: '/src/assets/img/model-6.png',
      promptText: 'a bald eagle carved out of wood',
    },
    '6': {
      imagePath: '/src/assets/img/model-7.png',
      promptText: 'ghost eating a hamburger',
    },
  };
  return (
    <>
      <section className="bg-custom-image text-white py-[70px] mb-[50px]">
        <div className="container max-w-1280px] mx-auto">
          <div className="mx-6">
            <div className="flex flex-wrap px-3 max-w-full">
              <div className="w-[750px] mx-auto">
                <h1 className="text-center text-[40px] mt-0 font-medium leading-[1.2] mb-2">
                  Generate Free 3D models. <br />
                  Trendy. Cover all subjects.
                </h1>
                <div className="h-[50px] flex items-center justify-between rounded-[10px] bg-white bg-opacity-30 overflow-hidden mb-[10px] mt-[40px]">
                  <input
                    className="w-full m-0 bg-no-repeat pl-[20px] text-white box-border h-full rounded-r-none border-[1px] rounded-[10px] border-solid border-input-color bg-input-color placeholder-white active:border-white focus:border-white focus:bg-default focus:outline-none"
                    type="file"
                    placeholder="Drag the image here or upload a file"
                  />
                </div>
                <div className="h-[50px] flex items-center justify-between rounded-[10px] bg-white bg-opacity-30 overflow-hidden mb-[10px] mt-[40px]">
                  <input
                    className="w-full m-0 bg-no-repeat pl-[20px] text-white box-border h-full rounded-r-none border-[1px] rounded-[10px] border-solid border-input-color bg-input-color placeholder-white active:border-white focus:border-white focus:bg-default focus:outline-none"
                    type="text"
                    placeholder="Enter prompt here"
                  />
                </div>
                <ul className="flex gap-x-[5px] font-medium">
                  <li>Popular now:</li>
                  <li>
                    <a href="#">communication,</a>
                  </li>
                  <li>
                    <a href="#">smartphone,</a>
                  </li>
                  <li>
                    <a href="#">search,</a>
                  </li>
                  <li>
                    <a href="#">data,</a>
                  </li>
                  <li>
                    <a href="#">arrow,</a>
                  </li>
                  <li>
                    <a href="#">money,</a>
                  </li>
                  <li>
                    <a href="#">art</a>
                  </li>
                </ul>
                <div className="w-full flex justify-center">
                  <button className="h-[50px] w-[220px] justify-center bg-white text-default flex items-center font-bold text-base uppercase px-[30px] py-[14px] rounded-lg border-[1px] border-solid border-white">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[50px] overflow-hidden">
        <div className="container max-w-[1280px] mx-auto">
          <div className="mx-6">
            <div className="grid grid-cols-12 mb-[100px]">
              <div className="col-span-12 flex flex-auto w-full">
                <div className="mb-[100px] box-border">
                  <h1 className="text-[40px] mt-0 font-medium">
                    <span className="text-default">My</span> 3D models
                  </h1>
                </div>
              </div>
              <Model3d data={data1} />
            </div>
            <div className="grid grid-cols-12 mb-[100px]">
              <div className="col-span-12 flex flex-auto w-full">
                <div className="mb-[100px] box-border">
                  <h1 className="text-[40px] mt-0 font-medium">
                    <span className="text-default">Trending</span> 3D models
                  </h1>
                </div>
              </div>
              <Model3d data={data2} />
            </div>
            <div className="grid grid-cols-12 mb-[100px]">
              <div className="col-span-3 px-3">
                <ul>
                  <li className="leading-[1.8]">
                    <h4 className="mb-[20px] text-2xl font-medium">
                      Сategories
                    </h4>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Animal
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Background
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Business
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Character
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Decoration
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Ecology
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Education
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Events
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Food
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      HealthCare
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Hobby
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Holidays
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Home
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Lettering
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Nature
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Objects
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Occupation
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      People
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Space
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Sport
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Sticker
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Symbol
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Technologies
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Transport
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Travel
                    </a>
                  </li>
                  <li className="leading-[1.8]">
                    <a className="text-[20px] font-medium" href="#">
                      Web Element
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-9 grid grid-cols-9">
                <Model3d data={data3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Model3dPage;
