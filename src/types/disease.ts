export interface PersonalDiseaseDataType {
  key: string;
  diseaseName: string;
  status: boolean;
  detail: string;
}

export interface FamilyDiseaseDataType {
  key: string;
  diseaseName: string;
  motherFamily: boolean;
  husbandFamily: boolean;
  details: string;
}
