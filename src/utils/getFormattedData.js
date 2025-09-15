export const getFormattedProduct = (data) => {
    if (!data) return null;

    const formattedData = {
        id: data.id,
        image: data?.product_image || data?.image,
        title: data?.cake_name || data?.name,
        subtitle: data?.short_description || data?.description,
        price: `$${data?.regular_price}`,
        type: data?.type,
    };
    return formattedData;
};

export const getFormattedShop = (data) => {
    if (!data) return null;

    const formattedData = { title: data?.shop_name, subtitle: data?.address, image: data?.image };

    return formattedData;
};
