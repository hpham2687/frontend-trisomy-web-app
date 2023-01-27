import { getTestsConfig } from '@/pages/patients/list/service';
import type { Effect, Reducer, Subscription } from 'umi';

// import * as usersService from '../services/users';
export interface TestType {
  testName: string;
  id: number;
}

export interface TestsModelType {
  namespace: 'index';
  state: TestType[];
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<TestType[]>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

export default {
  namespace: 'tests',
  state: {
    config: [],
  },
  reducers: {
    save(state: TestType[], { payload }) {
      return payload;
    },
  },
  effects: {
    *fetch({ payload }, { call, put }: any) {
      const response = yield call(getTestsConfig);
      console.log('data', response);

      yield put({
        type: 'save',
        payload: response,
      });
    },
    // *remove({ payload: id }, { call, put }) {
    //   yield call(usersService.remove, id);
    //   yield put({ type: 'reload' });
    // },
    // *patch({ payload: { id, values } }, { call, put }) {
    //   yield call(usersService.patch, id, values);
    //   yield put({ type: 'reload' });
    // },
    // *create({ payload: values }, { call, put }) {
    //   yield call(usersService.create, values);
    //   yield put({ type: 'reload' });
    // },
    // *reload(action, { put, select }) {
    //   const page = yield select((state) => state.users.page);
    //   yield put({ type: 'fetch', payload: { page } });
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
