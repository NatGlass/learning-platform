import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image width={50} height={50} alt="Logo" src="/logo.svg" />
    </Link>
  );
};

export default Logo;
