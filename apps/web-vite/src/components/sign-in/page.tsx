import { Link } from "@tanstack/react-router";
import { Authenticate } from "../shared/auth/authenticate";
import { ConnectWallet } from "../shared/auth/connect-wallet";

export const SignInPage = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="mb-1 font-serif text-2xl">Welcome back</h2>
        <p className="text-muted text-sm">Please sign in to continue.</p>
      </div>

      <ConnectWallet />

      <Authenticate />

      <div className="mb-4 text-muted text-xs">
        Don’t have an account?{" "}
        <Link
          to="/sign-up"
          className="font-medium underline underline-offset-3 transition-colors hover:text-primary"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};
