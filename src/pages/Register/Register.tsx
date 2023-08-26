import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterType } from "../../types";
import { registerSchema } from "../../schemas";
import { Email, LogoText, Password } from "../../svg";
import { Button, Input } from "../../components";
import { Link } from "@tanstack/react-router";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    console.log(data);
  };
  return (
    <main className="w-full h-full bg-light-grey p-8 flex flex-col">
      <LogoText />
      <h1 className="text-2xl text-dark-grey font-bold mt-[72px]">
        Create account
      </h1>
      <h3 className="text-grey text-base font-normal mt-2">
        Let’s get you started sharing your links!
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
          Create Password
        </label>
        <Input
          register={register}
          label="password"
          placeholder="At least .8 characters"
          icon={<Password className="absolute top-4 left-4" />}
          error={errors.password}
        />
        <label className="text-xs text-dark-grey font-normal mt-3">
          Confirm password
        </label>
        <Input
          register={register}
          label="confirmPassword"
          placeholder="At least .8 characters"
          icon={<Password className="absolute top-4 left-4" />}
          error={errors.confirmPassword}
        />
        <Button type="submit" text="Create new account" className="mt-3" />
      </form>
      <h3 className="text-center text-base text-grey font-normal mt-6">
        Already have an account?
      </h3>
      <Link
        to="/login"
        className="text-center text-base text-electric font-normal mx-auto"
      >
        Login
      </Link>
    </main>
  );
};

export default Register;
