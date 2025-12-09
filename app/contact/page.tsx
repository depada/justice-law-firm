"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "350 Park Avenue, 10th Floor",
    cityState: "New York, NY 10022",
    phone: "+1 (212) 555-0100",
    email: "ny@justicefirm.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        reason: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-charcoal-50 mb-8">
              Get in <span className="text-gold-500">Touch</span>
            </h1>
            <p className="body-large text-charcoal-300">
              Schedule a confidential consultation with our team. We&apos;re here to
              help you navigate your most complex legal challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-charcoal-950 border border-charcoal-800 rounded-lg p-8 md:p-12">
                <h2 className="heading-3 text-charcoal-50 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-charcoal-400 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-gold-500/10 rounded-full mb-6">
                      <Send className="w-12 h-12 text-gold-500" />
                    </div>
                    <h3 className="heading-4 text-charcoal-50 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-300">
                      Thank you for contacting us. We&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-charcoal-300 mb-2 text-sm font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-charcoal-300 mb-2 text-sm font-medium"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-charcoal-300 mb-2 text-sm font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-charcoal-300 mb-2 text-sm font-medium"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-charcoal-300 mb-2 text-sm font-medium"
                      >
                        Reason for Inquiry *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="">Select a reason</option>
                        <option value="litigation">Corporate Litigation</option>
                        <option value="arbitration">
                          International Arbitration
                        </option>
                        <option value="compliance">
                          Regulatory Compliance
                        </option>
                        <option value="white-collar">
                          White-Collar Defense
                        </option>
                        <option value="antitrust">Antitrust</option>
                        <option value="technology">
                          Technology & Cybersecurity
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-charcoal-300 mb-2 text-sm font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                        placeholder="Please provide details about your legal matter..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-charcoal-500 text-xs">
                      By submitting this form, you agree to our privacy policy.
                      This form is for general inquiries only and does not
                      create an attorney-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="heading-4 text-charcoal-50 mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+12125550100"
                    className="flex items-start gap-4 p-4 bg-charcoal-950 border border-charcoal-800 rounded-lg hover:border-gold-500/50 transition-all group"
                  >
                    <div className="p-3 bg-gold-500/10 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-charcoal-400 text-sm mb-1">
                        Call Us
                      </div>
                      <div className="text-charcoal-50 font-semibold">
                        +1 (212) 555-0100
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@justicefirm.com"
                    className="flex items-start gap-4 p-4 bg-charcoal-950 border border-charcoal-800 rounded-lg hover:border-gold-500/50 transition-all group"
                  >
                    <div className="p-3 bg-gold-500/10 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-charcoal-400 text-sm mb-1">
                        Email Us
                      </div>
                      <div className="text-charcoal-50 font-semibold">
                        info@justicefirm.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="heading-4 text-charcoal-50 mb-6">
                  Office Locations
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="p-6 bg-charcoal-950 border border-charcoal-800 rounded-lg"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-charcoal-50 font-semibold mb-1">
                            {office.city}
                          </h4>
                          <p className="text-charcoal-400 text-sm">
                            {office.address}
                          </p>
                          <p className="text-charcoal-400 text-sm">
                            {office.cityState}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="text-charcoal-400">
                          <span className="text-charcoal-500">Phone:</span>{" "}
                          {office.phone}
                        </div>
                        <div className="text-charcoal-400">
                          <span className="text-charcoal-500">Email:</span>{" "}
                          {office.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="heading-4 text-charcoal-50 mb-6">Find Us</h3>
                <div className="relative w-full h-[400px] bg-charcoal-950 border border-charcoal-800 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215753908621!2d-73.97509492346658!3d40.763397371385965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebe8836a89%3A0xa007c44e7c4b557!2s350%20Park%20Ave%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1733740000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Justice Law Firm Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
