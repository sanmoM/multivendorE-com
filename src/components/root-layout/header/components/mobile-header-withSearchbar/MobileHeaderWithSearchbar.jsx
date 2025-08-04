import Container from '@/components/shared/container/Container'
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader'
import NavbarSearchbar from '@/components/root-layout/header/components/navbar-searchbar/NavbarSearchbar'

export default function MobileHeaderWithSearchbar({title}) {
    return (
        <div className='lg:hidden'>
            {/* <HeaderWithBackBtn /> */}
            <MobileHeader title={title} />
            <Container className={"my-4"}>
                <NavbarSearchbar />
            </Container>
        </div>
    )
}
