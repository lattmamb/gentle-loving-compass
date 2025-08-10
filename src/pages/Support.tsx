import React, { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Support: React.FC = () => {
  useEffect(() => {
    document.title = "Support – Unity Fleet";
    const desc = "Get help with bookings, billing, vehicles, and roadside assistance.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="section-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Support</h1>
        <p className="text-muted-foreground mt-2">Browse FAQs or reach our team.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-luxury">
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I change or cancel a booking?</AccordionTrigger>
                <AccordionContent>
                  You can manage bookings from your dashboard. For last-minute changes, contact support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods are supported?</AccordionTrigger>
                <AccordionContent>
                  We accept major cards and fleet billing. Invoices are available in your profile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is roadside assistance available?</AccordionTrigger>
                <AccordionContent>
                  Yes, 24/7 assistance is included with all rentals across Illinois.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="glass-luxury">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Email: support@unityfleet.com</p>
              <p>Phone: (312) 555-0199</p>
              <p>Response time: under 24 hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
