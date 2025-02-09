import { MailIcon, BellIcon, SendIcon } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
          <BellIcon className="mr-3 h-8 w-8 text-indigo-400" />
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest updates on new
          projects
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-12 pr-4 py-3 rounded-full text-gray-800 w-full bg-gray-100"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
          >
            Subscribe
            <SendIcon className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
