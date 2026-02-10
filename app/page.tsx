import Image from "next/image";
import Nav from "@/components/Nav";
import Middle from "@/components/Middle";
import Games from "@/components/Games";

export default function Home() {
  return (
    <>
      {/* Background only — stays behind so it doesn't block clicks */}
      <div
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 -z-10 min-h-screen w-full"
        aria-hidden
      />
      {/* Content on top with normal stacking so links/buttons are clickable */}
      <div className="relative min-h-screen w-full flex flex-col">
        <div className="flex-1 w-full bg-black/20  flex flex-col items-center">
          <Middle />
          <Games />
        </div>
      </div>
    </>
  );
}
