// This will be the default route
// Need this for protected routes, uncomment this to use it
// import { setCredentialsSnapshot } from "@/services/state/redux/slice/credentialSlice";
// Sample usage:   dispatch(setCredentialsSnapshot(userData));
import { SignInModal } from "@/components";
import { PageWrapper } from "@/layout";
const Login = () => {
  return (
    <>
      <PageWrapper>
        <SignInModal title="Title 1" description="Tite" />
        <SignInModal title="Title 2" description="Tite" />
        <SignInModal title="Title 3" description="Tite" />
      </PageWrapper>
    </>
  );
};

export default Login;
