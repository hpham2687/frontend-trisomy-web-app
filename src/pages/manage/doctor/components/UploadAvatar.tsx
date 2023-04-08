import { Upload, message } from 'antd';
import { useState } from 'react';
import { uploadAvatar } from '../service';
import type { RcFile } from 'antd/lib/upload';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AvatarView = ({ avatar }: { avatar: string }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(avatar);

  const handleChange: any = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUploadError = () => {
    message.error('Cập nhật ảnh đại diện không thành công!');
  };

  const handleUploadSuccess = (file: RcFile) => {
    getBase64(file as RcFile, (url) => {
      setImageUrl(url);
    });
    setLoading(false);
    message.success('Cập nhật ảnh đại diện thành công!');
  };

  const customRequest = ({ file }: any) => {
    const formData = new FormData();
    formData.append('avatar', file);
    uploadAvatar(formData)
      .then(() => {
        handleUploadSuccess(file);
      })
      .catch(() => {
        handleUploadError();
      });
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>Ảnh đại diện</div>

      <Upload
        customRequest={customRequest}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </>
  );
};

export default AvatarView;
