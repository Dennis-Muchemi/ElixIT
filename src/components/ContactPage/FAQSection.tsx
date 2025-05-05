import { FAQItem } from '@/components/ContactPage/FAQItem'

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            question="What is your typical project timeline?"
            answer="Most projects take 4-6 weeks from start to finish, depending on the scope and complexity."
          />
          <FAQItem
            question="Do you offer ongoing support?"
            answer="Yes, we offer various maintenance and support packages to keep your website running smoothly."
          />
          <FAQItem
            question="What is your payment structure?"
            answer="We typically require a 50% deposit to begin work, with the remaining balance due upon project completion."
          />
        </div>
      </div>
    </section>
  )
}
