export interface UserProfile {
  personalInfo: {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    password: string;
    panNumber: string;
    aadharCard: string;
    address: string;
  };
  bankDetails: {
    bankName: string;
    ifscCode: string;
    accountNo: string;
    accountType: string;
    nomineeName: string;
    nomineePhone: string;
    relationWithNominee: string;
  };
}