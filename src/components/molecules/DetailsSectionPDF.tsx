import { View, Text, StyleSheet } from "@react-pdf/renderer";
import LabelValuePDF from "../atoms/LabelValuePDF";

const styles = StyleSheet.create({
  section: { marginBottom: 12 },
  heading: { fontSize: 16, marginBottom: 6, fontWeight: "bold" },
});

interface DetailsSectionPDFProps {
  title: string;
  items: { label: string; value: string | number }[];
  breakBefore?: boolean;
}

const DetailsSectionPDF = ({ title, items, breakBefore }: DetailsSectionPDFProps) => (
  <View style={styles.section}>
    <Text break={breakBefore} style={styles.heading}>
      {title}
    </Text>
    {items.map((item, idx) => (
      <LabelValuePDF key={idx} label={item.label} value={item.value} />
    ))}
  </View>
);

export default DetailsSectionPDF;
