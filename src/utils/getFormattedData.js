export const getFormattedProduct = (data) => {
    if (!data) return null;

    const formattedData = {
        id: data.id,
        image: data?.product_image || data?.image,
        title: data?.cake_name || data?.name,
        subtitle: data?.short_description || data?.description,
        price: `$${data?.regular_price}`
    };

    return formattedData;
};

export const getFormattedShop = (data) => {
    if (!data) return null;

    const formattedData = { title: data?.vendor?.shop_name, subtitle: data?.vendor?.address, image: data?.vendor?.image };

    return formattedData;
};
