import { SendResponse } from "@/lib/SendResponse";
import { spawn } from "child_process";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
          const { code } = await req.json();

          try {
                    const child = spawn("node", ["-e", code]);

                    let result = "";

                    child.stdout.on("data", (data) => {
                              result = result + data?.toString();
                    });

                    child.stderr.on("data", (data) => {
                              result = result + data?.toString();
                    });

                    child.on("close", (code) => {
                              if (code === 0) {
                                        return SendResponse({
                                                  statusCode: httpStatus.OK,
                                                  success: true,
                                                  message: "Compilation successful",
                                                  data: result,
                                        });
                              } else {
                                        return SendResponse({
                                                  statusCode: httpStatus.BAD_REQUEST,
                                                  success: false,
                                                  message: "Compilation failed",
                                        });
                              }
                    });

                    return NextResponse.json({
                              statusCode: httpStatus.OK,
                              success: true,
                              message: "Compilation successful",
                              data: result,
                    });
          } catch (error) {
                    return NextResponse.json(error);
          }
}