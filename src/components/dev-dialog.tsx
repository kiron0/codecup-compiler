"use client"

import { Button } from "@/components/ui/button"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Facebook, Github, Linkedin } from "lucide-react"
import { ReactNode } from "react"

export default function DevDialog({ button }: { button: ReactNode }) {
          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[450px] w-[95%] rounded-2xl">
                                        <DialogHeader>
                                                  <DialogTitle>Developer</DialogTitle>
                                                  <DialogDescription>
                                                            Details about the developer
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <div>
                                                  <p className="text-gray-300 text-center text-sm">
                                                            Hi, I am Toufiq Hasan Kiron. I am a Full Stack Web Developer
                                                            and a Software Engineer. I love to build web applications and
                                                            solve problems using code. I am also a tech enthusiast and
                                                            love to learn new technologies and tools.
                                                            <br />
                                                            <br />
                                                            I am a self-taught developer and I love to share my knowledge
                                                            with others.
                                                  </p>
                                                  <div className="flex justify-center items-center gap-3 my-5">
                                                            <a
                                                                      href="https://facebook.com/toufiqhasankiron"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                            >
                                                                      <Button variant='outline' className="px-3 py-5 rounded-xl">
                                                                                <Facebook size={18} />
                                                                      </Button>
                                                            </a>
                                                            <a
                                                                      href="https://linkedin.com/in/toufiq-hasan-kiron"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                            >
                                                                      <Button variant='outline' className="px-3 py-5 rounded-xl">
                                                                                <Linkedin size={18} />
                                                                      </Button>
                                                            </a>
                                                            <a
                                                                      href="https://github.com/kiron0"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                            >
                                                                      <Button variant='outline' className="px-3 py-5 rounded-xl">
                                                                                <Github size={18} />
                                                                      </Button>
                                                            </a>
                                                  </div>
                                                  <div>
                                                            <p className="text-gray-500 text-center text-xs mt-5">
                                                                      Made with ❤️ by <br />
                                                                      <a
                                                                                href="https://toufiqhasankiron.com"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="uppercase text-[#694CFB]"
                                                                      >
                                                                                Toufiq Hasan Kiron
                                                                      </a>
                                                            </p>
                                                  </div>
                                        </div>
                              </DialogContent>
                    </Dialog>
          )
}