import { Modal } from 'antd';

function BaseModal({ children, ...rest }: any) {
  return (
    <Modal visible={true} {...rest}>
      {children}
    </Modal>
  );
}

export default BaseModal;
