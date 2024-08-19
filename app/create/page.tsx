import CreateForm from "@/components/createForm";

const page: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-sm p-8">
        <h1 className="text-2xl font-bold mb-5">Upload Image</h1>
        <CreateForm />
      </div>
    </main>
  );
};

export default page;
