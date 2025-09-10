import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import DetailsSectionPDF from "../molecules/DetailsSectionPDF";
import type { LoanDataTypes } from "../../types/types";

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 12, fontFamily: "Helvetica" },
});

const LoanSummaryPDF = ({ loanData }: { loanData: LoanDataTypes }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Loan Details */}
      <DetailsSectionPDF
        title="Loan Details"
        items={[
          { label: "Loan Plan", value: loanData.loanDetails.loanPlan },
          { label: "Loan Amount", value: loanData.loanDetails.loanAmount },
          { label: "Loan Tenure", value: loanData.loanDetails.loanTenure },
          { label: "Sub Loan Plan", value: loanData.loanDetails.subLoanPlan },
          { label: "Interest Rate", value: loanData.loanDetails.interestRate },
          { label: "Purpose of Loan", value: loanData.loanDetails.purposeOfLoan },
        ]}
      />

      {/* Personal Details */}
      <DetailsSectionPDF
        title="Personal Details"
        items={[
          { label: "ID Type", value: loanData.personalDetails.idType },
          { label: "ID Number", value: loanData.personalDetails.idNumber },
          { label: "ID Issue Date", value: loanData.personalDetails.idIssueDate },
          { label: "ID Expiry Date", value: loanData.personalDetails.idExpiryDate },
          { label: "Full Name", value: loanData.personalDetails.fullName },
          { label: "Gender", value: loanData.personalDetails.gender },
          { label: "Nationality", value: loanData.personalDetails.nationality },
          { label: "Date of Birth", value: loanData.personalDetails.dateOfBirth },
          { label: "Marital Status", value: loanData.personalDetails.maritalStatus },
          { label: "Occupancy Status", value: loanData.personalDetails.occupancyStatus },
          { label: "Mobile Number", value: loanData.personalDetails.mobileNumber },
          { label: "Office Phone Number", value: loanData.personalDetails.officePhoneNumber },
          { label: "Personal Email Address", value: loanData.personalDetails.personalEmailAddress },
          { label: "Number of Dependents", value: loanData.personalDetails.numberOfDependents },
          { label: "Preferred Branch", value: loanData.personalDetails.preferredBranch },
        ]}
      />

      {/* Address Details */}
      <DetailsSectionPDF
        title="Permanent Address"
        items={[
          { label: "Location", value: loanData.addressDetails.permanent.location },
          { label: "Country", value: loanData.addressDetails.permanent.country },
          { label: "Dzongkhag/State", value: loanData.addressDetails.permanent.dzongkhag },
          { label: "Gewog/District", value: loanData.addressDetails.permanent.gewog },
        ]}
      />
      <DetailsSectionPDF
        title="Temporary Address"
        items={[
          { label: "Location", value: loanData.addressDetails.temporary.location },
          { label: "Country", value: loanData.addressDetails.temporary.country },
          { label: "Dzongkhag/State", value: loanData.addressDetails.temporary.dzongkhag },
          { label: "Gewog/District", value: loanData.addressDetails.temporary.gewog },
        ]}
      />

      {/* Employment Details */}
      <DetailsSectionPDF
        title="Employment Details"
        items={[
          { label: "Type of Employment", value: loanData.employmentDetails.typeOfEmployment },
          { label: "Name of Employer", value: loanData.employmentDetails.nameOfEmployer },
          { label: "Designation", value: loanData.employmentDetails.designation },
          { label: "Joining Date", value: loanData.employmentDetails.joiningDate },
        ]}
      />

      {/* Financial Details */}
      <DetailsSectionPDF
        title="Financial Details"
        breakBefore
        items={[
          { label: "Gross Salary", value: loanData.financialDetails.grossSalary },
          { label: "Existing Liabilities", value: loanData.financialDetails.existingLiabilities },
          { label: "Net Income", value: loanData.financialDetails.netIncome },
        ]}
      />

      {/* Asset Information */}
      <DetailsSectionPDF
        title="Asset Information"
        items={[
          { label: "Asset Identified", value: loanData.assetInformation.assetIdentified },
          { label: "Asset Category", value: loanData.assetInformation.assetCategory },
        ]}
      />

      {/* Documents Uploaded */}
      <DetailsSectionPDF
        title="Documents Uploaded"
        items={[
          { label: "ID Document", value: loanData.documentsUploaded.idDocument },
          { label: "Passport Sized Photo", value: loanData.documentsUploaded.passportSizedPhoto },
          { label: "Pay Slip", value: loanData.documentsUploaded.paySlip },
          { label: "Contract Extension Letter", value: loanData.documentsUploaded.contractExtensionLetter },
          { label: "Signed PDF Statement", value: loanData.documentsUploaded.signedPdfStatement },
        ]}
      />

      {/* Guarantor Details */}
      <DetailsSectionPDF
        title="Guarantor Details"
        items={[
          { label: "Full Name", value: loanData.guarantorDetails.fullName },
          { label: "Mobile Number", value: loanData.guarantorDetails.mobileNumber },
        ]}
      />
    </Page>
  </Document>
);

export default LoanSummaryPDF;
