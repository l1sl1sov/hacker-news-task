import { useNavigate } from 'react-router';

export const ComeBackBtn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); //if we have the browsing story
    } else {
      navigate('/'); //if not just at home
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer w-fit group leading-none bg-primary-light text-primary hover:text-white border border-primary-light shadow-primary-glow px-4 py-2 text-xs rounded-xl font-bold"
    >
      <span className="text-[1.3em] pr-0 group-hover:pr-1.5 transition-all duration-200 ease-out">
        ←
      </span>
      <span>Come back</span>
    </button>
  );
};
