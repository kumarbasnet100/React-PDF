
import { PDFDownloadLink } from "@react-pdf/renderer";
import { loanData } from "../../data/data";
import DetailsSection from "../molecules/DetailsSection";
import LoanSummaryPDF from "./LoanSummaryPDF";
import { Download } from "lucide-react";

const LoanSummary = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="font-semibold text-xl mb-4">Loan Summary</h2>

      {/* Loan Details */}
      <DetailsSection
        title="Loan Details"
        leftItems={[
          { label: "Loan Plan", value: loanData.loanDetails.loanPlan },
          { label: "Loan Amount", value: loanData.loanDetails.loanAmount },
          { label: "Loan Tenure", value: loanData.loanDetails.loanTenure },
        ]}
        rightItems={[
          { label: "Sub Loan Plan", value: loanData.loanDetails.subLoanPlan },
          { label: "Interest Rate", value: loanData.loanDetails.interestRate },
          { label: "Purpose of Loan", value: loanData.loanDetails.purposeOfLoan },
        ]}
      />

      {/* Personal Details */}
      <DetailsSection
        title="Personal Details"
        leftItems={[
          { label: "ID Type", value: loanData.personalDetails.idType },
          { label: "ID Number", value: loanData.personalDetails.idNumber },
          { label: "ID Issue Date", value: loanData.personalDetails.idIssueDate },
          { label: "ID Expiry Date", value: loanData.personalDetails.idExpiryDate },
          { label: "Full Name", value: loanData.personalDetails.fullName },
          { label: "Gender", value: loanData.personalDetails.gender },
          { label: "Nationality", value: loanData.personalDetails.nationality },
          { label: "Date of Birth", value: loanData.personalDetails.dateOfBirth },
        ]}
        rightItems={[
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
      <DetailsSection
        title="Address Details"
        leftItems={[
          { label: "Permanent Address", value: "" },
          { label: "Location", value: loanData.addressDetails.permanent.location },
          { label: "Country", value: loanData.addressDetails.permanent.country },
          { label: "Dzongkhag/State", value: loanData.addressDetails.permanent.dzongkhag },
          { label: "Gewog/District", value: loanData.addressDetails.permanent.gewog },
        ]}
        rightItems={[
          { label: "Temporary Address", value: "" },
          { label: "Location", value: loanData.addressDetails.temporary.location },
          { label: "Country", value: loanData.addressDetails.temporary.country },
          { label: "Dzongkhag/State", value: loanData.addressDetails.temporary.dzongkhag },
          { label: "Gewog/District", value: loanData.addressDetails.temporary.gewog },
        ]}
      />

      {/* Employment */}
      <DetailsSection
        title="Employment Details"
        leftItems={[
          { label: "Type of Employment", value: loanData.employmentDetails.typeOfEmployment },
          { label: "Name of Employer", value: loanData.employmentDetails.nameOfEmployer },
        ]}
        rightItems={[
          { label: "Designation", value: loanData.employmentDetails.designation },
          { label: "Joining Date", value: loanData.employmentDetails.joiningDate },
        ]}
      />

      {/* Financial */}
      <DetailsSection
        title="Financial Details"
        leftItems={[
          { label: "Gross Salary", value: loanData.financialDetails.grossSalary },
          { label: "Existing Liabilities", value: loanData.financialDetails.existingLiabilities },
        ]}
        rightItems={[
          { label: "Net Income", value: loanData.financialDetails.netIncome },
        ]}
      />

      {/* Asset */}
      <DetailsSection
        title="Asset Information"
        leftItems={[
          { label: "Asset Identified", value: loanData.assetInformation.assetIdentified },
        ]}
        rightItems={[
          { label: "Asset Category", value: loanData.assetInformation.assetCategory },
        ]}
      />

      {/* Documents */}
      <DetailsSection
        title="Documents Uploaded"
        leftItems={[
          { label: "ID Document", value: loanData.documentsUploaded.idDocument },
          { label: "Passport Sized Photo", value: loanData.documentsUploaded.passportSizedPhoto },
          { label: "Pay Slip", value: loanData.documentsUploaded.paySlip },
        ]}
        rightItems={[
          { label: "Contract Extension Letter", value: loanData.documentsUploaded.contractExtensionLetter },
          { label: "Signed PDF Statement", value: loanData.documentsUploaded.signedPdfStatement },
        ]}
      />

      {/* Guarantor */}
      <DetailsSection
        title="Guarantor Details"
        leftItems={[
          { label: "Full Name", value: loanData.guarantorDetails.fullName },
        ]}
        rightItems={[
          { label: "Mobile Number", value: loanData.guarantorDetails.mobileNumber },
        ]}
      />

      {/* PDF Download Button */}
      <div className="flex justify-end mt-6">
        <PDFDownloadLink
          document={<LoanSummaryPDF loanData={loanData} />}
          fileName="loan-summary.pdf"
        >
          {({ loading }) => (
            <button
              className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white font-medium px-3 py-2 text-sm rounded-lg transition-colors duration-200 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Preparing..." : "Download Summary"}
              <Download className="w-4 h-4" />
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default LoanSummary;
