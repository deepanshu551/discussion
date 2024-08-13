"use server";

import { z } from "zod";
import { auth } from "@/auth";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/paths";
import {revalidatePath} from "next/cache"
const topicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message:
        "name must be atleast 3 character long and should be small letter or a dash",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}
export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["user is not signed in please signup before creating topic"],
      },
    };
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("desc")?.toString();

  let response = topicSchema.safeParse({
    name: name,
    description: description,
  });

  if (!response.success) {
    console.log(response.error.flatten().fieldErrors);
    return {
      errors: response.error.flatten().fieldErrors,
    };
  } else {
    console.log(response);
  }

  let topic:Topic;
  try {

    topic=await db.topic.create({
        data:{
            slug:response.data.name,
            description:response.data.description
        }
    })
    
  } catch (error) {
   if(error instanceof Error){
    return {errors: {
        _form: [error.message],
      },
    }
   }
   else{
    return {errors: {
        _form: ["something went wrong"],
      },
    }
   }
  }
  revalidatePath("/");

  redirect(paths.topicShowPath(topic.slug))
 

}
