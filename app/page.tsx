import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import CretaeTopicForm from "@/components/topic/topic-create-form";
import TopicsList from "@/components/topic/topics-list";
export default function Home() {
  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <CretaeTopicForm />
        <Divider className="my-2"/>
        <h3 className="text">Topics</h3>
        <TopicsList/>
      </div>
    </div>
  );
}
