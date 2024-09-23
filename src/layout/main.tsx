import Footer from './footer';
import Header from './header';

const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='px-10'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
