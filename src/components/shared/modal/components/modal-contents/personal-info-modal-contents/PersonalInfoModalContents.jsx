"use client";

import Button from '@/components/shared/button/Button'
import DateInput from '@/components/shared/inputs/date-input/DateInput'
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import SingleImageInput from '@/components/shared/single-image-input/SingleImageInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import { IMAGE_BASE_URL } from '@/config'
import useAuthAxios from '@/hooks/useAuthAxios'
import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function PersonalInfoModalContents({ handleCloseModal }) {
  const axios = useAxios();
  const authAxios = useAuthAxios();
  const queryClient = useQueryClient();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get("/my-personal-info").then((res) => {
      setFirstName(res.data?.info?.first_name || "");
      setLastName(res.data?.info?.last_name || "");
      setEmail(res.data?.info?.email || "");
      setPhoneNumber(res.data?.info?.mobile || "");
      setDateOfBirth(res.data?.info?.dateOfBirth || "");
      setBio(res.data?.info?.bio || "");
      if (res.data?.info?.image) {
        setImage(IMAGE_BASE_URL + res.data?.info?.image || "");
      }
    });
  }, []);

  // 🚀 React Query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: (formData) =>
      authAxios.post("/new-info/store", formData).then((res) => res.data),
    onSuccess: () => {
      toast.success("Personal information updated successfully!");
      queryClient.invalidateQueries(["personal-info"]);
      handleCloseModal();
    },
    onError: () => {
      toast.error("Failed to update personal information.");
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("bio", bio);

    if (image instanceof File) {
      formData.append("image", image);
    }

    mutate(formData);
  };

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div>
        <PrimaryTitle title={"Personal Details"} />
        <div className="space-y-6 my-6">
          <TextInput placeholder="First Name" className="w-full" value={firstName} setValue={setFirstName} />
          <TextInput placeholder="Last Name" className="w-full" value={lastName} setValue={setLastName} />
          <TextInput placeholder="Email" className="w-full" value={email} setValue={setEmail} />
          <TextInput placeholder="Phone Number" className="w-full" value={phoneNumber} readonly />
          <DateInput className="w-full" value={dateOfBirth} setValue={setDateOfBirth} />
          <TextAreaInput placeholder="Bio" className="w-full" value={bio} setValue={setBio} />
          <SingleImageInput image={image} setImage={setImage} />
        </div>
      </div>
      <Button
        text={isPending ? "Saving..." : "Save Changes"}
        className="bg-red-600 text-white w-full"
        onClick={handleSubmit}
        disabled={isPending}
      />
    </div>
  );
}
