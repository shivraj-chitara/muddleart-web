import Link from "next/link";

export default function Footer() {
  return (
    <div className="container container-padding pt-28 pb-8">
      <div className="flex justify-between border-b-2 pb-20 gap-24 sm:flex-col">
        <div className="flex flex-col gap-32 sm:justify-center sm:items-center">
          <Link href="/">
            <img src="/images/newtral-logo.svg" alt="" className="w-36 hover:cursor-pointer" />
          </Link>
          <div className="flex flex-col gap-9">
            <div className="flex justify-between">
              <a href="https://twitter.com/newtral_io" target="_blank" rel="noreferrer">
                <div className="bg-primary-two-base rounded-full w-10 h-10 p-2 hover:cursor-pointer flex justify-center items-center">
                  <img src="/images/twitter-logo.svg" alt="" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/newtral-io/" target="_blank" rel="noreferrer">
                <div className="bg-primary-two-base rounded-full w-10 h-10 p-2 hover:cursor-pointer flex justify-center items-center">
                  <img src="/images/linkedin-logo.svg" alt="" />
                </div>
              </a>
              <a href="mailto:team@newtral.io" target="_blank" rel="noreferrer">
                <div className="bg-primary-two-base rounded-full w-10 h-10 p-2 hover:cursor-pointer flex justify-center items-center">
                  <img src="/images/mail-logo.svg" alt="" />
                </div>
              </a>
              <a href="https://wa.link/4g12r1" target="_blank" rel="noreferrer">
                <div className="bg-primary-two-base rounded-full w-10 h-10 p-2 hover:cursor-pointer flex justify-center items-center">
                  <img src="/images/whatsapp-logo.svg" alt="" />
                </div>
              </a>
            </div>
            <div className="text-[#666576]">
              WeWork, Prestige Atlanta, 80 Feet Rd, <br /> Kormangala 3 Block, Bengaluru, <br /> Karnataka 560034
            </div>
          </div>
        </div>
        <div className="flex gap-28 sm:gap-10">
          <div className="flex flex-col gap-6">
            <div className="uppercase text-primary-two-base font-semibold text-lg">Products</div>
            <div className="flex flex-col gap-6 text-lg text-[#666576]">
              <Link href="/products/carbon-accounting">Carbon Accounting</Link>
              {/* <a href="#">ESG</a> */}
              {/* <a href="#">Integrations</a> */}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="uppercase text-primary-two-base font-semibold text-lg">Services</div>
            <div className="flex flex-col gap-6 text-lg text-[#666576]">
              {/* <a href="#">Climate Consultancy</a> */}
              <Link href="/book-free-consultation">Book Free Consultation</Link>
              <Link href="/services/brsr-reporting">BRSR Reporting</Link>
              {/* <a href="#">LCA Analysis</a>
              <a href="#">Design for Sustainability</a> */}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="uppercase text-primary-two-base font-semibold text-lg">Company</div>
            <div className="flex flex-col gap-6 text-lg text-[#666576]">
              {/* <a href="#">Careers</a> */}
              <Link href="/about-us">About Us</Link>
              {/* <a href="#">Sitemap</a> */}
              {/* <a href="#">Diversity, Equity & Inclusion</a> */}
              {/* <Link href="#">Privacy Policy</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 text-[#666576] font-light">&#169; Newtral Technologies Private Limited, 2022</div>
    </div>
  );
}
