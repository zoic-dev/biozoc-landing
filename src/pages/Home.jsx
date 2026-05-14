import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, History, Package, Globe, Truck, ArrowRight, Star, FlaskConical, Microscope, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { icon: History, label: "In Manufacturing", value: "36+ Years", color: "text-primary" },
  { icon: Package, label: "Product Portfolio", value: "1500+ SKUs", color: "text-secondary" },
  { icon: ShieldCheck, label: "Monopoly Rights", value: "Exclusive", color: "text-tertiary" },
  { icon: Globe, label: "Certified Units", value: "WHO-GMP", color: "text-secondary" },
  { icon: Truck, label: "Global Delivery", value: "On-Time", color: "text-primary" },
];

const categories = [
  {
    title: "Tablets & Capsules",
    desc: "Anti-infectives, Cardiac, Diabetic, and Pain Management oral dosage forms.",
    image: "/tablets.avif",
    span: "md:col-span-8",
    icon: "💊"
  },
  {
    title: "Critical Care",
    desc: "Sterile Liquid & Dry Powder Injections manufactured in state-of-the-art HVAC rooms.",
    image: "/critical.avif",
    span: "md:col-span-4",
    icon: "💉"
  },
  {
    title: "Softgels & Hard-shell",
    desc: "High-stability capsule formulations for Nutraceuticals and Antibiotics.",
    image: "/softgels.jpg",
    span: "md:col-span-4",
    icon: "💊"
  },
  {
    title: "Pediatric & Syrups",
    desc: "Toxin-free, palatable liquid formulations including suspensions and drops.",
    image: "/syrups.jpg",
    span: "md:col-span-8",
    icon: "🧪"
  },
];

