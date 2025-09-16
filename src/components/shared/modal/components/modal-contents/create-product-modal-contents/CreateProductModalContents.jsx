import Button from '@/components/shared/button/Button';
import DateInput from '@/components/shared/inputs/date-input/DateInput';
import SecondarySelectInput from '@/components/shared/inputs/secondary-select-input/SecondarySelectInput';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import SingleImageInput from '@/components/shared/single-image-input/SingleImageInput';
import useAuthAxios from '@/hooks/useAuthAxios';
import useModalAction from '@/hooks/useModalAction';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';

export default function CreateProductModalContents() {
    const user = useSelector((state) => state.user?.user);
    const [productName, setProductName] = useState("");
    const [categoryOptions, setCategoryOption] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [galleryImages, setGalleryImages] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [discountStart, setDiscountStart] = useState("");
    const [discountEnd, setDiscountEnd] = useState("");
    const [tag, setTag] = useState("");

    const { handleOpenModal, handleCloseModal } = useModalAction();
    const axios = useAuthAxios();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!category || !subCategory || !productName || !regularPrice || !stock || !image || !user?.id) {
            toast.error("Please fill all required fields.");
            return;
        }

        const formData = new FormData();

        // required
        formData.append("customer_id", user?.id);
        formData.append("category_id", category);
        formData.append("sub_category_name", subCategory);
        formData.append("name", productName);
        formData.append("short_description", shortDescription);
        formData.append("full_description", fullDescription);
        formData.append("stock", parseInt(stock) || 0);
        formData.append("regular_price", parseFloat(regularPrice));

        // optional
        // if (discountPrice) formData.append("discount_price", parseFloat(discountPrice));
        if (discountPercentage) formData.append("discount_percentage", parseFloat(discountPercentage));
        if (discountStart) formData.append("discount_start", discountStart);
        if (discountEnd) formData.append("discount_end", discountEnd);
        if (color) formData.append("color", color);
        if (size) formData.append("size", size);
        if (tag) formData.append("tag", tag);
        if (videoUrl) formData.append("video_url", videoUrl);

        // image (main)
        if (image instanceof File) {
            formData.append("image", image);
        }

        // gallery images
        galleryImages.forEach((file, index) => {
            if (file instanceof File) {
                formData.append(`gallery_image[${index}]`, file);
            }
        });

        formData.append("type", "general_product");

        axios
            .post("/reseller/product-upload", formData)
            .then(() => {
                toast.success("Product added successfully!");
                handleCloseModal();
                handleOpenModal("seller-product-modal");
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message || "Something went wrong while adding product.");
                console.error("Error:", err);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const [category] = await Promise.all([
                axios.get("/seller/product/category"),
            ]);
            // set category options
            setCategoryOption(category?.data?.categories?.map(category => ({ label: category.categoryName, value: category.id, subCategory: category.subcategory })));
        };
        fetchData();
    }, []);


    useEffect(() => {
        // set sub category options based on category
        setSubCategoryOptions(categoryOptions?.find(singleCategoryOption => singleCategoryOption.value === parseInt(category))?.subCategory?.map(subcategory => ({ label: subcategory, value: subcategory })));
    }, [category]);


    return (
        <form className="flex flex-col h-full pt-2" onSubmit={handleSubmit}>
            <div className="grow space-y-4">
                <TextInput placeholder="Product Name" value={productName} setValue={setProductName} />
                <div className='grid grid-cols-2 gap-4'>
                    <SecondarySelectInput options={categoryOptions} placeholder='Select a category' setValue={setCategory} value={category} hasLabel={false} />
                    <SecondarySelectInput options={subCategoryOptions} setValue={setSubCategory} placeholder='Select a subcategory' value={subCategory} hasLabel={false} />
                </div>
                <TextInput placeholder="Stock" value={stock} setValue={setStock} isNumber />
                <TextInput placeholder="Color" value={color} setValue={setColor} />
                <TextInput placeholder="Size" value={size} setValue={setSize} />
                <TextInput placeholder="Tag" value={tag} setValue={setTag} />
                <TextInput placeholder="Regular Price" value={regularPrice} setValue={setRegularPrice} isNumber />
                {/* <TextInput placeholder="Discount Price" value={discountPrice} setValue={setDiscountPrice} isNumber /> */}
                <TextInput placeholder="Discount Percentage" value={discountPercentage} setValue={setDiscountPercentage} isNumber />
                <div className='grid grid-cols-2 gap-4'>
                    <DateInput placeholder="Discount Start" value={discountStart} setValue={setDiscountStart} />
                    <DateInput placeholder="Discount End" value={discountEnd} setValue={setDiscountEnd} />
                </div>
                <TextInput
                    placeholder="Short Description"
                    value={shortDescription}
                    setValue={setShortDescription}
                />
                <TextAreaInput
                    value={fullDescription}
                    setValue={setFullDescription}
                    placeholder="Full Description"
                    inputClassName="resize-none h-40"
                />
                <TextInput placeholder="Video Url" value={videoUrl} setValue={setVideoUrl} />
                <SingleImageInput
                    image={image}
                    setImage={setImage}
                    placeholder="Upload an image"
                />
                <div className='grid grid-cols-4 gap-4'>
                    {
                        galleryImages?.map((singleImage, index) => (
                            <div className='relative' key={index}>
                                <SingleImageInput
                                    image={singleImage}
                                    placeholder=''
                                    containerClassName={"w-24 h-auto aspect-square"}
                                    iconClassName={"w-[30%]"}
                                />
                                <button onClick={() => setGalleryImages(prev => prev.filter(singleImage => singleImage !== singleImage))} className='absolute top-0 right-0 text-white bg-red-600 rounded-full p-2 text-sm'><IoClose /></button>
                            </div>
                        ))

                    }
                    <SingleImageInput
                        image={""}
                        // setImage={(image) => console.log(image)}
                        setImage={(image) => setGalleryImages(prev => [...prev, image])}
                        placeholder=""
                        containerClassName={"w-full lg:w-24 h-auto aspect-square"}
                        iconClassName={"w-[30%]"}
                    />
                </div>
            </div>
            <Button
                type="submit"
                text={"Add Product"}
                className="bg-red-600 text-white w-full mt-4 "
            />
        </form>
    );
}
