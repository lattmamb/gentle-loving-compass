import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, CreditCard, Clock, Activity, Settings2, User2 } from "lucide-react";

const Profile: React.FC = () => {
  useEffect(() => {
    document.title = "Profile – Unity Fleet";
    const desc = "Manage your Unity Fleet profile, membership, and preferences.";
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
  }, []);

  return (
    <div className="section-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground mt-2">Update your details, membership, and preferences.</p>
      </header>

      <main className="grid gap-6 lg:grid-cols-12">
        {/* Left: Overview */}
        <section className="lg:col-span-4 space-y-6">
          <Card className="glass-luxury">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">Alex Chen</CardTitle>
                <p className="text-sm text-muted-foreground">alex@example.com</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1"><ShieldCheck className="h-4 w-4" /> Unity FlexRide Pro</Badge>
              </div>
              <Separator />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-semibold text-foreground">47</div>
                  <div className="text-xs text-muted-foreground">Total rides</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-foreground">2,847</div>
                  <div className="text-xs text-muted-foreground">kg CO₂ saved</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-foreground">2024</div>
                  <div className="text-xs text-muted-foreground">Member since</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-luxury">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Battery Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Average</span>
                <span className="text-foreground">86%</span>
              </div>
              <Progress value={86} />
            </CardContent>
          </Card>
        </section>

        {/* Right: Details & Tabs */}
        <section className="lg:col-span-8 space-y-6">
          <Card className="glass-luxury">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-primary" />
                <CardTitle>Account settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="membership">Membership</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="mt-4">
                  <form className="grid gap-4" aria-label="Update profile">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Alex Chen" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="alex@example.com" />
                      </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="Carbondale, IL" />
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button aria-label="Save profile changes">Save Changes</Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="membership" className="mt-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="glass-luxury">
                      <CardHeader>
                        <CardTitle>Current plan</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tier</span>
                          <span className="text-foreground">FlexRide Pro</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Renewal</span>
                          <span className="text-foreground">Nov 25, 2025</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Payment</span>
                          <span className="inline-flex items-center gap-2 text-foreground"><CreditCard className="h-4 w-4" />•••• 4242</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2">
                          <Button size="sm">Upgrade</Button>
                          <Button size="sm" variant="secondary">Manage</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-luxury">
                      <CardHeader>
                        <CardTitle>Usage summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Rides this month</span>
                          <span className="text-foreground">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Hours driven</span>
                          <span className="text-foreground">38h</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Avg. battery</span>
                          <span className="text-foreground">82%</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="activity" className="mt-4">
                  <Card className="glass-luxury">
                    <CardHeader>
                      <CardTitle>Recent activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {[{
                          icon: <Activity className="h-4 w-4 text-primary" />, title: 'Ride completed', desc: 'Model Y • 12.4 mi • $18.40', time: 'Today, 2:14 PM'
                        }, {
                          icon: <Clock className="h-4 w-4 text-primary" />, title: 'Booking scheduled', desc: 'Tomorrow 9:00 AM – 1:00 PM', time: 'Yesterday'
                        }, {
                          icon: <User2 className="h-4 w-4 text-primary" />, title: 'Profile updated', desc: 'Email and phone number changed', time: '2 days ago'
                        }].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1">{item.icon}</div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.title}</div>
                              <div className="text-sm text-muted-foreground">{item.desc}</div>
                              <div className="text-xs text-muted-foreground mt-1">{item.time}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Profile;
