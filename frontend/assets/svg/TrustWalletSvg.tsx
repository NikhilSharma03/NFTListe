import { NextPage } from "next";

const TrustWalletSvg: NextPage = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 260C0 116.406 116.406 0 260 0h504c143.594 0 260 116.406 260 260v504c0 143.594-116.406 260-260 260H260C116.406 1024 0 907.594 0 764V260Z"
        fill="#fff"
      />
      <path
        d="M512.3 215c103.319 86.288 221.801 80.966 255.653 80.966C760.548 786.707 704.128 689.395 512.3 827 320.472 689.395 264.405 786.707 257 295.966c33.499 0 151.981 5.322 255.3-80.966Z"
        stroke="#3375BB"
        stroke-width="70"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrustWalletSvg;