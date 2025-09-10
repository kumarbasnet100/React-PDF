export interface LoanDataTypes {
    loanDetails: {
    loanPlan: string;
    subLoanPlan: string;
    loanAmount: string | number;
    interestRate: string;
    loanTenure: string;
    purposeOfLoan: string;
  };
  personalDetails: {
      idType: string;
      idNumber: string | number;
      idIssueDate: string;
      idExpiryDate: string;
      fullName: string;
      gender : string;
      nationality: string;
      dateOfBirth: string;
      maritalStatus: string;
      occupancyStatus: string;
      mobileNumber: string | number;
      officePhoneNumber: string | number;
      personalEmailAddress: string;       
      numberOfDependents: string | number;
      preferredBranch: string;
  };
    addressDetails: {
        permanent:{
            location: string;
            country: string;
            dzongkhag: string | number;
            gewog: string;      
        },
        temporary:{
            location: string;
            country: string;
            dzongkhag: string | number;
            gewog: string;      
        }
  };
    employmentDetails: {
        typeOfEmployment: string;
        designation: string;
        nameOfEmployer: string;
        joiningDate: string;      
  };
    financialDetails: {
        grossSalary: string | number;
        netIncome: string | number;
        existingLiabilities: string;      
  };
    assetInformation: {
        assetIdentified: string;
        assetCategory: string;      
  };
    documentsUploaded: {
        idDocument: string;
        contractExtensionLetter: string;
        passportSizedPhoto: string;
        signedPdfStatement: string;
        paySlip: string;      
  };
    guarantorDetails: {
        fullName: string;
        mobileNumber: string | number;      
  };
}