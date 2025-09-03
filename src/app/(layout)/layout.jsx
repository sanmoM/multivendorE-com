
import AllRootModal from '@/components/root-layout/all-root-modals/AllRootModal';
import Footer from '@/components/root-layout/footer/Footer';
import Header from '@/components/root-layout/header/Header';
import AuthProvider from '@/Providers/AuthProvider';


export default async function layout({ children }) {
    return (
        <>
            <AuthProvider>

                <Header />
                <div className='min-h-screen'>
                    {children}
                </div>
                <Footer />
                {/* <AllModals /> */}
                <AllRootModal />
            </AuthProvider>
        </>
    )
}




