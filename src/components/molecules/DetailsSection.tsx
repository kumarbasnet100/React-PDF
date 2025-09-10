import LabelValue from "../atoms/LabelValue";

interface DetailsSectionProps {
  title: string;
  leftItems: { label: string; value: string }[];
  rightItems: { label: string; value: string }[];
}

const DetailsSection = ({ title, leftItems, rightItems }: DetailsSectionProps) => {
  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm mb-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="space-y-2">
          {leftItems.map((item, i) => (
            <LabelValue key={i} label={item.label} value={item.value} />
          ))}
        </div>

        {rightItems && (
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-gray-200 pt-5 md:pt-0 md:pl-8">
            {rightItems.map((item, i) => (
              <LabelValue key={i} label={item.label} value={item.value} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsSection;
