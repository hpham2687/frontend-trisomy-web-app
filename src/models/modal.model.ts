import { Effect, Reducer, Subscription } from 'umi';

interface ModalModelState {
  displayModal: string | null;
  onModalClose: null | ((...args: any[]) => void);
}

type ModalPayload = {
  displayModal: string | null;
  [key: string]: any;
};

type ModalOptions = {
  onModalClose?: (...args: any[]) => void | null;
  [key: string]: any;
};

const initialState: ModalModelState = { displayModal: null, onModalClose: null };

export interface ModalModelType {
  namespace: 'modal';
  state: ModalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    showModal: Reducer<ModalModelState>;
    hideModal: Reducer<ModalModelState>;
    save: Reducer<ModalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const ModalModel: ModalModelType = {
  namespace: 'modal',

  state: initialState,

  effects: {
    *query({ payload }, { call, put }) {},
  },

  reducers: {
    showModal: (state, action) => {
      console.log('enter showmodal');
      const modalCustomProps = action.payload?.customProps || {};
      if (!action.payload) {
        return {
          displayModal: null,
          onModalClose: null,
        };
      }
      console.log({ modalCustomProps });

      return {
        ...initialState,
        displayModal: action.payload.modalKey,
        ...modalCustomProps,
      };
    },
    hideModal: (state, action) => {
      if (action.payload === state.displayModal) {
        state.displayModal = null;
      }
      return state;
    },

    // hideModal: (state, action: PayloadAction<any>) => {
    //   if (action.payload === state.displayModal) {
    //     state.displayModal = null;
    //   }
    // },
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {},
  },
};

export default ModalModel;
