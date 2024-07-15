import { Button } from "@/components/ui/button";
import React from "react";

function FilterPage() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[18px]">Filtri</h2>
      <div className="mt-2">
        <Button className="mr-2">+ Like 👍</Button>
        <Button className="mr-2 mt-2">+ Commenti 💭</Button>
        <Button className="mr-2 mt-2">+ Recenti ⌚</Button>
        <Button className="mb-2 mt-2">+ Datate 👴</Button>
        <Button className="mb-2 mt-2 ml-2">Contenuti Migliori 🤩</Button>
      </div>
    </div>
  );
}

export default FilterPage;
