import { Button, Header, Input } from "../../components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UploadImg } from "../../svg";
import { ProfileType } from "../../types";
import { profileSchema } from "../../schemas";
import { useRef } from "react";

const Profile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileType>({
    resolver: yupResolver(profileSchema),
  });

  const imageRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<ProfileType> = async (data) => {
    console.log(data);
  };
  return (
    <main className="w-full min-h-screen bg-light-grey pb-20">
      <Header />
      <div className="w-full mt-4 px-4">
        <div className="w-full p-6 bg-white rounded-lg">
          <h2 className="text-dark-grey text-2xl font-bold">Profile Details</h2>
          <h3 className="mt-1 text-grey text-base font-normal">
            Add your details to create a personal touch to your profile.
          </h3>
          <div className="w-full mt-10">
            <div className="mt-6 rounded-lg bg-light-grey p-5">
              <h3 className="text-grey text-base font-normal">
                Profile picture
              </h3>
              <input type="file" hidden ref={imageRef} />
              <button
                className="border-none flex flex-col items-center justify-center gap-1 py-14 px-10 bg-light-purple rounded-lg mt-4"
                onClick={() => imageRef.current?.click()}
              >
                <UploadImg />
                <h3 className="text-electric text-base font-normal">
                  + Upload Image
                </h3>
              </button>
              <h3 className="text-grey text-xs font-normal mt-6">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </h3>
            </div>

            <form
              className="w-full mt-6 rounded-lg bg-light-grey p-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-xs text-dark-grey font-normal">
                First name*
              </label>
              <Input
                register={register}
                label="firstName"
                placeholder="e.g. alex"
                error={errors.firstName}
                type="text"
              />
              <label className="text-xs text-dark-grey font-normal">
                Last name*
              </label>
              <Input
                register={register}
                label="lastName"
                placeholder="e.g. Dylon"
                error={errors.lastName}
                type="text"
              />
              <label className="text-xs text-dark-grey font-normal">
                Email
              </label>
              <Input
                register={register}
                label="email"
                placeholder="e.g. alex@email.com"
                error={errors.email}
                type="email"
              />
            </form>
            <div className="h-[1px] w-full bg-borders mt-6"></div>
            <Button
              type="submit"
              text="Save"
              className="mt-4"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
