import BaseModal from '../Common/Modal';

function GeneralInfo({ body, ...rest }: any) {
  return (
    <BaseModal
      // footer={[
      //   <Button key="back" onClick={onCancel}>
      //     Huỷ
      //   </Button>,
      //   <Button key="submit" type="primary" onClick={handleOk}>
      //     Thêm
      //   </Button>,
      // ]}
      title="Kết quả chuẩn đoán AI "
      // onOk={handleOk}
      //  onCancel={handleCancel}

      // onCancel={onCancel}
      {...rest}
    >
      {body || ''}
    </BaseModal>
  );
}

export default GeneralInfo;