const testimonials = [
  {
    role: "Pharma Distributor, Punjab",
    text: "Biozoc helped us establish a successful pharma franchise business with excellent support and timely delivery.",
  },
  {
    role: "Medical Representative, Haryana",
    text: "Very professional team with quality products and strong promotional support.",
  },
  {
    role: "Franchise Partner, Rajasthan",
    text: "Best monopoly pharma franchise opportunity with attractive margins.",
  },
  {
    role: "Distributor, Uttar Pradesh",
    text: "Excellent product quality and smooth order processing experience with Biozoc.",
  },
  {
    role: "Pharma Partner, Maharashtra",
    text: "Highly supportive team with timely dispatch and strong promotional backing.",
  },
  {
    role: "Medical Store Owner, Gujarat",
    text: "One of the best pharma franchise companies for monopoly rights and profitability.",
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double click

    setLoading(true);

    const formData = new FormData(e.target);

    const phone = formData.get("phone")?.trim();

    // ✅ Strict validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    const data = {
      name: formData.get("name"),
      phone,
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzuv-_Ixe9mjnNUqMo9tOZCxkFWdMhmy_EeTbk-5X-AmFgWa2orErK1mAFqpBm4Md0l/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === "success") {
        navigate("/thank-you");
      } else {
        throw new Error("Sheet error");
      }

    } catch (error) {
      console.error(error);
      alert("Submission failed");
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tertiary/10 text-tertiary rounded-full mb-8">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">PCD Pharma Franchise Opportunity</span>
            </div>
            <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
              Become a Successful PCD <span className="text-primary italic">Pharma Franchise Partner with Biozoc</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Sub-heading - Expand your Pharma Business with WHO-GMP Certified Products, Monopoly Rights, High-Profit Margins, and Complete Marketing Support across India.
            </p>
            <ul className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed" style={{}}>
              <li>✔ 500+ GMP-WHO Approved Products</li>
              <li>✔ Exclusive Monopoly Rights</li>
              <li>✔ Fast Delivery Across India</li>
              <li>✔ Attractive Promotional Support</li>
              <li>✔ DCGI Approved Molecules</li>
            </ul>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-4 border-surface"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-surface bg-secondary text-white flex items-center justify-center text-xs font-bold">1.5k+</div>
              </div>
              <p className="text-sm text-on-surface-variant font-medium">Trusted by 1500+ Franchise Partners PAN India</p>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" id="contact"></div>
            <div className="relative bg-surface-container-lowest p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-on-surface/5 border border-outline-variant">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Start Your PCD Pharma Franchise Today</h3>
              <p className="text-on-surface-variant mb-8 text-sm">Do Not Post Job/Personal Use Queries</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Full Name</label>
                    <input name="name" required className="w-full px-5 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Enter name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Phone Number</label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      pattern="[6-9]{1}[0-9]{9}"
                      maxLength="10"
                      className="w-full px-5 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Enter 10-digit mobile number"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, '');
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Email Address</label>
                  <input name="email" required className="w-full px-5 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="name@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Location/Message</label>
                  <textarea name="message" className="w-full px-5 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Preferred district for monopoly rights..." rows="3"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full primary-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-transform ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[0.98]"
                    }`}
                >
                  {loading ? "Submitting..." : "Get Franchise Details"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-20" id="certifications">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-1">{stat.value}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="products" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-4xl">
              <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
              <h2 className="text-4xl md:text-4xl font-extrabold text-on-surface">Allopathic Range PCD Pharma Franchise</h2>
            </div>
            {/* <a href="https://biozoc.com/products" target="_blank">
              <button className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View Full Catalog <ArrowRight size={20} />
              </button>
            </a> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`${cat.span} bg-surface-container-low rounded-[2.5rem] overflow-hidden group relative`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-surface-container-low/80 to-transparent">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-3xl font-bold mb-3 text-on-surface">{cat.title}</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Biozoc */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-full">
            <p className="text-primary  font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">
              Why Choose Biozoc for PCD Pharma Franchise?
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              <p>
                Biozoc is a leading PCD Pharma Franchise company committed to delivering
                high-quality pharmaceutical products and profitable business opportunities across India.
              </p>

              <p>
                We support our franchise partners with exclusive monopoly rights,
                competitive pricing, promotional materials, and a strong distribution network
                to help them grow successfully in the pharma sector.
              </p>

              <p>
                As the demand for quality healthcare and medicines continues to rise,
                the pharma franchise industry has become one of the fastest-growing business
                opportunities in India.
              </p>

              <p>
                Biozoc enables distributors, medical representatives, entrepreneurs,
                pharmacists, and healthcare professionals to establish a successful pharma
                business with trusted products, reliable support, and excellent growth potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Product Range
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">
              Explore Our Pharma Product Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://cms.biozoc.com/wp-content/uploads/2019/05/zocmoxy-625.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/Lulizoc-cream.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/livzoc-drop.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/Leucozoc-syrup.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/diazoc-GM.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/cefuzoc-500.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/ceftzoc-s-1.jpg",
              "https://cms.biozoc.com/wp-content/uploads/2019/05/cefizoc-325.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-[2rem] bg-surface shadow-lg"
              >
                <img
                  src={img}
                  alt="Biozoc Product"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Strength */}
      <section id="about" className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square bg-primary/5 rounded-full absolute -top-20 -left-20 w-80 h-80 blur-3xl"></div>
              <img
                src="/advanced.png"
                alt="Manufacturing"
                className="rounded-[3.5rem] shadow-2xl relative z-10 w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 max-w-xs border border-outline-variant">
                <p className="text-5xl font-black text-primary mb-2">99.8%</p>
                <p className="text-sm font-bold text-on-surface leading-snug">Quality Compliance Rate across 1500+ products.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Our Manufacturing Strength</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-10 leading-tight">Advanced R&D for Future Medicine</h2>

              <div className="space-y-10">
                {[
                  { icon: FlaskConical, title: "In-House Formulation Lab", desc: "Our R&D team continuously works on bio-equivalence studies to ensure clinical efficacy comparable to global standards.", color: "bg-primary" },
                  { icon: Microscope, title: "GMP & WHO Certified Facility", desc: "Zero-contact automated manufacturing processes under controlled atmospheric conditions (ISO Class 7/8).", color: "bg-secondary" },
                  { icon: ShoppingCart, title: "Reliable Distribution Support", desc: "With efficient order processing and logistics coordination, we ensure timely delivery and seamless availability for our PCD partners.", color: "bg-tertiary" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className={`flex-shrink-0 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-on-surface">{item.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pharma Franchise Business */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Business Opportunity
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">
              Start a Profitable Pharma Franchise Business
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
              The Indian pharmaceutical market is witnessing strong growth due to rising healthcare awareness,
              increasing medicine demand, and expanding rural healthcare access.
              The PCD Pharma Franchise model has become one of the most profitable
              and low-risk business opportunities in India.
            </p>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
              Whether you are a Medical Representative, Distributor, Pharmacist,
              Doctor, or Entrepreneur — Biozoc provides everything you need to establish
              and grow your pharma business successfully.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {[
                "Medical Representative",
                "Distributor",
                "Pharmacist",
                "Doctor",
                "Entrepreneur"
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-6 py-3 rounded-full bg-surface-container-low text-on-surface font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="primary-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
                Get Product & Price List
              </button>
            </a>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20">Trusted by Pharma Professionals Across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-low p-10 rounded-[2.5rem] border border-transparent hover:border-primary/10 transition-all group"
              >
                <div className="flex text-primary mb-8">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-on-surface italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  {/* <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/10" referrerPolicy="no-referrer" /> */}
                  <div>
                    {/* <p className="font-bold text-on-surface">{t.name}</p> */}
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
              FAQs
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is a PCD Pharma Franchise?",
                a: "A PCD Pharma Franchise is a business model where a pharma company grants rights to distribute and market products in a specific area."
              },
              {
                q: "How much investment is required?",
                a: "You can start with low investment depending on product selection and territory."
              },
              {
                q: "Do you provide monopoly rights?",
                a: "Yes, Biozoc offers exclusive monopoly rights based on area availability."
              },
              {
                q: "What documents are required?",
                a: "Drug License and GST Number are generally required."
              },
              {
                q: "Do you provide marketing support?",
                a: "Yes, we provide complete promotional and marketing support materials."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-surface rounded-[2rem] p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-on-surface mb-4">
                  {faq.q}
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface border-t border-outline-variant p-3 flex gap-3">

        <a
          href="tel:+919815846085"
          className="flex-1 text-center bg-primary text-white py-4 rounded-2xl font-bold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919815846085"
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center bg-secondary text-white py-4 rounded-2xl font-bold"
        >
          WhatsApp
        </a>

      </div>
    </div>
  );
}
