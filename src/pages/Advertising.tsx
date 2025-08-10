import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Advertising: React.FC = () => {
  useEffect(() => {
    document.title = "Advertising – Unity Fleet Partners";
    const desc = "Run high-impact EV ads across Unity Fleet screens with real-time performance.";
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
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Advertising</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Launch targeted campaigns on our EV network. Measure impressions, reach, and engagement in real time.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {["Impressions", "Reach", "CTR"].map((label, i) => (
          <Card key={label} className="glass-luxury">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground">{["1.2M", "420k", "3.6%"][i]}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Separator className="my-8" />

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="glass-luxury">
          <CardHeader>
            <CardTitle>3D Vehicle Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground">
              Interactive preview coming soon
            </div>
          </CardContent>
        </Card>

        <Card className="glass-luxury">
          <CardHeader>
            <CardTitle>Create Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Define audience, locations, budget, and schedule. This is a placeholder form ready for integration.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Advertising;
