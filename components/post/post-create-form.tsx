'use client'
import {Input,Textarea,Popover,PopoverContent,PopoverTrigger,Button} from "@nextui-org/react";
import { useFormState } from "react-dom";
import {createPost} from "@/actions";
import FormButton from "../common/form-button";
export default function CreatePostForm(){
    return (

        <Popover placement="left">

            <PopoverTrigger>
                <Button color="primary">Create a Post</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form style={{border:'2px solid black'}}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Post</h3>
                        <Input name="title" placeholder="Title" label="Title" labelPlacement="outside"/>
                        <Textarea name="content" placeholder="Content" label="Content" labelPlacement="outside"/>
                        <FormButton>Submit</FormButton>
                    </div>
                    
                </form>
            </PopoverContent>
        </Popover>
    )
}