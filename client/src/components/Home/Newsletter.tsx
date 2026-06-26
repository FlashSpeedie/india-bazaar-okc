import { MailIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/api";

type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/newsletter/subscribe", { email });
      toast.success(data.message || "Subscribed successfully");
      setEmail("");
    } catch (error: unknown) {
      const apiMessage =
        typeof error === "object" && error !== null && "response" in error
          ? (error as ApiError).response?.data?.message
          : undefined;
      const fallbackMessage =
        error instanceof Error ? error.message : "Subscription failed";

      toast.error(apiMessage || fallbackMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-18 px-4 sm:px-6 lg:px-8 rounded-3xl mx-auto shadow-xs mt-32 mb-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="size-16 bg-white rounded-xl flex-center mx-auto mb-6 shadow">
          <MailIcon className="size-8 text-app-green" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-semibold text-app-green mb-4">
          Stay Connected With India Bazaar OKC
        </h2>
        <p className="text-app-text-light mb-8 text-base">
          Get updates on new arrivals, seasonal Indian groceries, fresh produce,
          festival essentials, and store specials.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 rounded-xl border border-app-border focus:border-app-green focus:ring bg-white text-sm transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3.5 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors shadow-sm whitespace-nowrap active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
