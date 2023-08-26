import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, LogoText, Password } from "../../svg";
import { LoginType } from "../../types";
import { Button, Input } from "../../components";
import { Link } from "@tanstack/react-router";
import { loginSchema } from "../../schemas";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log(data);
  };
  return (
    <main className="w-full h-full bg-light-grey p-8 flex flex-col">
      <LogoText />
      <h1 className="text-2xl text-dark-grey font-bold mt-[72px]">Login</h1>
      <h3 className="text-grey text-base font-normal mt-2">
        Add your details below to get back into the app
      </h3>
      <form className="w-full mt-10" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xs text-dark-grey font-normal">
          Email address
        </label>
        <Input
          register={register}
          label="email"
          placeholder="e.g. alex@email.com"
          icon={<Email className="absolute top-4 left-4" />}
          error={errors.email}
        />
        <label className="text-xs text-dark-grey font-normal mt-3">
          Password
        </label>
        <Input
          register={register}
          label="password"
          placeholder="Enter your password"
          icon={<Password className="absolute top-4 left-4" />}
          error={errors.password}
        />
        <Button type="submit" text="Login" className="mt-3" />
      </form>
      <h3 className="text-center text-base text-grey font-normal mt-6">
        Don’t have an account?
      </h3>
      <Link
        to="/register"
        className="text-center text-base text-electric font-normal mx-auto"
      >
        Create account
      </Link>
    </main>
  );
};

export default Login;
