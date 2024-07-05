import { ContentPage } from "@/components/content/contentPage";

export const TextPage = () => {

  return (
    <div className="flex flex-row max-w-full w-full justify-between gap-8">
      <div className="w-full max-w-[100%] m-auto my-4 p-6 bg-white rounded-xl shadow-lg">
        <ContentPage />
      </div>
    </div>
  );
};
