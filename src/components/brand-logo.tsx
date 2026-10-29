import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = { className?: string; priority?: boolean; variant?: "default" | "light"; };
export function BrandLogo({ className, priority = false, variant = "default" }: BrandLogoProps) {
  const sea = siteConfig.brand.shortName === "AC By The Sea";
  return (
    <span className={`brand${sea ? ` brand--sea${variant === "light" ? " brand--sea-light" : ""}` : ""}${className ? ` ${className}` : ""}`}>
      <Image className="brand__logo" src={variant === "light" ? siteConfig.brand.logoLight : siteConfig.brand.logo} alt={siteConfig.brand.name} width={sea ? 455 : 368} height={sea ? 1024 : 115} priority={priority} unoptimized sizes={sea ? "32px" : "(max-width: 767px) 150px, 178px"} />
      {sea && <span className="brand__wordmark">AC <em>BY THE</em> SEA</span>}
    </span>
  );
}
