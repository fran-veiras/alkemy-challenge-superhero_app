import * as React from 'react';

function Crossicon(props) {
  return (
    <svg
      fill="#68D391"
      height={20}
      width={20}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M48 4C23.7 4 4 23.699 4 48s19.7 44 44 44 44-19.699 44-44S72.3 4 48 4zm0 80c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36z" />
      <path d="M53.657 48l8.485-8.485a4 4 0 10-5.658-5.656L48 42.343l-8.485-8.484a4 4 0 00-5.657 5.656L42.343 48l-8.485 8.485a4 4 0 105.657 5.656L48 53.657l8.484 8.484a4 4 0 105.658-5.656L53.657 48z" />
      <style jsx>{`
        svg {
          display: inline;
        }
      `}</style>
    </svg>
  );
}

export default Crossicon;
