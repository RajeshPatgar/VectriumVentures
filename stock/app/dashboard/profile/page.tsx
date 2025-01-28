'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>

      {/* Personal Information Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" /> Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm text-muted-foreground">First Name</h2>
            <p className="font-medium">Yogendrasinh</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Last Name</h2>
            <p className="font-medium">Zala</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Gender</h2>
            <p className="font-medium">Male</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Date of Birth</h2>
            <p className="font-medium">30/05/1980</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Email ID</h2>
            <p className="font-medium">yogi7390@gmail.com</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Phone Number</h2>
            <p className="font-medium">9227793662</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">PAN Number</h2>
            <p className="font-medium">AJJPJ0160A</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Aadhar Card</h2>
            <p className="font-medium">424163281379</p>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-sm text-muted-foreground">Address</h2>
            <p className="font-medium">Raj Shakti. Arunodai society. Opp navapara.</p>
          </div>
        </CardContent>
      </Card>

      {/* Bank Details Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5" /> Bank Details
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm text-muted-foreground">Bank Name</h2>
            <p className="font-medium">STATE BANK OF INDIA</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">IFSC Code</h2>
            <p className="font-medium">SBIN0005950</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Account No</h2>
            <p className="font-medium">30285936427</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Account Type</h2>
            <p className="font-medium">Savings</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Nominee Name</h2>
            <p className="font-medium">DHARMISTHABA</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Nominee No.</h2>
            <p className="font-medium">7990033900</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Relation With Nominee</h2>
            <p className="font-medium">Spouse</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}