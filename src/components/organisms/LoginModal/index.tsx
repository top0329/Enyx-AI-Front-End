import IconClose from '../../atoms/IconClose';
import IconEye from '../../../assets/img/visibility.svg';
import IconGoogle from '../../../assets/img/goole.svg';
import ModalFormButton from '../../atoms/ModalFormButton';

function LoginModel() {
  return (
    <div>
      <div className="rounded-[20px] relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-0 border-[1px] border-[rgba(0,0,0,.2)] max-w-[550px]">
        <div className="px-[100px] py-[80px] text-center">
          <button
            className="flex justify-center items-center absolute top-[20px] right-[20px] box-content p-1 opacity-50 bg-no-repeat bg-center border-0 rounded-[4px]"
            type="button"
          >
            <IconClose className="w-6 h-6" />
          </button>
          <h1 className="text-[60px] font-medium mt-0 text-center mb-[60px]">
            Login
          </h1>
          <form action="">
            <div className="h-[50px] mb-4 rounded-[10px] w-full relative">
              <input
                className="w-full h-full bg-no-repeat px-[20px] pt-[13px] pb-[14px] rounded-[10px] border-[1px] border-f-gray"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="h-[50px] mb-4 rounded-[10px] w-full relative">
              <input
                className="w-full h-full bg-no-repeat px-[20px] pt-[13px] pb-[14px] rounded-[10px] border-[1px] border-f-gray"
                type="password"
                placeholder="Password"
              />
              <img
                className="absolute right-[10px] top-1/2 cursor-pointer transform -translate-y-1/2"
                src={IconEye}
                alt=""
              />
            </div>
            <button className="text-default w-max-content block text-center ml-auto border-b-[1px] mb-[60px]">
              Forgot password?
            </button>
            <ModalFormButton text={'login'} />
            <button className="text-black tracking-[0.25px] bg-none w-full relative mb-4 text-[14px] px-[30px] py-3.5 rounded-[10px] box-border uppercase font-bold inline-block border-[1px] border-default leading-[1.3] text-center items-center hover:bg-default hover:text-white">
              <img
                className="absolute left-[15px] max-w-full inline-block align-middle"
                src={IconGoogle}
                alt=""
              />{' '}
              Sign in with Google
            </button>
          </form>
          <p className="text-[14px] mb-0 mt-[10px] text-f-gray leading-[1.3]">
            {"Don't have an account? "}{' '}
            <button className="text-default text-center border-b-[1px]">
              Registrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModel;
