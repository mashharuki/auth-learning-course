"use client";

import * as React from "react"
import {Button} from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {signIn} from "next-auth/react";

export function SignInCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Signin</CardTitle>
        <CardDescription>Signin to start the app.</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className="w-full"
          onClick={() => {
            signIn("cognito")
          }
        }
        >
          Signin with Cognito
        </Button>
        <Button
          className="w-full"
          onClick={() => {
            signIn("google")
          }
        }
        >
          Signin with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
