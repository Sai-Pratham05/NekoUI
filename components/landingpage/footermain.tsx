import { Github, Twitter, CatIcon } from "lucide-react";
import { Footer } from "@/components/ui/footer";

function FooterMain() {
  return (
    <div className="w-full">
      <Footer
        logo={<CatIcon className="h-10 w-10" />}
        brandName="Neko UI"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Neko UI",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export { FooterMain };
