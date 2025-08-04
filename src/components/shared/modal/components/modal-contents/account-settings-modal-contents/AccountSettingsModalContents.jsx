import PrimaryTitle from '@/components/shared/title/PrimaryTitle';

export default function AccountSettingsModalContents({ isMobile, accountMenuItems }) {

    return (
        <div className="min-w-sm w-full space-y-6">
            {accountMenuItems.map((category, index) => (
                <div key={index}>
                    <PrimaryTitle className="text-xl font-bold text-gray-900 mb-4" title={category.category} />
                    <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                            >
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-sm text-secondary">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                        {
                            isMobile && category?.mobileMenuItems?.map((item, index) => (
                                <div
                                    onClick={item.handleClick || null}
                                    key={index}
                                    className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                                >
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-secondary">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
