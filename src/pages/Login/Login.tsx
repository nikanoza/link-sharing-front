import { useForm, SubmitHandler } from "react-hook-form";
import { LogoText } from "../../svg";
import { LoginType } from "../../types";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log(data);
  };
  return (
    <main className="w-full h-full bg-light-grey p-8">
      <LogoText />
      <h1 className="text-2xl text-dark-grey font-bold mt-[72px]">Login</h1>
      <h3 className="text-grey text-base font-normal mt-2">
        Add your details below to get back into the app
      </h3>
      <form className="w-full mt-10" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xs text-dark-grey font-normal">
          Email address
        </label>
      </form>
    </main>
  );
};

export default Login;
