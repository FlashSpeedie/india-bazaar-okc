import { ClockIcon, ExternalLinkIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { storeInfo } from "../../assets/assets";

const ContactLocation = () => {
  return (
    <section className="bg-white rounded-2xl border border-app-border p-6 sm:p-8 mb-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-semibold text-app-orange mb-2">
            Visit India Bazaar OKC
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-app-green mb-4">
            Your neighborhood Indian grocery store in Oklahoma City.
          </h2>
          <p className="text-app-text-light leading-relaxed mb-6">
            Stop by for South Asian groceries, spices, rice, lentils, snacks,
            frozen foods, sweets, fresh produce, and household essentials.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href={storeInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 text-app-text hover:text-app-green"
            >
              <MapPinIcon className="size-5 text-app-orange shrink-0" />
              <span>{storeInfo.address}</span>
            </a>
            <a
              href={storeInfo.phoneHref}
              className="flex gap-3 text-app-text hover:text-app-green"
            >
              <PhoneIcon className="size-5 text-app-orange shrink-0" />
              <span>{storeInfo.phone}</span>
            </a>
            <div className="flex gap-3 text-app-text">
              <ClockIcon className="size-5 text-app-orange shrink-0" />
              <span>{storeInfo.hours}</span>
            </div>
          </div>

          <a
            href={storeInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-app-green text-white text-sm font-semibold rounded-xl hover:bg-app-green-light"
          >
            Open in Google Maps <ExternalLinkIcon className="size-4" />
          </a>
        </div>

        <iframe
          title="India Bazaar OKC location map"
          src="https://www.google.com/maps?q=3607%20N%20Portland%20Ave%2C%20Oklahoma%20City%2C%20OK%2073112&output=embed"
          className="w-full min-h-[320px] rounded-xl border border-app-border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactLocation;
