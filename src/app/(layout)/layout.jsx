
import AllRootModal from '@/components/root-layout/all-root-modals/AllRootModal';
import Footer from '@/components/root-layout/footer/Footer';
import Header from '@/components/root-layout/header/Header';


export default async function layout({ children }) {
    return (
            <>
                <Header />
                {children}
                <Footer />
                {/* <AllModals /> */}
                <AllRootModal />
            </>
    )
}




