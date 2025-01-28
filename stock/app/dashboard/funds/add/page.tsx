'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { userProfile } from '@/public/data/user-profile';

export default function AddFundsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Add Funds</h1>
      <Card className="max-w-2xl glass-card">
        <CardHeader>
          <CardTitle>Bank Account Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-sm text-muted-foreground">Account Holder Name</h2>
            <p className="font-medium">{`${userProfile.personalInfo.firstName} ${userProfile.personalInfo.lastName}`}</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Account Number</h2>
            <p className="font-medium">{userProfile.bankDetails.accountNo}</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">IFSC Code</h2>
            <p className="font-medium">{userProfile.bankDetails.ifscCode}</p>
          </div>
          <div>
            <h2 className="text-sm text-muted-foreground">Bank Name</h2>
            <p className="font-medium">{userProfile.bankDetails.bankName}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}