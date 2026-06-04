import { SignIn } from "@clerk/nextjs";

const AdminLoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4 py-12 text-[#302133]">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
            Purple Leaf Herbs
          </p>

          <h1 className="mt-3 font-serif text-4xl text-[#3b243f]">
            Admin Login
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
            Sign in to manage blog posts and site updates.
          </p>
        </div>

        <SignIn
          path="/admin/login"
          routing="path"
          fallbackRedirectUrl="/admin"
          signUpUrl="/admin/login"
          appearance={{
            elements: {
              footerAction: "hidden",
              footer: "hidden",
              socialButtonsBlockButton: "hidden",
              socialButtonsBlockButtonText: "hidden",
              dividerRow: "hidden",
            },
          }}
        />
      </div>
    </main>
  );
};

export default AdminLoginPage;