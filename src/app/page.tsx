import ModsMenu from "@/components/mods-menu";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Cargando... .m.</div>}>
        <ModsMenu />
      </Suspense>
    </div>
  );
}
