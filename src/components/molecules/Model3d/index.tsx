import Model1 from '../../../assets/img/model-1.png';
import Download from '../../../assets/img/download.svg';

function Model3d(props: { data: any }) {
  const data = props.data;
  const items = Object.keys(data).map((key) => {
    const { imagePath, promptText } = data[key];
    return (
      <div className="col-span-12 md:col-span-6 lg:col-span-3 px-3" key={key}>
        <div className="rounded-[20px] bg-white border-grey border-[1px] shadow-custom text-center mb-[40px] pb-[20px] overflow-hidden">
          <i>
            <img
              className="align-middle"
              src={imagePath}
              alt=""
              onClick={() => console.log(Model1)}
            />
          </i>
          <p className="h-[80px] leading-[1.2] mt-[20px] mb-4 text-[18px] lg:text-[20px] text-f-gray">
            {promptText}
          </p>
          <div className="flex justify-center">
            <button className="uppercase font-bold text-default flex justify-center items-center gap-[10px]">
              Download{' '}
              <img className="inline-block max-w-full" src={Download} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>{items}</>
  );
}

export default Model3d;
