import { Button, Header } from "../../components";
import { UploadImg } from "../../svg";

const Profile = () => {
  return (
    <main className="w-full h-full bg-light-grey">
      <Header />
      <div className="w-full mt-4 px-4">
        <div className="w-full p-6 bg-white rounded-lg">
          <h2 className="text-dark-grey text-2xl font-bold">Profile Details</h2>
          <h3 className="mt-1 text-grey text-base font-normal">
            Add your details to create a personal touch to your profile.
          </h3>
          <form className="w-full mt-10">
            <div className="mt-6 rounded-lg bg-light-grey p-5">
              <h3 className="text-grey text-base font-normal">
                Profile picture
              </h3>
              <button className="border-none flex flex-col items-center justify-center gap-1 py-14 px-10 bg-light-purple rounded-lg mt-4">
                <UploadImg />
                <h3 className="text-electric text-base font-normal">
                  + Upload Image
                </h3>
              </button>
              <h3 className="text-grey text-xs font-normal mt-6">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </h3>
            </div>
            <div className="h-[1px] w-full bg-borders mt-6"></div>
            <Button type="submit" text="Save" className=" bg-opacity-25 mt-4" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
