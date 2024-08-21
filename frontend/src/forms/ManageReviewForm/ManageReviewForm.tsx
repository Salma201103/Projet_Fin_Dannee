import { useForm } from "react-hook-form";
import { ReviewType } from "../../../../backend/src/shared/types";
//import { UserType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import ReviewFormSection from "./ReviewFormSection";

// Define the data structure for the review form
export type ReviewFormData = {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  starRating: number;
};

type Props = {
  // Define the props required by the component
  //currentUser: UserType; // Current user data
  review?: ReviewType; // Existing review data (optional)
  onSave: (reviewFormData: ReviewFormData) => void; // Callback function to save the review
  isLoading: boolean; // Loading state
};

  const ManageReviewForm = ({ 
    //currentUser,  
    review, onSave, isLoading, }: Props) => {
  //const ManageReviewForm = ({  review, onSave, isLoading, }: Props) => {
  // Initialize form methods from react-hook-form
  const formMethods = useForm<ReviewFormData>();
  const { handleSubmit, reset } = formMethods;

  // Reset the form when the review or current user data changes
  useEffect(() => {
    // Set default values for the form fields
    reset(review);
    // reset({
      
    //   //...review,
    //   // Use currentUser data for firstName and lastName fields
    //   //firstName: currentUser.firstName,
    //   //lastName: currentUser.lastName,
    //   // firstName: "currentUser.firstName",
    //   // lastName: "currentUser.lastName",
    // });
  }, [
    // currentUser,
     review, reset]);

  // Handle form submission
  const onSubmit = handleSubmit((formDataJson: ReviewFormData) => {
    const formData = {
      firstName: formDataJson.firstName,
      lastName: formDataJson.lastName,
      title: formDataJson.title,
      description: formDataJson.description,
      starRating: formDataJson.starRating,
    };
    // Invoke the onSave callback with the prepared form data
    onSave(formData);
  });

  // Render the review form
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        {/* Include the ReviewFormSection component */}
        <ReviewFormSection />        
        <span className="flex justify-end">
          <button 
            disabled={isLoading}
            type="submit"
            className="bg-cyan-600 text-white p-2 font-bold hover:bg-cyan-500 text-xl disabled:bg-gray-500"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageReviewForm;
