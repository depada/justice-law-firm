import { notFound } from "next/navigation";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";
import { Mail, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return attorneys.map((attorney) => ({
    slug: attorney.id,
  }));
}

export default function AttorneyProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const attorney = attorneys.find((a) => a.id === params.slug);

  if (!attorney) {
    notFound();
  }

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-charcoal-950">
        <div className="page-container">
          <Link
            href="/team"
            className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Attorney Image */}
            <div>
              <div className="aspect-[3/4] bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-lg relative overflow-hidden sticky top-32">
                <div className="absolute inset-0 bg-gold-500/5" />
              </div>
            </div>

            {/* Attorney Info */}
            <div className="md:col-span-2">
              <h1 className="heading-2 text-charcoal-50 mb-2">
                {attorney.name}
              </h1>
              <p className="text-gold-500 text-xl font-semibold mb-6">
                {attorney.role}
              </p>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-charcoal-800">
                <a
                  href={`mailto:${attorney.email}`}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
                <a
                  href={`tel:${attorney.phone}`}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="heading-4 text-charcoal-50 mb-4">Biography</h2>
                <p className="text-charcoal-300 leading-relaxed">
                  {attorney.bio}
                </p>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h2 className="heading-4 text-charcoal-50 mb-4">
                  Areas of Specialization
                </h2>
                <div className="flex flex-wrap gap-3">
                  {attorney.specialization.map((spec, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-charcoal-900 border border-charcoal-800 rounded-full text-charcoal-300 text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bar Admissions */}
              <div className="mb-8">
                <h2 className="heading-4 text-charcoal-50 mb-4">
                  Bar Admissions
                </h2>
                <ul className="space-y-2">
                  {attorney.barAdmissions.map((bar, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-charcoal-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      {bar}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Cases */}
              <div>
                <h2 className="heading-4 text-charcoal-50 mb-4">
                  Representative Matters
                </h2>
                <ul className="space-y-4">
                  {attorney.keyCases.map((case_, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-charcoal-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0 mt-2" />
                      {case_}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-3 text-charcoal-50 mb-6">
              Schedule a Consultation with {attorney.name.split(" ")[0]}
            </h2>
            <p className="body-large text-charcoal-300 mb-8">
              Discuss your legal matter with our experienced team.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
