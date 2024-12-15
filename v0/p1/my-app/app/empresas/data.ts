export const dummyCompanies = [
  {
    id: 1,
    name: 'Constructora TEST',
    industry: 'Construcción',
    contact: 'Juan Pérez',
    employees: 150,
    incidents: 3,
    programs: 5,
    inspections: 12
  },
  {
    id: 2,
    name: 'Minera XYZ',
    industry: 'Minería',
    contact: 'María González',
    employees: 300,
    incidents: 2,
    programs: 8,
    inspections: 24
  },
  // Add more dummy companies...
];

export const dummyPrograms = [
  {
    id: 1,
    name: 'Programa de Seguridad en Altura',
    objective: 'Reducir accidentes en trabajo en altura en un 50%',
    status: 'En progreso',
    company_id: 1
  },
  // Add more dummy programs...
];

export const dummyInspections = [
  {
    id: 1,
    date: '2024-01-15',
    type: 'Seguridad General',
    location: 'Obra Central',
    status: 'Completada',
    company_id: 1
  },
  // Add more dummy inspections...
];

export const dummyAccidents = [
  {
    id: 1,
    date: '2024-01-10',
    description: 'Caída desde altura',
    severity: 'Grave',
    location: 'Sector A',
    company_id: 1
  },
  // Add more dummy accidents...
];

