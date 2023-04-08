import { Work_Sans } from "next/font/google";
const workFont = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const fontWork = workFont.className;
