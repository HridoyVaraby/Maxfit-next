import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative pt-20 pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About MAXFIT Gym"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(249,201,27,0.3), rgba(0,0,0,0.7))' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white pt-16 md:pt-24">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            ABOUT <span className="text-primary">MAXFIT</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            We are more than just a gym. We are a community dedicated to transforming lives through fitness, health, and wellness.
          </p>
        </div>
      </div>
    </section>
  );
}