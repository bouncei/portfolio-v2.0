import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface LinkProps {
  children: ReactNode;
  href: any;
  item?: any;
}
function ActiveLink({ children, href, item }: LinkProps): JSX.Element {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();

    if (href === "/assets/resume/JoshuaInyang_Resume-2024.pdf") {
      // Open the link in a new tab
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      data-to-scrollspy-id={item.toLowerCase()}
      //   className={`
      //    ${
      //      router.asPath === href &&
      //      "!text-white bg-[#fb5858] ease-in duration-200 py-[5px] px-[7px] rounded-lg"
      //    }
      // uppercase`}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
