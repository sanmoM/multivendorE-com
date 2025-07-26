import Container from '@/components/shared/container/Container'
import HeaderWithBackBtn from '@/components/shared/header-with-back-btn/HeaderWithBackBtn'
import NavbarSearchbar from '@/components/shared/navbar-searchbar/NavbarSearchbar'

export default function ShopHeader() {
  return (
    <div className='lg:hidden'>
      <HeaderWithBackBtn />
      <Container className={"mt-8"}>
        <NavbarSearchbar />
      </Container>
    </div>
  )
}
