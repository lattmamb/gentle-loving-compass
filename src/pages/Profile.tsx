import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  }, []);

  return (
    <div className="section-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground mt-2">Update your details and preferences.</p>
      </header>

      <Card className="glass-luxury max-w-2xl">
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Alex Chen" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="alex@example.com" />
            </div>
            <div className="pt-2">
              <Button>Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
