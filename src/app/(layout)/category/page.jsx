import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader'
import Card from '@/components/shared/card/Card'
import Container from '@/components/shared/container/Container'
import SectionTitle from '@/components/shared/section-title/SectionTitle'
import { categories } from '@/data'

export default function page() {
    return (
        <div>
            <MobileHeader title={"Categories"} />
            <Container className={"min-h-screen"}>
                <div className='mt-10'>
                    <SectionTitle title='Main Categories' />
                    <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-x-4 lg:gap-y-8 mt-6'>
                        {
                            categories.map((category) => (
                                <Card key={category.id} item={{ image: category?.image, name: category?.title }} />
                            ))
                        }
                    </div>
                </div>
            </Container>
    </div>
    )
}
