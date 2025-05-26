import Image from 'next/image';

export default function ProgramsHero() {
  return (
    <section className="relative pt-20 pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="MAXFIT Gym Programs"
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
            OUR <span className="text-primary">PROGRAMS</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Discover a wide range of fitness programs designed to help you reach your goals, whatever they may be.
          </p>
        </div>
      </div>
    </section>
  );
}