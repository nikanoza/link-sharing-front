import { Button, Header } from "../../components";
import { Empty } from "../../svg";

const Home = () => {
  return (
    <main className="w-full h-full bg-light-grey">
      <Header />
      <div className="w-full flex items-center mt-4 px-4">
        <div className="hidden"></div>
        <div className="w-full p-6 bg-white rounded-lg">
          <h2 className="text-dark-grey text-2xl font-bold">
            Customize your links
          </h2>
          <h3 className="mt-1 text-grey text-base font-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </h3>
          <form className="w-full mt-10">
            <button
              type="button"
              className="w-full rounded-lg border -border-solid border-electric text-electric text-base font-semibold py-3"
            >
              + Add new link
            </button>
            <div className="mt-6 rounded-lg bg-light-grey flex flex-col gap-6 items-center p-5 pb-10">
              <Empty />
              <h2 className="text-dark-grey text-2xl font-bold">
                Let’s get you started
              </h2>
              <h3 className="text-grey text-base font-normal">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
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

export default Home;
