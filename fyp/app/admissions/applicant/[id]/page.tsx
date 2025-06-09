import React from "react";
import ViewApplicationPage from "./_components/ViewApplicationPage";

interface AdmissionPageProps {
  params: {
    id: string; // this matches the folder name [id]
  };
}

const AdmissionPage = async ({ params }: AdmissionPageProps) => {
  const { id } = params; // get the id from params
  console.log(id);

  return <ViewApplicationPage applicantId={id} />;
};

export default AdmissionPage;
