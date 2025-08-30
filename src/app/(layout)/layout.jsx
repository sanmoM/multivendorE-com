
import AllRootModal from '@/components/root-layout/all-root-modals/AllRootModal';
import Footer from '@/components/root-layout/footer/Footer';
import Header from '@/components/root-layout/header/Header';
import ReactQueryProvider from '@/lib/react-query/ReactQueryPRovider';


export default async function layout({ children }) {
    return (
        <ReactQueryProvider>
            <>
                <Header />
                {children}
                <Footer />
                {/* <AllModals /> */}
                <AllRootModal />
            </>
        </ReactQueryProvider>
    )
}




