import { PDFViewer } from "@react-pdf/renderer";
import LoanSummaryPDF from "./organisms/LoanSummaryPDF";
import { loanData } from "../data/data";

const LoanSummaryPreview = () => {

  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <LoanSummaryPDF loanData={loanData} />
      </PDFViewer>
    </div>
  );
};

export default LoanSummaryPreview;
