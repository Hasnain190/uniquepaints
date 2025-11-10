import { PHONE_NUMBER } from "@/constants";

export default function Button() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      className=" text-white px-6 py-3 text-2xl rounded-full hover:bg-blue-700 transition-colors duration-200 mt-6 bg-blue-600 cursor-pointer"
    >
      Get Free Quote
    </a>
  );
}
