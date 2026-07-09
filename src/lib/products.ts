import prolevoIImg from "@/assets/prolevo-i.png";
import budeproImg from "@/assets/budepro.png";
import profbImg from "@/assets/profb.png";
import progliumImg from "@/assets/proglium.png";
import flutiproFtImg from "@/assets/flutipro-ft.png";
import flutiproOxImg from "@/assets/flutipro-ox.png";
import pronasClearDropsImg from "@/assets/pronas-clear-drops.png";
import pronasClearMistImg from "@/assets/pronas-clear-mist.png";
import prokastLcImg from "@/assets/prokast-lc.png";
import prokastJrSyrupImg from "@/assets/prokast-jr-syrup.png";
import supromoxclav625Img from "@/assets/supromoxclav-625.png";
import bactorynCvImg from "@/assets/bactoryn-cv.png";
import proazoleRDsrImg from "@/assets/proazole-r-dsr.png";
import dcotpro6Img from "@/assets/dcotpro-6.png";
import prokofdxImg from "@/assets/prokof-dx.png";

export type Category =
  | "Respiratory Care"
  | "ENT & Nasal Care"
  | "Anti-Allergic"
  | "Anti-Infective"
  | "Gastro Care"
  | "Specialty";

export interface Product {
  slug: string;
  name: string;
  composition: string;
  category: Category;
  overview: string;
  indications: string[];
  benefits: string[];
  pack?: string;
  details?: { label: string; value: string }[];
  prescription?: boolean;
  img?: string;
}

export const categories: Category[] = [
  "Respiratory Care",
  "ENT & Nasal Care",
  "Anti-Allergic",
  "Anti-Infective",
  "Gastro Care",
  "Specialty",
];

