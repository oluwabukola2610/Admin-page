import MainLayout from "@/components/layouts/MainLayout";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default template;
