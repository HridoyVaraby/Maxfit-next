import Image from 'next/image';

export default function GymStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h2 className="section-title">
              OUR <span className="text-primary">STORY</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="mb-4">
              Founded in 2018, MAXFIT began as a small fitness studio in the heart of Sonarpur with a simple mission: to make quality fitness accessible to everyone in our community.
            </p>
            <p className="mb-4">
              What started as a modest facility has now grown into a comprehensive fitness center catering to individuals and families alike. Our founder, a fitness enthusiast from Kolkata, envisioned a space where people from all walks of life could pursue their health goals without intimidation.
            </p>
            <p className="mb-4">
              Today, MAXFIT stands as a testament to that vision - a inclusive, supportive environment where fitness is not just about physical transformation but overall well-being.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fadeInUp animate-delay-100">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="MAXFIT Gym Facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="MAXFIT Training"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Group Classes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6456170/pexels-photo-6456170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Personal Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-muted/30 p-8 rounded-lg shadow-sm animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>To empower individuals to take control of their health through accessible, high-quality fitness services and supportive community.</p>
          </div>
          <div className="bg-muted/30 p-8 rounded-lg shadow-sm animate-fadeInUp animate-delay-100">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>To be the leading fitness destination in Sonarpur where every individual feels welcome and inspired to achieve their best health.</p>
          </div>
          <div className="bg-muted/30 p-8 rounded-lg shadow-sm animate-fadeInUp animate-delay-200">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p>Inclusivity, Excellence, Community, Integrity, and Continuous Improvement in everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}