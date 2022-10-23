import type { Request, Response } from 'express';

const advancedOperation1 = [
  {
    key: 'op1',
    patientId: 'patientId1',
    name: 'name',
    dateOfBirth: '13/5/2000',
    address: 'address',
  },
  {
    key: 'op2',
    patientId: 'patientIdo1',
    name: 'name',
    address: 'address',
    dateOfBirth: '13/5/2000',
  },
  {
    key: 'op3',
    patientId: 'patientIdsdfsdf',
    name: 'name',
    address: 'address',
    dateOfBirth: '13/5/2000',
  },
  {
    key: 'op4',
    patientId: 'patientIsdfsdfd',
    name: 'name',
    dateOfBirth: '13/5/2000',
    address: 'address',
  },

  {
    key: 'op5',
    patientId: 'patientIdsfdsfd',
    name: 'name',
    dateOfBirth: '13/5/2000',
    address: 'address',
  },
];

function getProfileAdvancedData(req: Request, res: Response) {
  const result = {
    data: {
      advancedOperation1,
      // advancedOperation2,
      // advancedOperation3,
    },
  };
  return res.json(result);
}

const getPatientTests = (req: Request, res: Response) => {
  const result = {
    patientTests: [
      {
        key: 'op1',
        date1: 'date',
        testName: 'Test name',
        status: 0,
        doctorName: '13/5/2000',
        createdDate: '13/5/2000',
      },
      {
        key: 'op2',
        date1: 'date',
        testName: 'Test name',
        status: 'Da co ket qua',
        doctorName: '13/5/2000',
        createdDate: '13/5/2000',
      },
      {
        key: 'op3',
        date1: 'date',
        testName: 'Test name',
        status: 'Da co ket qua',
        doctorName: '13/5/2000',
        createdDate: '13/5/2000',
      },
      {
        key: 'op4',
        date1: 'date',
        testName: 'Test name',
        status: 'Da co ket qua',
        doctorName: '13/5/2000',
        createdDate: '13/5/2000',
      },
      {
        key: 'op5',
        date1: 'date',
        testName: 'Test name',
        status: 'Da co ket qua',
        doctorName: '13/5/2000',
        createdDate: '13/5/2000',
      },
    ],
  };
  return res.json(result);
};

export default {
  'GET  /api/profile/advanced': getProfileAdvancedData,
  'GET  /test/patientId': getPatientTests,
};
