"use client";

import Button from "@/components/shared/button/Button";
import TextInput from "@/components/shared/inputs/text-input/TextInput";
import PrimaryTitle from "@/components/shared/title/PrimaryTitle";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddAddressModalContents = ({ handleCloseAllModal }) => {
    const user = useSelector((state) => state.user?.user);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    // 🚀 React Query Mutation
    const { mutate, isPending } = useMutation({
        mutationFn: (newAddress) =>
            axios.post("/address/store", newAddress).then((res) => res.data),
        onSuccess: () => {
            toast.success("Address added successfully");
            handleCloseAllModal();
            queryClient.invalidateQueries(["personal-info"]);
        },
        onError: () => {
            toast.error("Failed to add address");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
            street,
            city,
            state,
            zip_code: zipCode,
            country,
        });
    };

    useEffect(() => {
        if (user) {
            setStreet(user.street || "");
            setCity(user.city || "");
            setState(user.state || "");
            setZipCode(user.zip_code || "");
            setCountry(user.country || "");
        }
    }, [user]);

    return (
        <div className="w-full flex flex-col h-full justify-between">
            <div>
                <PrimaryTitle title={"Address Details"} />
                <div className="space-y-6">
                    <TextInput placeholder="Street" className="w-full" value={street} setValue={setStreet} />
                    <TextInput placeholder="City" className="w-full" value={city} setValue={setCity} />
                    <TextInput placeholder="State" className="w-full" value={state} setValue={setState} />
                    <TextInput placeholder="Zip Code" className="w-full" value={zipCode} setValue={setZipCode} />
                    <TextInput placeholder="Country" className="w-full" value={country} setValue={setCountry} />
                </div>
            </div>

            <Button
                text={isPending ? "Adding..." : "Add Address"}
                className="bg-red-600 text-white w-full"
                onClick={handleSubmit}
                disabled={isPending}
            />
        </div>
    );
};

export default AddAddressModalContents;
