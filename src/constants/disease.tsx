import type { FamilyDiseaseDataType } from '../types/disease';
import type { PersonalDiseaseDataType } from '@/types/disease';
import { ProFormRadio, ProFormText } from '@ant-design/pro-form';
import type { ColumnsType } from 'antd/lib/table';
import styled from 'styled-components';

const DiseaseDetailInput = styled(ProFormText)`
  input {
    min-width: 300px;
  }
`;

// patient/create table data
export const personalDiseaseData: PersonalDiseaseDataType[] = [
  {
    key: '1',
    diseaseName: 'Cao huyết áp',
    label: 'highBloodPressure',
    status: true,
    detail: 'abcd',
  },
  {
    key: '2',
    diseaseName: 'Tim mạch',
    label: 'cardiovascularDisease',
    status: true,
    detail: 'abcd',
  },
  {
    key: '3',
    diseaseName: 'Hô hấp',
    label: 'respiratoryDisease',
    status: true,
    detail: 'abcd',
  },
  {
    key: '4',
    diseaseName: 'Thận',
    label: 'nephroptosis',

    status: true,
    detail: 'abcd',
  },
  {
    key: '5',
    diseaseName: 'Nội tiết',
    label: 'hormoneDisease',
    status: true,
    detail: 'abcd',
  },
  {
    key: '6',
    diseaseName: 'Động kinh',
    label: 'epilepsy',
    status: true,
    detail: 'abcd',
  },
  {
    key: '7',
    diseaseName: 'Dị ứng',
    label: 'allergy',
    status: true,
    detail: 'abcd',
  },
  {
    key: '8',
    label: 'surgery',
    diseaseName: 'Phẫu thuật',
    status: true,
    detail: 'abcd',
  },
];
// patient/create table column
export const familyDiseaseData: FamilyDiseaseDataType[] = [
  {
    key: '1',
    diseaseName: 'Sinh đôi',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '2',
    diseaseName: 'Dị dạng',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '3',
    diseaseName: 'Bệnh di truyền',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '4',
    diseaseName: 'Đái tháo đường',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '5',
    diseaseName: 'Cao huyết áp',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '6',
    diseaseName: 'Béo phì',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
  {
    key: '7',
    diseaseName: 'Bệnh khác',
    motherFamily: false,
    husbandFamily: false,
    details: 'detail',
  },
];

export const familyDiseaseColumns: ({ readonly }: any) => ColumnsType<FamilyDiseaseDataType> = (
  { readonly }: any = { readonly: false },
) => [
  {
    title: 'Bệnh',
    dataIndex: 'diseaseName',
    key: 'diseaseName',
    render: (text) => text,
  },
  {
    title: 'Gia đình thai phụ',
    dataIndex: 'motherFamily',
    key: 'motherFamily',
    render: (value, _, index) => (
      <ProFormRadio.Group
        name={`motherFamily-${index}`}
        initialValue={value ? 'Có' : 'Không'}
        options={['Có', 'Không']}
        readonly={readonly}
      />
    ),
  },
  {
    title: 'Gia đình chồng thai phụ',
    dataIndex: 'husbandFamily',
    key: 'husbandFamily',
    render: (value, _, index) => {
      return (
        <ProFormRadio.Group
          name={`husbandFamily-${index}`}
          initialValue={value ? 'Có' : 'Không'}
          options={['Có', 'Không']}
          readonly={readonly}
        />
      );
    },
  },
  {
    title: 'Cụ thể',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, record, index) => (
      <>
        <DiseaseDetailInput
          name={`family-${index}`}
          placeholder="Nhập cụ thể"
          readonly={readonly}
        />
      </>
    ),
  },
];

export const personalDiseaseColumns: ({ readonly }: any) => ColumnsType<PersonalDiseaseDataType> = (
  { readonly }: any = { readonly: false },
) => [
  {
    title: 'Bệnh',
    dataIndex: 'diseaseName',
    key: 'diseaseName',
    render: (text) => text,
    width: 120,
  },
  {
    title: 'Tình trạng',
    dataIndex: 'personalDisease',
    key: 'personalDisease',
    width: 180,
    render: (value, record, index) => (
      <ProFormRadio.Group
        name={record.label}
        initialValue={value ? 'Có' : 'Không'}
        options={['Có', 'Không']}
        readonly={readonly}
      />
    ),
  },
  {
    title: 'Cụ thể',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, record, index) => (
      <>
        <DiseaseDetailInput
          className="diseaseDetail"
          width="md"
          name={`${record.label}Detail`}
          placeholder="Nhập cụ thể"
          readonly={readonly}
        />
      </>
    ),
  },
];
