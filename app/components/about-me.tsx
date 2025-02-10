import Image from "next/image";
import Link from "next/link";
import { UserIcon, BriefcaseIcon, RocketIcon, MailIcon } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/me.jpg"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center">
              <UserIcon className="mr-3 h-8 w-8 text-indigo-400" />
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-6 flex items-start">
              <BriefcaseIcon className="mr-3 h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
              <span>
                Hello! Im [Your Name], a passionate SaaS enthusiast and
                technology expert. With over [X] years of experience in the
                software industry, Ive dedicated my career to exploring and
                showcasing innovative SaaS solutions that transform businesses.
              </span>
            </p>
            <p className="text-xl text-gray-300 mb-6 flex items-start">
              <RocketIcon className="mr-3 h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
              <span>
                My mission is to bridge the gap between cutting-edge SaaS
                products and the businesses that need them. Through this
                gallery, I aim to highlight the most impactful and revolutionary
                SaaS tools available today.
              </span>
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-700 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-600 transition-colors inline-flex items-center"
              >
                <MailIcon className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
