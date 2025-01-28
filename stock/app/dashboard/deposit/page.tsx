'use client';

// import { BankDetailsCard } from '@/components/funds/bank-details-card';
import { userProfile } from '@/public/data/user-profile';

export default function DepositPage() {
  const bankDetails = {
    accountHolder: `${userProfile.personalInfo.firstName} ${userProfile.personalInfo.lastName}`,
    accountNo: userProfile.bankDetails.accountNo,
    ifscCode: userProfile.bankDetails.ifscCode,
    bankName: userProfile.bankDetails.bankName,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Deposit Funds</h1>
      {/* <BankDetailsCard bankDetails={bankDetails} /> */}
    </div>
  );
}