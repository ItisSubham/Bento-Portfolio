import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://subham-paul.vercel.app/_next/image?url=%2Fme.jpg&w=256&q=95"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
    Hello👋, I'm Subham.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="mailto:subham712303@gmail.com" target="_blank" rel="noreferrer"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://www.youtube.com/@iamsubhampaul" target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://github.com/ItisSubham" target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://x.com/ItisSubham" target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiX />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/iam-subham-paul"target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
      My core stack includes Next.js ⚛, TypeScript 🟦, Tailwind 🎨, and Supabase 🛠. I'm also proficient with Vite ⚡, DrizzleORM 💾, NeonDB 🌐, and PrismicCMS 🖥. Always eager to learn new technologies.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Kolkata</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  return (
    <svg width="40" height="auto" viewBox="0 0 288 223" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-12 fill-zinc-50">
    <rect x="156.684" y="0.5" width="36.8507" height="220.367" rx="18.4254" transform="rotate(15.9846 156.684 0.5)" fill="white" fill-opacity="0.47"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M207.68 48.2539C199.444 55.0944 198.881 66.7997 206.424 74.3983L241.714 109.951L205.012 148.815C197.646 156.616 198.498 168.332 206.917 174.984C215.336 181.636 228.133 180.705 235.5 172.904L282.549 123.082C285.13 120.349 286.702 117.136 287.294 113.828C289.052 107.92 287.558 101.315 282.696 96.4165L236.251 49.6267C228.708 42.028 215.917 41.4134 207.68 48.2539Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.3241 48.2539C88.5605 55.0944 89.1229 66.7997 81.5803 74.3983L46.2902 109.951L82.9918 148.815C90.3587 156.616 89.5059 168.332 81.087 174.984C72.6681 181.636 59.8712 180.705 52.5042 172.904L5.45496 123.082C2.87402 120.349 1.30197 117.136 0.710686 113.828C-1.04768 107.92 0.446495 101.315 5.30869 96.4165L51.7536 49.6267C59.2962 42.028 72.0876 41.4134 80.3241 48.2539Z" fill="white"/>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤ by{" "}
        <a href="https://x.com/ItisSubham" target="_blank" rel="noreferrer" className="text-red-300 hover:underline">
          @subham
        </a>
      </p>
    </footer>
  );
};