export const products: Product[] = [
  {
    slug: "prolevo-i",
    name: "Prolevo I",
    composition: "Levosalbutamol + Ipratropium Respules",
    category: "Respiratory Care",
    overview:
      "A dual bronchodilator combination of Levosalbutamol and Ipratropium for rapid relief of bronchospasm. Provides complementary airway relaxation through two mechanisms.",
    indications: ["Acute bronchospasm", "Bronchial asthma (reliever therapy)", "COPD exacerbations"],
    benefits: ["Rapid bronchodilation", "Dual mechanism action", "Improves airflow quickly"],
    prescription: true,
    img: prolevoIImg,
  },
  {
    slug: "budepro",
    name: "Budepro",
    composition: "Budesonide Respules",
    category: "Respiratory Care",
    overview:
      "An inhaled corticosteroid used for long-term control of airway inflammation in asthma and chronic respiratory conditions.",
    indications: ["Bronchial asthma (maintenance)", "Chronic airway inflammation"],
    benefits: ["Reduces airway inflammation", "Prevents exacerbations", "Improves breathing control"],
    prescription: true,
    img: budeproImg,
  },
  {
    slug: "profb",
    name: "ProFB",
    composition: "Formoterol + Budesonide Respules",
    category: "Respiratory Care",
    overview:
      "A long-acting combination therapy for maintenance treatment of asthma and COPD.",
    indications: ["Persistent asthma", "COPD maintenance"],
    benefits: ["Long-lasting bronchodilation", "Reduces inflammation", "Prevents exacerbations"],
    prescription: true,
    img: profbImg,
  },
  {
    slug: "proglium",
    name: "Proglium",
    composition: "Glycopyrronium Respules",
    category: "Respiratory Care",
    overview:
      "A long-acting bronchodilator used primarily in COPD for sustained airway relaxation.",
    indications: ["COPD", "Chronic bronchitis", "Emphysema"],
    benefits: ["Prolonged bronchodilation", "Improves airflow", "Enhances quality of life"],
    prescription: true,
    img: progliumImg,
  },
  {
    slug: "prokof-dx",
    name: "Prokof DX",
    composition: "Dextromethorphan + Chlorpheniramine Maleate Syrup",
    category: "Respiratory Care",
    overview:
      "A cough suppressant with anti-allergic action for symptomatic relief of dry cough.",
    indications: ["Dry cough", "Allergic cough", "Cold-related cough"],
    benefits: ["Suppresses cough reflex", "Controls allergy symptoms", "Improves sleep"],
    prescription: true,
    img: prokofdxImg,
  },
  {
    slug: "flutipro-ft",
    name: "Flutipro FT",
    composition: "Fluticasone + Azelastine Nasal Spray",
    category: "ENT & Nasal Care",
    overview:
      "Dual-action nasal spray combining anti-inflammatory and antihistamine effects.",
    indications: ["Allergic rhinitis", "Nasal congestion", "Sneezing and irritation"],
    benefits: ["Rapid allergy relief", "Reduces inflammation", "Improves nasal airflow"],
    prescription: true,
    img: flutiproFtImg,
  },
  {
    slug: "flutipro-ox",
    name: "Flutipro OX",
    composition: "Fluticasone + Oxymetazoline Nasal Spray",
    category: "ENT & Nasal Care",
    overview: "Combines anti-inflammatory action with fast-acting decongestion.",
    indications: ["Severe nasal congestion", "Sinusitis", "Rhinitis"],
    benefits: ["Immediate decongestion", "Reduces swelling", "Sustained relief"],
    prescription: true,
    img: flutiproOxImg,
  },
  {
    slug: "pronas-clear-drops",
    name: "Pronas Clear Drops",
    composition: "Sodium Chloride Nasal Drops",
    category: "ENT & Nasal Care",
    overview:
      "A saline-based nasal hygiene range for cleansing and moisturizing nasal passages.",
    indications: ["Nasal dryness", "Allergies", "Sinus care", "Daily hygiene"],
    benefits: ["Clears allergens and mucus", "Safe for all age groups", "Supports nasal therapies"],
    img: pronasClearDropsImg,
  },
  {
    slug: "pronas-clear-mist-spray",
    name: "Pronas Clear Mist Spray",
    composition: "Sodium Chloride Nasal Mist Spray",
    category: "ENT & Nasal Care",
    overview:
      "A saline-based nasal hygiene range for cleansing and moisturizing nasal passages.",
    indications: ["Nasal dryness", "Allergies", "Sinus care", "Daily hygiene"],
    benefits: ["Clears allergens and mucus", "Safe for all age groups", "Supports nasal therapies"],
    img: pronasClearMistImg,
  },
  {
    slug: "prokast-lc",
    name: "Prokast LC",
    composition: "Montelukast + Levocetirizine Tablets",
    category: "Anti-Allergic",
    overview: "A combination therapy for long-term allergy control.",
    indications: ["Allergic rhinitis", "Seasonal allergies", "Chronic urticaria"],
    benefits: ["Controls allergic response", "Reduces sneezing and itching", "Improves quality of life"],
    pack: "Available in 10 mg / 5 mg and Pediatric 5 mg / 2.5 mg",
    prescription: true,
    img: prokastLcImg,
  },
  {
    slug: "prokast-jr-syrup",
    name: "Prokast Jr Syrup",
    composition: "Montelukast Syrup",
    category: "Anti-Allergic",
    overview: "Pediatric formulation for allergy and asthma support.",
    indications: ["Pediatric allergies", "Mild asthma support"],
    benefits: ["Child-friendly formulation", "Easy administration", "Effective allergy control"],
    prescription: true,
    img: prokastJrSyrupImg,
  },
  {
    slug: "supromoxclav-625",
    name: "Supromoxclav 625",
    composition: "Amoxicillin + Potassium Clavulanate Tablets",
    category: "Anti-Infective",
    overview:
      "A broad-spectrum antibiotic combination for resistant bacterial infections.",
    indications: ["Respiratory infections", "ENT infections", "Urinary infections"],
    benefits: ["Broad-spectrum activity", "Effective against resistant strains", "Reliable infection control"],
    prescription: true,
    img: supromoxclav625Img,
  },
  {
    slug: "bactoryn-cv",
    name: "Bactoryn CV",
    composition: "Cefuroxime + Clavulanate Tablets",
    category: "Anti-Infective",
    overview:
      "A cephalosporin-based antibiotic combination for bacterial infections.",
    indications: ["Respiratory infections", "Skin infections", "ENT infections"],
    benefits: ["Strong antibacterial coverage", "Effective in moderate infections"],
    prescription: true,
    img: bactorynCvImg,
  },
  {
    slug: "proazole-r-dsr",
    name: "Proazole R DSR",
    composition: "Rabeprazole + Domperidone Capsules",
    category: "Gastro Care",
    overview:
      "A combination therapy for acid suppression and improved gastric motility.",
    indications: ["GERD", "Acid reflux", "Dyspepsia"],
    benefits: ["Reduces acid secretion", "Improves digestion", "Relieves bloating"],
    prescription: true,
    img: proazoleRDsrImg,
  },
  {
    slug: "dcotpro-6",
    name: "Dcotpro 6",
    composition: "Deflazacort Tablets 6 mg",
    category: "Specialty",
    overview:
      "Dcotpro 6 contains Deflazacort 6 mg, a corticosteroid used in the treatment of inflammatory, allergic, and autoimmune conditions. It helps reduce inflammation and suppress the body's immune response when prescribed by a healthcare professional.",
    indications: ["Inflammatory conditions", "Allergic conditions", "Autoimmune conditions"],
    benefits: ["Reduces inflammation", "Modulates immune response", "Trusted corticosteroid therapy"],
    pack: "10 tablets per blister",
    details: [
      { label: "Active Ingredient", value: "Deflazacort 6 mg" },
      { label: "Dosage Form", value: "Tablets" },
      { label: "Pack Size", value: "10 tablets per blister" },
      { label: "Route", value: "Oral" },
    ],
    prescription: true,
    img: dcotpro6Img,
  },
];

export const WHATSAPP_NUMBER = "+91 7416705147"; // placeholder, update later

export function whatsappLink(productName: string) {
  const msg = `Hello,\n\nI would like to enquire about:\n\nProduct:\n${productName}\n\nPlease provide more information.\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
