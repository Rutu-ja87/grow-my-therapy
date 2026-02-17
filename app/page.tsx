import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO ================= */}
      <section className="bg-[#f4f7f8] py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
            Trauma-Informed Therapy in Austin, Texas
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Dr. Maya Reynolds, PsyD provides compassionate, evidence-based
            therapy for adults navigating anxiety, trauma, and relationship
            challenges in Austin.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition">
              Schedule a Consultation
            </button>

            <button className="border border-teal-700 text-teal-700 px-6 py-3 rounded-full hover:bg-teal-700 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            How I Can Support You
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "Trauma-Informed Individual Therapy",
                desc: "Supporting adults in processing trauma, navigating life transitions, and building emotional resilience.",
              },
              {
                title: "Relationship & Attachment Work",
                desc: "Helping individuals and couples improve communication, strengthen attachment, and deepen connection.",
              },
              {
                title: "Anxiety & Nervous System Regulation",
                desc: "Practical tools to reduce overwhelm, regulate stress responses, and cultivate lasting stability.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#f4f7f8] p-10 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
              src="/images/therapist.jpg"
              alt="Dr. Maya Reynolds"
              width={450}
              height={550}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dr. Maya Reynolds, PsyD provides trauma-informed therapy for adults 
              navigating anxiety, trauma, and relationship challenges in Austin, Texas.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Her approach integrates attachment-based therapy, nervous system regulation,
              and evidence-based practices to help clients build resilience and lasting change.
            </p>
            <p className="text-gray-600 leading-relaxed">
              She offers both in-person sessions in Austin and virtual therapy options.
            </p>
          </div>

        </div>
      </section>

      {/* ================= OUR OFFICE ================= */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Office
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Located in Austin, our welcoming office provides a calm, private
              environment designed to support reflection, safety, and healing.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every detail of the space reflects a commitment to warmth and
              professionalism.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow">
              <Image
                src="/images/office1.jpg"
                alt="Therapy Office Exterior"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-48 rounded-xl overflow-hidden shadow">
              <Image
                src="/images/office2.jpg"
                alt="Therapy Office Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-teal-700 py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Ready to Begin Your Healing Journey?
          </h2>

          <p className="mt-4 text-white/90">
            Taking the first step toward therapy can feel overwhelming.
            Support is here when you are ready.
          </p>

          <button className="mt-8 bg-white text-teal-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Schedule a Consultation
          </button>
        </div>
      </section>

    </main>
  );
}
