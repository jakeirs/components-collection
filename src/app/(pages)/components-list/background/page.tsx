import StarsCanvas from "@/app/(pages)/components-list/background/StarsBackground";
import DotsInBg from "@/app/(pages)/components-list/background/DotsInBg";

export default function BackgroundPage() {
  return (
    <section className="flex justify-center bg-white h-screen">
      <DotsInBg />
      <StarsCanvas />
      <div className="max-w-[660px] mx-6 my-12">
        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          This is Tech Page
        </span>
      </div>
    </section>
  );
}
