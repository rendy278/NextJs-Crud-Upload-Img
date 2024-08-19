"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/action";
export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        "bg-sky-500 text-white w-full font-medium py-2.5 px-6  text-base rounded-sm hover:bg-sky-700",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
      Upload
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="p-3 text-white bg-blue-600 rounded-bl-md hover:bg-blue-700 text-center"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="p-3 text-white bg-red-500 rounded-bl-md hover:bg-red-600 text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
