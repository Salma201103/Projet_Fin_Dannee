import ManageReviewForm, { ReviewFormData } from "../forms/ManageReviewForm/ManageReviewForm";
import * as apiClient from "../api-client";
//import { useQuery } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "react-query";

const AddReview = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyReview, {
    onSuccess: () => {
      showToast({ message: "Review Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: `Error Saving Review`, type: "ERROR" });
    },
  });

  const handleSave = async (reviewFormData: ReviewFormData) => {
    
     mutate(reviewFormData);
    
  };

  return (
    
      <ManageReviewForm onSave={handleSave} isLoading={isLoading} />
  
  );
};

export default AddReview;