import { Link } from "react-router-dom";
import ContactLocation from "../components/Home/ContactLocation";
import { categoriesData, storeInfo } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen bg-app-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-app-orange mb-2">
            Contact & Location
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-app-green mb-3">
            India Bazaar Oklahoma City
          </h1>
          <p className="text-app-text-light max-w-2xl">
            Visit India Bazaar OKC for Indian groceries, South Asian pantry
            staples, spices, snacks, frozen foods, fresh produce, sweets, and
            everyday essentials in Oklahoma City.
          </p>
        </div>

        <ContactLocation />

        <section className="bg-white rounded-2xl border border-app-border p-6 sm:p-8 mb-20">
          <h2 className="text-xl font-semibold text-app-green mb-3">
            What You Will Find Here
          </h2>
          <p className="text-sm text-app-text-light mb-5">
            Browse popular India Bazaar OKC departments online, then stop by the
            store or continue shopping through the site.
          </p>
          <div className="flex flex-wrap gap-2">
            {categoriesData.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="px-3 py-2 text-sm bg-app-cream text-app-green rounded-lg hover:bg-app-cream-dark"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-app-text-light">
            <p>{storeInfo.address}</p>
            <p>{storeInfo.phone}</p>
            <p>{storeInfo.hours}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
