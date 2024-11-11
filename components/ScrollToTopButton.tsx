'use client';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex items-center justify-center mt-4'>
      <button
        onClick={scrollToTop}
        className='py-1 px-2 text-[#333] rounded bg-[#82CD47] transition-colors duration-300 text-sm'
      >
        Sayfayı En Yukarı Scroll Yap Butonu
      </button>
    </div>
  );
};

export default ScrollToTopButton;
