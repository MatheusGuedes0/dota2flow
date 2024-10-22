import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TaskProps {
    id: number;
    name: string,
    description: string,
    priority: number,
    deadLine: Date;
    completed: boolean,
}

export function List() {
    const [tasklist, setTaskList] = useState<TaskProps[] | []>([]);
    const[taskDescription, setTaskDescription] = useState<string>("");


    const handleChangeTaskDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDescription(e.target.value);
    };

    const handleAddTask = () => {
        setTaskList([...tasklist, {
            id: tasklist.length + 1,
            name: "Tarefa",
            description: taskDescription,
            priority: 1,
            deadLine: new Date(),
            completed: false,
        }]);
        setTaskDescription("");
    };
    console.log(tasklist);
return (
    <>
        <div className="flex gap-x-3">
            <Input placeholder="Descrição da tarefa" className="mr-3" value={taskDescription} onChange={handleChangeTaskDescription} />
            <Button onClick={handleAddTask} >Adicionar</Button>
        </div>
        <div className="flex flex-col mt-5">
            {tasklist.map((task, index) => (
                <div key={index} className="flex gap-x-3 items-center mb-3 text-dark">
                    <div className="w-1/2">
                        <Input value={task.name} disabled />
                    </div>
                    <div className="w-1/2">
                        <Input value={task.description} disabled />
                    </div>
                    <div className="w-1/2">
                        <Input value={task.priority} disabled />
                    </div>
                    <div className="w-1/2">
                        <Input type="date" value={task.deadLine} disabled />
                    </div>
                    <Button onClick={() => setTaskList(tasklist.filter((t) => t.id !== task.id))} className="bg-destructive text-destructive-foreground">Excluir</Button>
                </div>
            ))}
          
        </div>
       
    </>
)

}