import { ClipboardList, Clock, Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../Button";

export const Tasks = () => {
  return (
    <div className="p-10 w-full h-min flex flex-col items-center justify-center">
      <div className="w-full items-center justify-between flex">
        <div className="flex items-center gap-4 w-full  justify-start">
          <ClipboardList size={24} color="#fff" />

          <div>
            <h2 className="text-off_white font-semibold size-6">Tarefas</h2>
            <span className="text-placeholder font-normal size-4">
              Gerencie suas atividades.
            </span>
          </div>
        </div>
        <Button
          className="w-max py-3 px-6 whitespace-nowrap"
          icon={<Plus size={24} color="#09090B" />}
        >
          Adicionar tarefa
        </Button>
      </div>

      <Separator
        orientation="horizontal"
        className="my-8"
        style={{
          backgroundColor: "#1E1E24",
        }}
      />

      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="w-full bg-transparent items-center justify-center flex gap-4 border-dashed border-2 border-placeholder py-10 rounded-lg cursor-pointer
         transition-all duration-300 ease-in-out hover:opacity-25 hover:text-button_light
        "
        >
          <Plus size={24} color="#7F7F8D" />
          <span className="text-placeholder font-normal ">
            Adicionar tarefa
          </span>
        </div>
      </div>
    </div>
  );
};
