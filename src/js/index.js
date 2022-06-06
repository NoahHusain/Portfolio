import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import FastTrackResume from "../assets/FastTrackResume.pdf";

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(FastTrackResume);
}
