interface interfaceSigInProps {
  title: string;
  description: string;
}

const SignInModal = ({ title, description }: interfaceSigInProps) => {
  return (
    <div>
      <h1 className="text-6xl text-white">{title}</h1>
      <p className="text-6xl text-white">{description}</p>
    </div>
  );
};

export default SignInModal;
