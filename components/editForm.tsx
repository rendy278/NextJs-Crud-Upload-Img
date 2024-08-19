"use client";
import { updateImage } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import type { upload } from "@prisma/client";

const EditForm = ({ data }: { data: upload }) => {
  const [action, formAction] = useFormState(
    updateImage.bind(null, data.id),
    null
  );
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2  px-4 rounded-sm border border-gray-400 w-full "
          placeholder="Title.."
          defaultValue={data.title}
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-red-600 font-bold mt-3">{action?.error?.title}</p>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2  file:px-4 file:mr-4 file:rounded-sm file:border file:border-gray-400 w-full 
          file:hover:border-gray-600 file:cursor-pointer "
          placeholder="Title.."
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-red-600 font-bold mt-3">{action?.error?.image}</p>
      </div>
      <div className="mb-4 pt-2">
        <SubmitButton label="upload" />
      </div>
    </form>
  );
};

export default EditForm;
