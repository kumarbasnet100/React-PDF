interface LabelValueProps {
  label: string;
  value: string;
}   

const LabelValue = ({label, value}:LabelValueProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-light">{label}</span>
        <span className="text-teal-500 font-light">{value}</span>
      </div>
    </>
  );
};

export default LabelValue;
