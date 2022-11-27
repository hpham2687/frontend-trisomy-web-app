import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Produced by Đại học Bách Khoa Hà Nội và Đại học Y Hà Nội',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        marginTop: 'auto',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
    />
  );
};

export default Footer;
