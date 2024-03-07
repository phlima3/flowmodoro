import {
  GithubIcon,
  Info,
  Linkedin,
  Mail,
  MessageCircleMore,
  MonitorDot,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 px-28 border-t-2 border-t-stroke w-full justify-between items-center flex bg-footer gap-[60px]">
      <div className="flex gap-4 items-center">
        <div>
          <h2 className="font-semibold text-base text-off_white">Pedro Lima</h2>
          <p className="font-normal text-sm text-placeholder">
            Frontend Developer
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/pedrolima15/"
            passHref
            target="_blank"
          >
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <Linkedin size={14} color="#fff" />
            </button>
          </Link>
          <Link href="https://github.com/phlima3" passHref target="_blank">
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <GithubIcon size={14} color="#fff" />
            </button>
          </Link>

          <Link
            href="https://portifolio-pedrolima.vercel.app"
            passHref
            target="_blank"
          >
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <MonitorDot size={14} color="#fff" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="inline-block h-[64px] w-0.5 self-stretch bg-stroke" />
      </div>

      <div className="flex gap-6 items-center">
        <div>
          <h2 className="font-semibold text-base text-off_white">
            Curtiu o projeto?
          </h2>
          <p className="font-normal text-sm text-placeholder">
            Então deixe seu feedback!
          </p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:pedrolima3dev@gmail.com">
            <button className="rounded-md py-2 px-6 bg-secondary_button flex justify-center items-center gap-3">
              <Mail size={24} color="#fff" />
              <span className="text-white text-sm ">Fale conosco</span>
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="inline-block h-[64px] w-0.5 self-stretch bg-stroke" />
      </div>

      <div className="flex gap-6 items-center">
        <div>
          <h2 className="font-semibold text-base text-off_white">
            Claudio Duclos
          </h2>
          <p className="font-normal text-sm text-placeholder">UI/UX Designer</p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/claudioduclos/"
            passHref
            target="_blank"
          >
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <Linkedin size={14} color="#fff" />
            </button>
          </Link>
          <a href="mailto:pedrolima3dev@gmail.com">
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <MessageCircleMore size={14} color="#fff" />
            </button>
          </a>

          <Link
            href="https://portifolio-pedrolima.vercel.app"
            passHref
            target="_blank"
          >
            <button className="w-6 h-6 rounded-full bg-secondary_button flex justify-center items-center">
              <MonitorDot size={14} color="#fff" />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
