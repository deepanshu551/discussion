'use client'
import {
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,Input
} from "@nextui-org/react";

import { createTopic } from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/form-button";
export default function CreateTopicForm() {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });
  console.log('formState',formState)
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button
          color="primary"
          variant="flat"
          style={{ border: "2px solid blue" }}
        >
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              placeholder="Name"
              isInvalid={!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            {formState.errors.name && <span className="text-red-300">{formState.errors.name?.join(', ')}</span>}
            <Textarea
              name="desc"
              label="Description"
              labelPlacement="outside"
              placeholder="describe your topic"
              isInvalid={!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors.description && <span className="text-red-300">{formState.errors.description?.join(', ')}</span>}
            {formState.errors._form && <span className="text-red-300">{formState.errors._form?.join(', ')}</span>}

            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
