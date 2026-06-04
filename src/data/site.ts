export const site = {
  name: "Continental Cargo",
  legalName: "Continental Cargo Logistics Company",
  tagline: "Warehouse operations partner in Sydney",
  description:
    "Secure warehouse, cross-dock and distribution services for Airway operations in Botany, NSW. Example data for demonstration.",
  phone: "02 9381 8400",
  phoneHref: "tel:+61293818400",
  email: "warehouse@continentalcargo.example",
  address: {
    line1: "Unit 12, Lord Street Industrial Estate",
    line2: "Botany NSW 2019, Australia",
  },
  hours: "Mon–Fri 6:00am – 6:00pm · Sat by appointment",
  partner: {
    name: "Airway",
    role: "Approved warehouse contractor",
    url: "https://www.airway.com.au/",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Facility", href: "#facility" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Pallet Storage",
    description:
      "Short and long-term racked and floor storage with barcode inventory control and daily reporting.",
    icon: "storage",
  },
  {
    title: "Cross-Docking",
    description:
      "Fast inbound staging and outbound dispatch to keep your freight moving without unnecessary dwell time.",
    icon: "crossdock",
  },
  {
    title: "Container Handling",
    description:
      "Unload, inspect, reload and stage containers with forklift and dock access for standard equipment.",
    icon: "container",
  },
  {
    title: "Pick & Pack",
    description:
      "Order consolidation, labelling and local dispatch aligned with your customer delivery windows.",
    icon: "pickpack",
  },
  {
    title: "Distribution",
    description:
      "Metro Sydney and regional road distribution with scheduled runs and proof of delivery.",
    icon: "distribution",
  },
  {
    title: "Secure Facility",
    description:
      "24/7 CCTV, controlled access, fire systems and dedicated account management for Airway flows.",
    icon: "secure",
  },
] as const;

export const stats = [
  { value: "12,000+", label: "sqm warehouse capacity" },
  { value: "24/7", label: "site monitoring" },
  { value: "99.2%", label: "on-time dispatch (sample)" },
  { value: "2019", label: "Botany NSW location" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Enquire",
    description:
      "Tell us your volumes, SKU profile and handling requirements. We respond within one business day.",
  },
  {
    step: "02",
    title: "Onboard",
    description:
      "Site induction, WMS setup and slot allocation. Integrated workflows with Airway consignments.",
  },
  {
    step: "03",
    title: "Operate",
    description:
      "Receive, store, stage and dispatch with full visibility and scheduled reporting.",
  },
] as const;

export const faqs = [
  {
    question: "Do you handle air freight directly?",
    answer:
      "No. Continental Cargo provides warehouse and road distribution only. Air cargo is managed by our partner Airway.",
  },
  {
    question: "What types of goods can you store?",
    answer:
      "General cargo, palletised freight, e-commerce inventory and staged consignments. Temperature-controlled and DG by prior approval (sample policy).",
  },
  {
    question: "Is there a minimum storage period?",
    answer:
      "Flexible terms for contractors and forwarders. Example: no long-term lock-in for standard pallet storage.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the contact form below or call our warehouse desk. Include estimated pallets, turnover and required services.",
  },
] as const;
