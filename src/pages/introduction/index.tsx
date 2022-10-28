import Footer from '@/components/Footer';
import UnauthenticatedHeader from '@/components/Unautenticated/Header';
import Introduction from '../authentication/Login/Introduction';

const IntroductionPage: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <UnauthenticatedHeader />
        <div style={{ padding: 24 }}>
          <Introduction />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IntroductionPage;
