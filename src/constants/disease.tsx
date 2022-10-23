import { FamilyDiseaseDataType } from '../types/disease';
import { PersonalDiseaseDataType } from '@/types/disease';
import { ProFormRadio, ProFormText } from '@ant-design/pro-form';
import { ColumnsType } from 'antd/lib/table';
// patient/create table data
export const personalDiseaseData: PersonalDiseaseDataType[] = [
  {
    key: '1',
    diseaseName: 'Cao huyết áp',
    status: true,
    detail: 'abcd',
  },
  {
    key: '2',
    diseaseName: 'Tim mạch',
    status: true,
    detail: 'abcd',
  },
  {
    key: '3',
    diseaseName: 'Hô hấp',
    status: true,
    detail: 'abcd',
  },
  {
    key: '4',
    diseaseName: 'Thận',
    status: true,
    detail: 'abcd',
  },
  {
    key: '5',
    diseaseName: 'Nội tiết',
    status: true,
    detail: 'abcd',
  },
  {
    key: '6',
    diseaseName: 'Động kinh',
    status: true,
    detail: 'abcd',
  },
  {
    key: '7',
    diseaseName: 'Dị ứng',
    status: true,
    detail: 'abcd',
  },
  {
    key: '8',
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
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '2',
    diseaseName: 'Dị dạng',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '3',
    diseaseName: 'Bệnh di truyền',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '4',
    diseaseName: 'Đái tháo đường',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '5',
    diseaseName: 'Cao huyết áp',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '6',
    diseaseName: 'Béo phì',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
  {
    key: '7',
    diseaseName: 'Bệnh khác',
    motherFamily: false,
    husbandFamily: true,
    details: 'detail',
  },
];

export const familyDiseaseColumns: ColumnsType<FamilyDiseaseDataType> = [
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
        <ProFormText name={`name2-${index}`} placeholder="Nhập cụ thể" />
      </>
    ),
  },
];

export const personalDiseaseColumns: ColumnsType<PersonalDiseaseDataType> = [
  {
    title: 'Bệnh',
    dataIndex: 'diseaseName',
    key: 'diseaseName',
    render: (text) => text,
  },
  {
    title: 'Tình trạng',
    dataIndex: 'personalDisease',
    key: 'personalDisease',
    render: (value, _, index) => (
      <ProFormRadio.Group
        name={`personalDisease-${index}`}
        initialValue={value ? 'Có' : 'Không'}
        options={['Có', 'Không']}
      />
    ),
  },
  {
    title: 'Cụ thể',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, record, index) => (
      <>
        <ProFormText name={`name2-${index}`} placeholder="Nhập cụ thể" />
      </>
    ),
  },
];
