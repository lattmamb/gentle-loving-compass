import React, { useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Target, Users, Globe, DollarSign, TrendingUp, Play } from "lucide-react";
import VehicleShowcase3D from "@/components/dashboard/VehicleShowcase3D";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

const Advertising: React.FC = () => {
  const chartData = useMemo(
    () => [
      { name: "Mon", ctr: 2.6, spend: 4.2 },
      { name: "Tue", ctr: 3.1, spend: 4.8 },
      { name: "Wed", ctr: 3.4, spend: 5.1 },
      { name: "Thu", ctr: 3.2, spend: 4.9 },
      { name: "Fri", ctr: 3.7, spend: 5.4 },
      { name: "Sat", ctr: 3.9, spend: 5.9 },
      { name: "Sun", ctr: 4.2, spend: 6.1 },
    ],
    []
  );

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

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // JSON-LD structured data (Service)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Unity Fleet Advertising',
      description: desc,
      provider: { '@type': 'Organization', name: 'Unity Fleet' },
      areaServed: { '@type': 'Place', name: 'United States' },
      serviceType: 'Digital Out-of-Home Advertising',
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const Stat = ({ label, value, delta, Icon }: { label: string; value: string; delta?: string; Icon: React.ComponentType<any> }) => (
    <Card className="glass-luxury">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        {delta && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <TrendingUp className="h-3 w-3 text-primary" />
            <span>{delta}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="section-container">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Advertising</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Launch targeted EV campaigns across our network. Preview creatives in-context and track performance in real time.
        </p>
      </header>

      <main className="space-y-8">
        {/* KPI Row */}
        <section aria-label="Ad performance metrics" className="grid gap-6 md:grid-cols-4">
          <Stat label="Impressions" value="1.2M" delta="+12% vs last week" Icon={Megaphone} />
          <Stat label="Reach" value="420k" delta="+4.1%" Icon={Users} />
          <Stat label="CTR" value="3.8%" delta="+0.3%" Icon={Target} />
          <Stat label="Spend" value="$56.2k" delta="-2.2%" Icon={DollarSign} />
        </section>

        <section className="grid gap-6 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="glass-luxury">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>3D Vehicle Preview</CardTitle>
                <Badge variant="secondary" className="hidden sm:inline-flex">Interactive</Badge>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/9] rounded-lg border border-border bg-muted/40 overflow-hidden">
                  <VehicleShowcase3D />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-luxury">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Performance</CardTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe className="h-4 w-4" /> Global network
                </div>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--popover-foreground))' }} />
                    <Line type="monotone" dataKey="ctr" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="CTR %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="glass-luxury">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create Campaign</CardTitle>
                  <Badge className="uppercase">Beta</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" aria-label="Create advertising campaign form">
                  <div className="grid gap-2">
                    <Label htmlFor="objective">Objective</Label>
                    <Select defaultValue="awareness">
                      <SelectTrigger id="objective" aria-label="Select objective">
                        <SelectValue placeholder="Choose objective" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Awareness</SelectItem>
                        <SelectItem value="traffic">Traffic</SelectItem>
                        <SelectItem value="conversions">Conversions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="audience">Audience</Label>
                    <Select defaultValue="ev-owners">
                      <SelectTrigger id="audience" aria-label="Select audience">
                        <SelectValue placeholder="Choose audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ev-owners">EV owners</SelectItem>
                        <SelectItem value="commuters">Daily commuters</SelectItem>
                        <SelectItem value="sustainability">Sustainability-minded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="region">Region</Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="region" aria-label="Select region">
                        <SelectValue placeholder="Choose region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="apac">APAC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Budget (k USD)</Label>
                    <Slider defaultValue={[50]} max={200} step={5} aria-label="Budget in thousands of USD" />
                    <div className="text-xs text-muted-foreground">Suggested: $50k–$120k</div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="start">Start</Label>
                      <Input id="start" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="end">End</Label>
                      <Input id="end" type="date" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="creative">Creative URL</Label>
                    <Input id="creative" placeholder="https://example.com/ad.mp4" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cta">CTA Text</Label>
                    <Input id="cta" placeholder="Book a demo" />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button className="gap-2" aria-label="Preview campaign">
                      <Play className="h-4 w-4" /> Preview
                    </Button>
                    <Button variant="secondary" aria-label="Launch campaign">Launch</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="glass-luxury">
              <CardHeader>
                <CardTitle>Estimated Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Projected</span>
                    <span className="text-foreground">480k – 560k</span>
                  </div>
                  <Progress value={72} />
                  <p className="text-xs text-muted-foreground">Based on selected audience, network density, and historical CTR.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-4" />

        <section className="grid gap-6 md:grid-cols-3" aria-label="Network highlights">
          {[{ label: 'Cities', value: '38', Icon: Globe }, { label: 'Screens', value: '2,140', Icon: Megaphone }, { label: 'Avg. CTR', value: '3.8%', Icon: Target }].map(({ label, value, Icon }) => (
            <Card key={label} className="glass-luxury">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-foreground">{value}</div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Advertising;
