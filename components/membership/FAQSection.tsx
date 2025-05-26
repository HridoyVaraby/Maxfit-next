import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Find answers to common questions about our membership plans and policies
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the gym operating hours?</AccordionTrigger>
              <AccordionContent>
                MAXFIT Gym is open from 5:00 AM to 10:00 PM on weekdays, and 6:00 AM to 8:00 PM on weekends. Elite members have 24/7 access with their special key cards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a joining fee?</AccordionTrigger>
              <AccordionContent>
                Yes, there is a one-time joining fee of ₹999 for all new members. This covers your initial fitness assessment, key card, and administrative costs. We occasionally run promotions that waive this fee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I freeze my membership temporarily?</AccordionTrigger>
              <AccordionContent>
                Yes, members can freeze their membership for up to 30 days per year with valid reasons such as medical issues or extended travel. A small administrative fee may apply depending on your membership type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is the cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Monthly memberships can be cancelled with 15 days notice. Quarterly and annual memberships have a 30-day cancellation policy. Early termination of prepaid plans may incur a fee. Please speak with our membership team for specific details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are personal training sessions included in the membership?</AccordionTrigger>
              <AccordionContent>
                Pro Plus members receive one complimentary personal training session per month, while Elite members receive two sessions per month. Additional sessions can be purchased separately. Starter members can purchase personal training sessions at regular rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer family discounts?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer family discounts! When two or more family members join together, each member receives a 10% discount on their membership fees. This applies to immediate family members living at the same address.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What amenities are available at the gym?</AccordionTrigger>
              <AccordionContent>
                Our gym features modern cardio and strength equipment, a functional training area, group exercise studios, locker rooms with showers, a hydration station, and a members' lounge. Premium amenities like towel service and nutritional supplements are available for Pro Plus and Elite members.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Is there parking available?</AccordionTrigger>
              <AccordionContent>
                Yes, we have a dedicated parking area for our members with approximately 50 spaces available on a first-come, first-served basis. During peak hours, we recommend carpooling or using alternate transportation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}