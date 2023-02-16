import Image from "next/image";

export default function error() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-red-500 py-10">
        Something went wrong
      </h1>
      <Image
        className="mx-auto"
        alt="Error"
        src={"/images/not_found.png"}
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
