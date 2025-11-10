
export default function Map() {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-bold text-center my-8 p-7 text-5xl sm:text-7xl text-white">
          We are from Islamabad
        </h1>
        <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
          <div className="text-gray-600 w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.4976654318584!2d72.9831731!3d33.6701757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbdabdf0b9b79%3A0x1d18ce64fe7c689e!2sUnique%20paint%20service1%2C%20wall%20paint%20selling%20paint%20wood%20Polish%20Deco%20Professional%20painters%26%20wall%20PVC%20Pinnels%20install!5e0!3m2!1sen!2s!4v1762783826025!5m2!1sen!2s"
              className="w-full h-full"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
