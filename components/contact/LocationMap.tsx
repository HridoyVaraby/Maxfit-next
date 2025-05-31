export default function LocationMap() {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            FIND <span className="text-primary">US</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Visit our Maxfit Unisex & Family gym in Sonarpur, Kolkata for a tour or to speak with our team in person
          </p>
        </div>

        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <div className="h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59064.83028165262!2d88.38153695!3d22.44801885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027131e8fa69c3%3A0xf651b211a25abe91!2sSonarpur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1658923476381!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MAXFIT Gym Location Map"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Mathurapur, Prantikpally, Sonarpur<br />
                Kolkata, West Bengal 700150<br />
                India
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">
                Monday - Sunday: 6:00 AM - 12:30 PM<br />
                Monday - Sunday: 4:30 PM - 10 PM
              </p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <p className="text-muted-foreground">
                Phone: +91 80172 01852<br />
                Email: maxfitsonarpur@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}