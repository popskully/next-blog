import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

export default function author({ name, img, designation }) {
  if (!name && !img) return <></>;

  return (
    <div className="author flex py-5">
      <Image
        alt="image"
        src={img || "/"}
        width={60}
        height={60}
        className="rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          <span className="flex justify-start gap-1 items-center">
            {name || "No Name"} <GoVerified className="text-blue-500" />
          </span>
        </Link>
        <span className="text-sm text-gray-500">{designation || "None"}</span>
      </div>
    </div>
  );
}
